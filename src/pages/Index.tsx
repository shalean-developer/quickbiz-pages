import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedBusinesses } from "@/components/FeaturedBusinesses";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Crown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedBusinesses />

      {/* Premium Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-card rounded-2xl border shadow-large p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
                <Crown className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Premium Features
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Upgrade to Premium
              </h2>
              <p className="text-muted-foreground">
                Get featured placement, advanced analytics, and SEO tools to grow faster
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                "Featured homepage placement",
                "Advanced analytics dashboard",
                "SEO optimization tools",
                "Priority customer support",
                "Lead capture forms",
                "Custom domain support",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-4">
                Payment integration coming soon via Paystack
              </div>
              <Button size="lg" disabled className="gap-2">
                <Crown className="h-4 w-4" />
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 BizLaunch. All rights reserved.</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <Link to="/directory" className="hover:text-primary transition-colors">
                Directory
              </Link>
              <span>•</span>
              <Link to="/auth" className="hover:text-primary transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
