import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Crown, TrendingUp, Users, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const PremiumTemplate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Preview Badge */}
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Premium Plan Template Preview
          </span>
          <Badge className="ml-2 bg-gradient-to-r from-amber-500 to-orange-500">
            <Crown className="h-3 w-3 mr-1" />
            Premium
          </Badge>
        </div>

        {/* Business Header */}
        <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-lg shadow-large p-8 mb-8 border border-primary/20">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-gradient-hero rounded-full mb-4 flex items-center justify-center text-white text-4xl font-bold shadow-large ring-4 ring-primary/20">
              PB
            </div>
            <Badge className="mb-2 bg-gradient-to-r from-amber-500 to-orange-500">
              <Crown className="h-3 w-3 mr-1" />
              Premium Business
            </Badge>
            <h1 className="text-5xl font-bold mb-3 bg-gradient-hero bg-clip-text text-transparent">
              Premium Business Name
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Full-featured premium page with analytics dashboard, custom domain, SEO optimization, 
              and maximum visibility. Everything you need for serious business growth.
            </p>
          </div>
        </div>

        {/* Analytics Dashboard Preview */}
        <div className="bg-card rounded-lg shadow-soft p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Analytics Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-hero text-white">
              <CardContent className="pt-6">
                <Eye className="h-8 w-8 mb-2" />
                <p className="text-3xl font-bold">2,847</p>
                <p className="text-sm opacity-90">Page Views</p>
              </CardContent>
            </Card>
            <Card className="bg-accent text-white">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 mb-2" />
                <p className="text-3xl font-bold">1,234</p>
                <p className="text-sm opacity-90">Unique Visitors</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500 to-orange-500 text-white">
              <CardContent className="pt-6">
                <MessageCircle className="h-8 w-8 mb-2" />
                <p className="text-3xl font-bold">156</p>
                <p className="text-sm opacity-90">Contact Clicks</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services & Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Services */}
          <div className="bg-card rounded-lg shadow-soft p-8">
            <h2 className="text-2xl font-bold mb-6">Our Services</h2>
            <ul className="space-y-3">
              {['Premium Service 1', 'Premium Service 2', 'Premium Service 3', 'Premium Service 4'].map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-card rounded-lg shadow-soft p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+27 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>hello@premiumbusiness.co.za</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Johannesburg, South Africa</span>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-[#25D366] hover:bg-[#20BD5A] text-white">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary via-accent to-primary text-white rounded-lg shadow-large p-10 text-center">
          <Crown className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Ready for serious growth?</h3>
          <p className="mb-6 text-lg opacity-90">
            Get analytics, custom domain, SEO optimization, and more for R299/month
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="shadow-medium">
              Go Premium
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PremiumTemplate;
