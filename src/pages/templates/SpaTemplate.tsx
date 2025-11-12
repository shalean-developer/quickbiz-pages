import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Phone, Mail, MapPin, Clock, Star, Gift, Calendar } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const SpaTemplate = () => {
  const spaData = {
    name: "Exotic TM Spa",
    category: "Luxury Spa & Wellness",
    description: "Experience ultimate relaxation and rejuvenation with our premium spa treatments. We offer world-class massages, body treatments, and wellness therapies in a tranquil environment.",
    services: [
      {
        name: "Swedish Massage",
        description: "Classic relaxation massage with gentle, flowing strokes to ease tension and promote wellness.",
        duration: "60-90 min",
        price: "From R450"
      },
      {
        name: "Deep Tissue Massage",
        description: "Therapeutic massage targeting deep muscle layers to relieve chronic tension and pain.",
        duration: "60-90 min",
        price: "From R550"
      },
      {
        name: "Hot Stone Therapy",
        description: "Heated stones placed on key points to melt away stress and muscle tension.",
        duration: "90 min",
        price: "From R650"
      },
      {
        name: "Aromatherapy Massage",
        description: "Sensory massage using essential oils to enhance relaxation and emotional wellbeing.",
        duration: "60-90 min",
        price: "From R500"
      },
      {
        name: "Body Scrubs",
        description: "Exfoliating treatment that removes dead skin cells, leaving your skin smooth, soft and glowing.",
        duration: "45-60 min",
        price: "From R400"
      },
      {
        name: "Couple Massage",
        description: "Romantic spa experience for two in a private suite. Perfect for couples, friends or family.",
        duration: "60-90 min",
        price: "From R900"
      }
    ],
    locations: [
      {
        name: "Sandton",
        address: "123 Rivonia Road, Sandton City, Johannesburg",
        area: "Premium Business District",
        phone: "+27 11 123 4567",
        slug: "sandton"
      },
      {
        name: "Umhlanga",
        address: "45 Lighthouse Road, Umhlanga Rocks, Durban",
        area: "Coastal Luxury",
        phone: "+27 31 987 6543",
        slug: "umhlanga"
      },
      {
        name: "Camps Bay",
        address: "78 Victoria Road, Camps Bay, Cape Town",
        area: "Atlantic Seaboard",
        phone: "+27 21 555 7890",
        slug: "camps-bay"
      },
      {
        name: "Waterkloof",
        address: "321 Brooklyn Road, Waterkloof, Pretoria",
        area: "Executive Suburb",
        phone: "+27 12 345 6789",
        slug: "waterkloof"
      }
    ],
    phone: "+27 11 123 4567",
    email: "bookings@exotictmspa.co.za",
    whatsapp: "27111234567",
    workingHours: "24/7 - Open All Day, Every Day"
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{spaData.name} - Luxury Spa & Wellness</title>
        <meta name="description" content={spaData.description} />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyem0wLTR2Mkgy0nYtMmgxMnptMC00djJIMjR2LTJoMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Sparkles className="h-3 w-3 mr-1" />
              {spaData.category}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {spaData.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              {spaData.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 gap-2">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm gap-2">
                <Gift className="h-5 w-5" />
                Gift Vouchers
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/90">
              <Clock className="h-5 w-5" />
              <span className="text-lg font-semibold">{spaData.workingHours}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Expert Therapists', value: '15+' },
              { label: 'Happy Clients', value: '5000+' },
              { label: 'Locations', value: '4' },
              { label: 'Rating', value: '4.9★' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-600">Our Services</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Signature Treatments</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Indulge in our carefully curated spa treatments designed for ultimate relaxation
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spaData.services.map((service, index) => (
                <Card key={index} className="hover:shadow-large transition-all border-2 hover:border-purple-500/30">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Sparkles className="h-6 w-6 text-purple-600" />
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">{service.duration}</div>
                        <div className="text-sm font-semibold text-purple-600">{service.price}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-600">Our Locations</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us</h2>
              <p className="text-xl text-muted-foreground">
                Find us at these premium locations across South Africa
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {spaData.locations.map((location, index) => (
                <Card key={index} className="hover:shadow-large transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-1">{location.name}</h3>
                        <Badge variant="secondary" className="mb-2">{location.area}</Badge>
                        <p className="text-sm text-muted-foreground mb-3">{location.address}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-purple-600" />
                          <a href={`tel:${location.phone}`} className="text-purple-600 hover:underline">
                            {location.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                    <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                      <Link to={`/spa/location/${location.slug}`}>
                        View Location Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Sarah M.", review: "Absolutely divine experience! The couple massage was perfect for our anniversary." },
                { name: "Jessica L.", review: "Best body scrub I've ever had. My skin feels amazing and the staff were so professional." },
                { name: "Michael R.", review: "The hot stone therapy melted all my stress away. Open 24/7 is a game-changer!" }
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-5 w-5 fill-purple-600 text-purple-600" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.review}"</p>
                    <div className="font-semibold">— {testimonial.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm
        businessName={spaData.name}
        businessEmail={spaData.email}
        businessPhone={spaData.phone}
        businessWhatsapp={spaData.whatsapp}
        businessLocation="Multiple Locations"
      />

      <Footer />
      
      {/* WhatsApp Widget */}
      <WhatsAppWidget 
        phoneNumber={spaData.whatsapp}
        message="Hello! I'd like to book a spa treatment at Exotic TM Spa."
      />
    </div>
  );
};

export default SpaTemplate;
