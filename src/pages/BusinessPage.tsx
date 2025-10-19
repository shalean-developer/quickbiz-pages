import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Helmet } from "react-helmet";

const BusinessPage = () => {
  const { slug } = useParams();

  const { data: business, isLoading } = useQuery({
    queryKey: ["business", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("businesses")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) throw error;
      return data;
    },
  });

  const incrementViewMutation = useMutation({
    mutationFn: async () => {
      if (!business) return;
      await supabase
        .from("businesses")
        .update({ view_count: business.view_count + 1 })
        .eq("id", business.id);
    },
  });

  const incrementClickMutation = useMutation({
    mutationFn: async () => {
      if (!business) return;
      await supabase
        .from("businesses")
        .update({ click_count: business.click_count + 1 })
        .eq("id", business.id);
    },
  });

  useEffect(() => {
    if (business) {
      incrementViewMutation.mutate();
    }
  }, [business?.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!business) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Business Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The business you're looking for doesn't exist.
          </p>
          <Link to="/directory">
            <Button>Browse Directory</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{business.name} | BizLaunch</title>
        <meta name="description" content={business.description || `Visit ${business.name} on BizLaunch`} />
        <meta property="og:title" content={business.name} />
        <meta property="og:description" content={business.description || `Visit ${business.name} on BizLaunch`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <div className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6 shadow-large">
              {business.logo_url ? (
                <img
                  src={business.logo_url}
                  alt={business.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <Building2 className="h-12 w-12 text-primary" />
              )}
            </div>
            <h1 className="text-4xl font-bold mb-4">{business.name}</h1>
            <Badge variant="secondary" className="mb-4">
              {business.category}
            </Badge>
            {business.location && (
              <div className="flex items-center justify-center gap-2 text-white/90">
                <MapPin className="h-4 w-4" />
                <span>{business.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {business.description && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">About Us</h2>
                <p className="text-muted-foreground">{business.description}</p>
              </CardContent>
            </Card>
          )}

          {business.services && business.services.length > 0 && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                <div className="flex flex-wrap gap-2">
                  {business.services.map((service, i) => (
                    <Badge key={i} variant="outline">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                {business.phone && (
                  <a
                    href={`tel:${business.phone}`}
                    onClick={() => incrementClickMutation.mutate()}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{business.phone}</span>
                  </a>
                )}
                {business.email && (
                  <a
                    href={`mailto:${business.email}`}
                    onClick={() => incrementClickMutation.mutate()}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>{business.email}</span>
                  </a>
                )}
                {business.whatsapp && (
                  <a
                    href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => incrementClickMutation.mutate()}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>

              {(business.facebook_url ||
                business.instagram_url ||
                business.twitter_url) && (
                <>
                  <div className="border-t my-6" />
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {business.facebook_url && (
                      <a
                        href={business.facebook_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                    )}
                    {business.instagram_url && (
                      <a
                        href={business.instagram_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                    )}
                    {business.twitter_url && (
                      <a
                        href={business.twitter_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {business.whatsapp && (
            <Button
              size="lg"
              className="w-full gap-2"
              onClick={() => {
                incrementClickMutation.mutate();
                window.open(
                  `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}`,
                  "_blank"
                );
              }}
            >
              <MessageCircle className="h-5 w-5" />
              Contact Business on WhatsApp
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
