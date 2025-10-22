import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Phone, Mail, Star } from "lucide-react";
import { Helmet } from "react-helmet";

const FreeTemplate = () => {
  // Demo business data
  const demoData = {
    name: "Your Business Name",
    category: "Business Category",
    description: "We are dedicated to providing exceptional service to our customers. With years of experience and a commitment to quality, we have become a trusted name in our industry.",
    services: ["Service One", "Service Two", "Service Three", "Service Four"],
    phone: "+27 XX XXX XXXX",
    email: "contact@yourbusiness.com",
    location: "Your City, South Africa",
    logo_url: null,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Free Template Preview | BizBudLink</title>
        <meta name="description" content="Preview the Free plan template" />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Free Plan Template Preview
            </span>
            <div className="flex mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl flex items-center justify-center">
                <Building2 className="h-10 w-10 md:h-12 md:h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {demoData.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {demoData.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Mail className="h-5 w-5" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About {demoData.name}</h2>
            <div className="text-center mb-6">
              <Badge>{demoData.category}</Badge>
            </div>
            <p className="text-lg text-muted-foreground text-center mb-12">
              {demoData.description}
            </p>
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
                    100+
                  </div>
                  <h3 className="font-semibold mb-2">Happy Clients</h3>
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
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {demoData.services.map((service, index) => (
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

      {/* Contact Section */}
      <ContactForm
        businessName={demoData.name}
        businessEmail={demoData.email}
        businessPhone={demoData.phone}
        businessLocation={demoData.location}
      />

      <Footer />
    </div>
  );
};

export default FreeTemplate;
