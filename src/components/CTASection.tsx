import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-card rounded-2xl border shadow-large p-8 md:p-12 text-center animate-fade-in relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-5" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Join 1,000+ small businesses already online
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Create your free landing page today and start connecting with more customers.
            </p>

            <Link to="/auth">
              <Button size="lg" className="gap-2 group shadow-medium hover:shadow-large transition-all">
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <p className="text-xs text-muted-foreground mt-6">
              No credit card required • Setup in under 5 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
