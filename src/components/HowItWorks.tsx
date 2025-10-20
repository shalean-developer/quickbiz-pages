import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Edit3, Share2 } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create an account",
      description: "Sign up in seconds with just your email - completely free to start.",
    },
    {
      icon: Edit3,
      title: "Add business details and images",
      description: "Fill in your business info, upload photos, and customize your page.",
    },
    {
      icon: Share2,
      title: "Share your page with customers",
      description: "Get your unique link and start sharing with customers everywhere.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to get your business online and start growing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={step.title} 
              className="relative animate-scale-in hover:shadow-large transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center shadow-medium">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-medium">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
