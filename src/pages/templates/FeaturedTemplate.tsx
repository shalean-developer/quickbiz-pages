import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Phone, MessageCircle, Star, Award, Users, CheckCircle2, Image as ImageIcon } from "lucide-react";
import { Helmet } from "react-helmet";

const FeaturedTemplate = () => {
  // Demo business data
  const demoData = {
    name: "Featured Business Name",
    category: "Premium Category",
    description: "We're passionate about delivering outstanding results. Our featured status reflects our commitment to quality and customer satisfaction. Experience the difference with our professional team.",
    services: ["Premium Service 1", "Premium Service 2", "Premium Service 3", "Premium Service 4", "Premium Service 5", "Premium Service 6"],
    phone: "+27 XX XXX XXXX",
    email: "contact@featuredbusiness.com",
    whatsapp: "27XXXXXXXXX",
    location: "Cape Town, South Africa",
    logo_url: null,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Featured Template Preview | BizBudLink</title>
        <meta name="description" content="Preview the Featured plan template" />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 md:py-32">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-accent text-white border-0 shadow-medium">
            ⭐ Featured Business Template
          </Badge>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl flex items-center justify-center">
                <Building2 className="h-12 w-12 md:h-16 md:h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {demoData.name}
            </h1>
            <div className="mb-6">
              <Badge variant="secondary">{demoData.category}</Badge>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {demoData.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
              <Button size="lg" className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white border-0">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
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
              { icon: CheckCircle2, label: 'Projects Done', value: '1000+' }
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">About Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Excellence in Every Detail</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {demoData.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
                <ImageIcon className="h-8 w-8 text-primary" />
                Our Work Gallery
              </h2>
              <p className="text-lg text-muted-foreground">
                Your uploaded images will appear here
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="group relative aspect-square bg-gradient-hero/10 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition-all border-2 border-dashed border-primary/30">
                  <ImageIcon className="h-12 w-12 text-primary/30 mb-2" />
                  <span className="text-xs text-muted-foreground">Gallery Image {i}</span>
                  <span className="absolute inset-0 flex items-center justify-center bg-primary/90 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    Upload in Dashboard
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              {demoData.services.map((service, index) => (
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

      {/* Contact Section */}
      <ContactForm
        businessName={demoData.name}
        businessEmail={demoData.email}
        businessPhone={demoData.phone}
        businessWhatsapp={demoData.whatsapp}
        businessLocation={demoData.location}
      />

      <Footer />
    </div>
  );
};

export default FeaturedTemplate;
