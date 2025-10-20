import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const FreeTemplate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Preview Badge */}
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Free Plan Template Preview
          </span>
        </div>

        {/* Business Header */}
        <div className="bg-card rounded-lg shadow-soft p-8 mb-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gradient-hero rounded-full mb-4 flex items-center justify-center text-white text-3xl font-bold">
              AB
            </div>
            <h1 className="text-4xl font-bold mb-2">Your Business Name</h1>
            <p className="text-muted-foreground max-w-2xl">
              This is your business description. Tell customers what makes your business special 
              and why they should choose you.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-card rounded-lg shadow-soft p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>+27 XX XXX XXXX</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>contact@yourbusiness.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Your City, South Africa</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-hero text-white rounded-lg shadow-medium p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to create your own page?</h3>
          <p className="mb-6 opacity-90">Start with the Free plan and upgrade anytime</p>
          <Link to="/auth">
            <Button size="lg" variant="secondary">
              Get Started Free
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FreeTemplate;
