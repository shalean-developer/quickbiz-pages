import { Card, CardContent } from "@/components/ui/card";
import { Globe, MessageCircle, TrendingUp, Zap } from "lucide-react";

export const WhyBizBudLink = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Be found online instantly",
      description: "Get your business discovered by customers searching online 24/7.",
    },
    {
      icon: MessageCircle,
      title: "Connect customers via WhatsApp",
      description: "Enable instant communication with WhatsApp integration built-in.",
    },
    {
      icon: TrendingUp,
      title: "Grow visibility with Google SEO",
      description: "Your page is optimized for search engines to maximize reach.",
    },
    {
      icon: Zap,
      title: "No tech skills needed",
      description: "Simple setup in minutes - anyone can create a professional page.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why BizBudLink?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to establish your online presence and connect with customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title} 
              className="group hover:shadow-large transition-all duration-300 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
