import { Card, CardContent } from "@/components/ui/card";
import { Globe, Zap, Shield, BarChart3, Users, Smartphone } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Online Presence",
      description: "Get a professional landing page with your own custom URL to showcase your business 24/7.",
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Launch in minutes, not days. No coding or design skills required to get started.",
    },
    {
      icon: Users,
      title: "Reach More Customers",
      description: "Get discovered by thousands of visitors browsing our business directory.",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Your page looks perfect on every device - desktop, tablet, and mobile.",
    },
    {
      icon: BarChart3,
      title: "Track Performance",
      description: "Monitor visits and engagement with built-in analytics dashboard.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security and 99.9% uptime.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Business Owners Love BizLaunch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to establish and grow your online presence, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title} 
              className="group hover:shadow-large transition-all duration-300 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-gradient-hero transition-all duration-300">
                  <benefit.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
