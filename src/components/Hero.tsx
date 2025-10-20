import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            BizBudLink – Launch your business online in minutes
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Create your own landing page, get found by customers, and grow your business — fast, simple, free.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/auth">
              <Button size="lg" className="gap-2 group shadow-lg hover:shadow-xl transition-all">
                Create My Page
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/directory">
              <Button size="lg" variant="outline" className="border-2">
                Explore Businesses
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t">
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">1,000+</div>
              <div className="text-sm text-muted-foreground">Active Businesses</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Monthly Visitors</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Free to Start</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
