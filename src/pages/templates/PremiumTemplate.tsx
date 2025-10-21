import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Crown, TrendingUp, Users, Eye, Award, Target, Zap, CheckCircle2, Star, Globe, Clock, Image as ImageIcon } from "lucide-react";

const PremiumTemplate = () => {
  return (
    <div className="min-h-screen bg-background">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premium Business Name
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Industry-leading excellence with full analytics, custom domain, and maximum visibility for serious business growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-large gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
              <Button size="lg" className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white border-0 shadow-large">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                <Globe className="h-5 w-5" />
                Visit Website
              </Button>
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
                  <h2 className="text-2xl font-bold">Real-Time Analytics</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="bg-gradient-hero text-white border-0">
                    <CardContent className="pt-6">
                      <Eye className="h-8 w-8 mb-2" />
                      <p className="text-3xl font-bold">2,847</p>
                      <p className="text-sm opacity-90">Page Views</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-accent text-white border-0">
                    <CardContent className="pt-6">
                      <Users className="h-8 w-8 mb-2" />
                      <p className="text-3xl font-bold">1,234</p>
                      <p className="text-sm opacity-90">Visitors</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-amber-500 to-orange-500 text-white border-0">
                    <CardContent className="pt-6">
                      <MessageCircle className="h-8 w-8 mb-2" />
                      <p className="text-3xl font-bold">156</p>
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
                We don't just meet expectations—we exceed them. Our premium service combines cutting-edge solutions with unmatched expertise.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Award, title: 'Award Winning', desc: 'Recognized excellence in our field' },
                { icon: Target, title: 'Results Driven', desc: 'Focused on your success metrics' },
                { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround without compromise' },
                { icon: Crown, title: 'Premium Support', desc: '24/7 dedicated assistance' }
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

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
                <ImageIcon className="h-8 w-8 text-primary" />
                Project Showcase
              </h2>
              <p className="text-xl text-muted-foreground">
                Browse our portfolio of successful projects
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-square bg-gradient-hero/10 rounded-lg flex items-center justify-center hover:scale-105 hover:shadow-medium transition-all cursor-pointer">
                  <ImageIcon className="h-12 w-12 text-primary/30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Services</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive solutions for every business need
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {['Enterprise Solutions', 'Custom Development', 'Strategic Consulting', 'Advanced Analytics', 'Premium Support', 'Growth Strategies'].map((service, index) => (
                <Card key={index} className="hover:shadow-large transition-all border-2 hover:border-primary/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary via-accent to-primary rounded-lg flex items-center justify-center text-white shrink-0">
                        <CheckCircle2 className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">{service}</h3>
                        <p className="text-muted-foreground">
                          Premium-tier service with dedicated resources and guaranteed results for maximum impact.
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
                      "The premium service transformed our business. The analytics alone paid for itself in the first month. Highly recommend!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                        CN
                      </div>
                      <div>
                        <div className="font-semibold">Client Name</div>
                        <div className="text-sm text-muted-foreground">CEO, Company Ltd</div>
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-xl text-muted-foreground">
                Ready to take your business to the next level?
              </p>
            </div>
            <Card className="border-2 border-primary/30 shadow-large">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-muted-foreground">+27 XX XXX XXXX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground">hello@premiumbusiness.co.za</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Location</h4>
                        <p className="text-muted-foreground">Johannesburg, South Africa</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Business Hours</h4>
                        <p className="text-muted-foreground">
                          Mon-Fri: 8:00 AM - 8:00 PM<br />
                          Sat-Sun: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary via-accent to-primary rounded-lg p-8 text-white">
                    <Crown className="h-16 w-16 mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Premium Benefits</h3>
                    <ul className="space-y-3 mb-8">
                      {[
                        'Real-time analytics dashboard',
                        'Custom domain support',
                        'SEO optimization',
                        'Priority placement',
                        'Advanced features',
                        '24/7 premium support'
                      ].map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-3">
                      <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now
                      </Button>
                      <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white border-0">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp Us
                      </Button>
                    </div>
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

export default PremiumTemplate;
