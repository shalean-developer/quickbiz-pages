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
import { Building2, Phone, MessageCircle, Star, Award, Users, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";

const FeaturedTemplate = () => {
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

  if (!business || !business.is_featured || business.is_premium) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{business.name} | Featured Business</title>
        <meta name="description" content={business.description || `Visit ${business.name} - Featured on BizLaunch`} />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 md:py-32">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-accent text-white border-0 shadow-medium">
            ⭐ Featured Business
          </Badge>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl flex items-center justify-center">
                {business.logo_url ? (
                  <img src={business.logo_url} alt={business.name} className="w-full h-full object-cover rounded-2xl" />
                ) : (
                  <Building2 className="h-12 w-12 md:h-16 md:h-16 text-white" />
                )}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {business.name}
            </h1>
            <div className="mb-6">
              <Badge variant="secondary">{business.category}</Badge>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {business.description || "Premium service with enhanced visibility. Stand out from the competition."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {business.phone && (
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <a href={`tel:${business.phone}`}>
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              )}
              {business.whatsapp && (
                <Button size="lg" className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white border-0" asChild>
                  <a href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Award, label: 'Award Winning', value: '5+' },
              { icon: Users, label: 'Happy Clients', value: '500+' },
              { icon: Star, label: 'Rating', value: '4.9' },
              { icon: CheckCircle2, label: 'Page Views', value: business.view_count.toString() }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      {business.description && (
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">About Us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Excellence in Every Detail</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {business.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {business.gallery_images && business.gallery_images.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
                <p className="text-lg text-muted-foreground">
                  See what we've accomplished
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {business.gallery_images.map((img, i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden">
                    <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {business.services && business.services.length > 0 && (
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive solutions tailored to your needs
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {business.services.map((service, index) => (
                  <Card key={index} className="hover:shadow-medium transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-white shrink-0">
                          <CheckCircle2 className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{service}</h3>
                          <p className="text-muted-foreground">
                            Expert service delivered with precision and care.
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

export default FeaturedTemplate;
