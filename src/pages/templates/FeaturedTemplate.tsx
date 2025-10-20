import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, MessageCircle, Star, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedTemplate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Preview Badge */}
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Featured Plan Template Preview
          </span>
          <Badge className="ml-2 bg-gradient-hero">Most Popular</Badge>
        </div>

        {/* Business Header with Highlight */}
        <div className="bg-gradient-card rounded-lg shadow-medium p-8 mb-8 border-2 border-primary">
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 bg-gradient-hero rounded-full mb-4 flex items-center justify-center text-white text-4xl font-bold shadow-medium">
              FB
            </div>
            <Badge className="mb-2 bg-accent">⭐ Featured Business</Badge>
            <h1 className="text-4xl font-bold mb-2">Featured Business Name</h1>
            <p className="text-muted-foreground max-w-2xl">
              Premium description with enhanced visibility. Your business stands out with highlighted 
              listing, WhatsApp integration, and priority placement in the directory.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="bg-card rounded-lg shadow-soft p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <ImageIcon className="h-6 w-6 text-primary" />
            Image Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gradient-hero/10 rounded-lg flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-primary/30" />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information with WhatsApp */}
        <div className="bg-card rounded-lg shadow-soft p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>+27 XX XXX XXXX</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>contact@featuredbusiness.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Cape Town, South Africa</span>
            </div>
          </div>
          
          {/* WhatsApp Button */}
          <Button className="w-full mt-6 bg-[#25D366] hover:bg-[#20BD5A] text-white">
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-hero text-white rounded-lg shadow-large p-8 text-center">
          <Star className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Stand out from the crowd</h3>
          <p className="mb-6 opacity-90">Upgrade to Featured for just R150/month</p>
          <Link to="/auth">
            <Button size="lg" variant="secondary">
              Go Featured
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FeaturedTemplate;
