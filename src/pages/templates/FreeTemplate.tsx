import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Phone, Mail, Star } from "lucide-react";
import { Helmet } from "react-helmet";

const FreeTemplate = () => {
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

  useEffect(() => {
    if (business) {
      incrementViewMutation.mutate();
    }
  }, [business?.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!business || business.is_premium || business.is_featured) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{business.name} | Free Business Page</title>
        <meta name="description" content={business.description || `Visit ${business.name}`} />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Free Plan
            </span>
            <div className="flex mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl flex items-center justify-center">
                {business.logo_url ? (
                  <img src={business.logo_url} alt={business.name} className="w-full h-full object-cover rounded-xl" />
                ) : (
                  <Building2 className="h-10 w-10 md:h-12 md:h-12 text-white" />
                )}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {business.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {business.description || "Quality service you can trust. Serving the community with excellence."}
            </p>
            <div className="flex flex-wrap gap-4">
              {business.phone && (
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <a href={`tel:${business.phone}`}>
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              )}
              {business.email && (
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <a href={`mailto:${business.email}`}>
                    <Mail className="h-5 w-5" />
                    Email Us
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About {business.name}</h2>
            <div className="text-center mb-6">
              <Badge>{business.category}</Badge>
            </div>
            {business.description && (
              <p className="text-lg text-muted-foreground text-center mb-12">
                {business.description}
              </p>
            )}
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    5+
                  </div>
                  <h3 className="font-semibold mb-2">Years Experience</h3>
                  <p className="text-sm text-muted-foreground">Serving our community</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {business.view_count}+
                  </div>
                  <h3 className="font-semibold mb-2">Page Views</h3>
                  <p className="text-sm text-muted-foreground">And growing</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    <Star className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Top Rated</h3>
                  <p className="text-sm text-muted-foreground">Quality service</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {business.services && business.services.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {business.services.map((service, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-white font-bold shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{service}</h3>
                          <p className="text-muted-foreground">
                            Professional service tailored to your needs.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <ContactForm
        businessName={business.name}
        businessEmail={business.email}
        businessPhone={business.phone}
        businessWhatsapp={business.whatsapp}
        businessLocation={business.location}
      />

      <Footer />
    </div>
  );
};

export default FreeTemplate;
