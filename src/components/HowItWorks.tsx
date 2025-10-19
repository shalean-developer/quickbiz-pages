import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Edit3, Share2, TrendingUp } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Rocket,
      title: "Sign Up Free",
      description: "Create your account in seconds. No credit card required to get started.",
    },
    {
      icon: Edit3,
      title: "Build Your Page",
      description: "Add your business details, logo, services, and photos in minutes.",
    },
    {
      icon: Share2,
      title: "Share & Promote",
      description: "Get your unique link and share it across social media and with customers.",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Track visits, get discovered by new customers, and watch your business grow.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Launch Your Business Online in Minutes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No technical skills needed. Follow these simple steps to get your business online today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={step.title} 
              className="relative animate-scale-in hover:shadow-large transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-medium">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
