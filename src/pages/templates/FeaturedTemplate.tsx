import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Star, Clock, Award, Users, CheckCircle2, Image as ImageIcon } from "lucide-react";

const FeaturedTemplate = () => {
  return (
    <div className="min-h-screen bg-background">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Featured Business Name
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Premium service with enhanced visibility. Stand out from the competition and connect with more customers.
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
                We're passionate about delivering outstanding results. Our featured status reflects our commitment to quality and customer satisfaction.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Professional Team', desc: 'Experienced experts dedicated to your success' },
                { title: 'Quality Guarantee', desc: 'We stand behind every project we complete' },
                { title: 'Customer First', desc: 'Your satisfaction is our top priority' }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
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
                Our Work
              </h2>
              <p className="text-lg text-muted-foreground">
                See what we've accomplished for our clients
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-gradient-hero/10 rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                  <ImageIcon className="h-12 w-12 text-primary/30" />
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
              {['Premium Service 1', 'Premium Service 2', 'Premium Service 3', 'Premium Service 4', 'Premium Service 5', 'Premium Service 6'].map((service, index) => (
                <Card key={index} className="hover:shadow-medium transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-white shrink-0">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{service}</h3>
                        <p className="text-muted-foreground">
                          Expert service delivered with precision and care for outstanding results.
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

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "Outstanding service! Professional, reliable, and exceeded our expectations."
                    </p>
                    <div className="font-semibold">Client Name</div>
                    <div className="text-sm text-muted-foreground">Business Owner</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Ready to start your project? Contact us today
              </p>
            </div>
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">+27 XX XXX XXXX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">contact@featuredbusiness.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-muted-foreground">Cape Town, South Africa</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">Mon-Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-hero rounded-lg p-8 text-white">
                    <Star className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Featured Business Benefits</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 shrink-0" />
                        <span>Priority listing in directory</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 shrink-0" />
                        <span>WhatsApp integration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 shrink-0" />
                        <span>Image gallery showcase</span>
                      </li>
                    </ul>
                    <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white border-0 gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturedTemplate;
