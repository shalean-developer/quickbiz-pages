import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
    
    if (userError || !user) {
      throw new Error('Unauthorized');
    }

    const { reference } = await req.json();

    if (!reference) {
      throw new Error('Payment reference is required');
    }

    console.log('Verifying payment:', reference);

    // Verify with Paystack
    const paystackResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${Deno.env.get('PAYSTACK_SECRET_KEY')}`,
        },
      }
    );

    const paystackData = await paystackResponse.json();

    if (!paystackResponse.ok || !paystackData.status) {
      console.error('Paystack verification error:', paystackData);
      throw new Error(paystackData.message || 'Payment verification failed');
    }

    const { data } = paystackData;

    if (data.status !== 'success') {
      return new Response(
        JSON.stringify({ status: 'failed', message: 'Payment was not successful' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    }

    // Update payment in database
    const paymentId = data.reference || data.metadata?.payment_id;

    const { data: payment, error: paymentError } = await supabaseClient
      .from('payments')
      .update({ status: 'completed' })
      .eq('id', paymentId)
      .eq('user_id', user.id)
      .select()
      .single();

    if (paymentError) {
      console.error('Payment update error:', paymentError);
      throw new Error('Failed to update payment');
    }

    // Update business based on plan
    const updateData: any = {};
    
    if (payment.plan === 'featured') {
      updateData.is_featured = true;
    } else if (payment.plan === 'premium') {
      updateData.is_premium = true;
      updateData.is_featured = true;
    }

    if (Object.keys(updateData).length > 0) {
      const { error: businessError } = await supabaseClient
        .from('businesses')
        .update(updateData)
        .eq('id', payment.business_id)
        .eq('owner_id', user.id);

      if (businessError) {
        console.error('Business update error:', businessError);
        throw new Error('Failed to update business');
      }
    }

    console.log('Payment verified and business updated successfully');

    return new Response(
      JSON.stringify({ 
        status: 'success',
        payment,
        message: 'Payment verified successfully'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in paystack-verify:', error);
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
