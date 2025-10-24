import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { crypto } from "https://deno.land/std@0.190.0/crypto/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-paystack-signature',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const signature = req.headers.get('x-paystack-signature');
    const body = await req.text();

    // Verify webhook signature
    const hash = await crypto.subtle.digest(
      'SHA-512',
      new TextEncoder().encode(Deno.env.get('PAYSTACK_SECRET_KEY') + body)
    );
    const expectedSignature = Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    if (signature !== expectedSignature) {
      console.error('Invalid signature');
      return new Response(JSON.stringify({ error: 'Invalid signature' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const event = JSON.parse(body);
    console.log('Webhook event received:', event.event);

    // Only handle successful charge events
    if (event.event === 'charge.success') {
      const { reference, metadata } = event.data;
      const paymentId = reference || metadata?.payment_id;

      if (!paymentId) {
        throw new Error('No payment ID found in webhook data');
      }

      const supabaseAdmin = createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
      );

      // Update payment status
      const { data: payment, error: paymentError } = await supabaseAdmin
        .from('payments')
        .update({ status: 'completed' })
        .eq('id', paymentId)
        .select()
        .single();

      if (paymentError) {
        console.error('Payment update error:', paymentError);
        throw new Error('Failed to update payment');
      }

      console.log('Payment completed:', payment);

      // Update business based on plan
      const updateData: any = {};
      
      if (payment.plan === 'featured') {
        updateData.is_featured = true;
      } else if (payment.plan === 'premium') {
        updateData.is_premium = true;
        updateData.is_featured = true;
      }

      if (Object.keys(updateData).length > 0) {
        const { error: businessError } = await supabaseAdmin
          .from('businesses')
          .update(updateData)
          .eq('id', payment.business_id);

        if (businessError) {
          console.error('Business update error:', businessError);
          throw new Error('Failed to update business');
        }

        console.log('Business updated successfully:', payment.business_id);
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error in paystack-webhook:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});
