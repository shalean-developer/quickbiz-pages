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
import { Building2, Crown, TrendingUp, Users, Eye, MessageCircle, Award, Target, Zap, CheckCircle2, Star, Globe } from "lucide-react";
import { Helmet } from "react-helmet";

const PremiumTemplate = () => {
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

  if (!business || !business.is_premium) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{business.name} | Premium Business</title>
        <meta name="description" content={business.description || `Visit ${business.name} - Premium member on BizLaunch`} />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-accent to-primary text-white py-24 md:py-40">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyem0wLTR2Mkgy0nYtMmgxMnptMC00djJIMjR2LTJoMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-large">
            <Crown className="h-3 w-3 mr-1" />
            Premium Business
          </Badge>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur-sm border-4 border-white/30 rounded-3xl flex items-center justify-center shadow-large">
                {business.logo_url ? (
                  <img src={business.logo_url} alt={business.name} className="w-full h-full object-cover rounded-3xl" />
                ) : (
                  <Building2 className="h-16 w-16 md:h-20 md:h-20 text-white" />
                )}
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {business.name}
            </h1>
            <div className="mb-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">{business.category}</Badge>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              {business.description || "Industry-leading excellence with full analytics and maximum visibility for serious business growth."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {business.phone && (
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-large gap-2" asChild>
                  <a href={`tel:${business.phone}`}>
                    <Eye className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              )}
              {business.whatsapp && (
                <Button size="lg" className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white border-0 shadow-large" asChild>
                  <a href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              )}
              {business.email && (
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" asChild>
                  <a href={`mailto:${business.email}`}>
                    <Globe className="h-5 w-5" />
                    Email Us
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-12 bg-background -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-large border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Business Analytics</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="bg-gradient-hero text-white border-0">
                    <CardContent className="pt-6">
                      <Eye className="h-8 w-8 mb-2" />
                      <p className="text-3xl font-bold">{business.view_count}</p>
                      <p className="text-sm opacity-90">Page Views</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-accent text-white border-0">
                    <CardContent className="pt-6">
                      <Users className="h-8 w-8 mb-2" />
                      <p className="text-3xl font-bold">{business.click_count}</p>
                      <p className="text-sm opacity-90">Engagements</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-amber-500 to-orange-500 text-white border-0">
                    <CardContent className="pt-6">
                      <MessageCircle className="h-8 w-8 mb-2" />
                      <p className="text-3xl font-bold">{Math.floor(business.click_count * 0.6)}</p>
                      <p className="text-sm opacity-90">Contacts</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white border-0">
                    <CardContent className="pt-6">
                      <TrendingUp className="h-8 w-8 mb-2" />
                      <p className="text-3xl font-bold">+24%</p>
                      <p className="text-sm opacity-90">Growth</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      {business.description && (
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                  <Crown className="h-3 w-3 mr-1" />
                  Premium Excellence
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Industry-Leading Service</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {business.description}
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: Award, title: 'Award Winning', desc: 'Recognized excellence' },
                  { icon: Target, title: 'Results Driven', desc: 'Focused on success' },
                  { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround' },
                  { icon: Crown, title: 'Premium Support', desc: '24/7 assistance' }
                ].map((item, index) => (
                  <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-medium transition-all">
                    <CardContent className="pt-6 text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        <item.icon className="h-8 w-8" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {business.gallery_images && business.gallery_images.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Project Showcase</h2>
                <p className="text-xl text-muted-foreground">
                  Our premium portfolio
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

      {/* Services Grid */}
      {business.services && business.services.length > 0 && (
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Services</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive solutions for every need
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {business.services.map((service, index) => (
                  <Card key={index} className="hover:shadow-large transition-all border-2 hover:border-primary/30">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary via-accent to-primary rounded-lg flex items-center justify-center text-white shrink-0">
                          <CheckCircle2 className="h-7 w-7" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl mb-2">{service}</h3>
                          <p className="text-muted-foreground">
                            Premium-tier service with dedicated resources and guaranteed results.
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

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-xl text-muted-foreground">
                Hear from businesses we've helped grow
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">
                      "The premium service transformed our business. Highly recommend!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                        CN
                      </div>
                      <div>
                        <div className="font-semibold">Client Name</div>
                        <div className="text-sm text-muted-foreground">Business Owner</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

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

export default PremiumTemplate;
