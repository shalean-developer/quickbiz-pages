import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, CheckCircle, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const SetupServiceTemplate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Preview Badge */}
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Setup Service Template Preview
          </span>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg shadow-large p-10 mb-8 text-center border border-amber-200 dark:border-amber-800">
          <Zap className="h-16 w-16 mx-auto mb-4 text-amber-600" />
          <Badge className="mb-4 bg-amber-600">Done For You Service</Badge>
          <h1 className="text-4xl font-bold mb-4">We'll Build Your Page For You</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Sit back and relax while our team creates a professional, customized landing page 
            for your business. Ready in 24 hours or less!
          </p>
          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
            <span className="text-4xl text-amber-600">R500</span>
            <span className="text-muted-foreground">once-off</span>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-card rounded-lg shadow-soft p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Professional page setup & design',
              'Content writing assistance',
              'Image optimization & editing',
              'Full customization to match your brand',
              'SEO-ready structure',
              'Ready in 24 hours',
              'One round of revisions included',
              'Training on how to update your page'
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-card rounded-lg shadow-soft p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">You Provide Info</h3>
                <p className="text-sm text-muted-foreground">
                  Share your business details, images, and preferences with our team
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">We Build It</h3>
                <p className="text-sm text-muted-foreground">
                  Our experts create your professional landing page within 24 hours
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">You Go Live</h3>
                <p className="text-sm text-muted-foreground">
                  Review, approve, and start getting customers right away
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Preview of Result */}
        <div className="bg-gradient-card rounded-lg shadow-soft p-8 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-amber-600" />
            <h2 className="text-xl font-bold">Sample Result</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Here's what your professionally designed page could look like:
          </p>
          <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border-2 border-dashed border-primary/20">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto" />
              <h3 className="text-2xl font-bold">Your Business Name</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Professional description crafted by our team to highlight your unique value proposition
              </p>
              <div className="flex gap-2 justify-center">
                <Badge>Professional</Badge>
                <Badge>Customized</Badge>
                <Badge>SEO-Ready</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-lg shadow-large p-10 text-center">
          <Clock className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Ready in 24 Hours</h3>
          <p className="mb-6 text-lg opacity-90">
            Skip the hassle and get a professional page built for you
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="shadow-medium">
              Get Setup Service - R500
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SetupServiceTemplate;
