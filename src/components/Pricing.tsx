import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "R0",
      period: "forever",
      description: "Perfect to get started",
      features: [
        "Basic landing page",
        "Directory listing",
        "Contact information",
        "Mobile responsive",
      ],
      icon: Sparkles,
      cta: "Get Started Free",
      popular: false,
      link: "/template/free",
    },
    {
      name: "Featured",
      price: "R150",
      period: "/month",
      description: "Stand out from the crowd",
      features: [
        "Everything in Free",
        "Highlighted listing",
        "WhatsApp button",
        "Priority placement",
        "Image gallery",
      ],
      icon: Star,
      cta: "Go Featured",
      popular: true,
      link: "/template/featured",
    },
    {
      name: "Premium",
      price: "R299",
      period: "/month",
      description: "For serious growth",
      features: [
        "Everything in Featured",
        "Analytics dashboard",
        "Custom domain",
        "SEO optimization",
        "More traffic",
        "Lead capture forms",
      ],
      icon: Crown,
      cta: "Go Premium",
      popular: false,
      link: "/template/premium",
    },
    {
      name: "Setup Service",
      price: "R500",
      period: "once-off",
      description: "We do it for you",
      features: [
        "Professional page setup",
        "Content writing help",
        "Image optimization",
        "Full customization",
        "Ready in 24 hours",
      ],
      icon: Zap,
      cta: "Get Setup Service",
      popular: false,
      link: "/template/setup-service",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative animate-scale-in hover:shadow-large transition-all duration-300 ${
                plan.popular ? 'border-primary border-2 shadow-medium' : 'border-border/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-hero shadow-medium">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${
                  plan.popular ? 'bg-gradient-hero' : 'bg-primary/10'
                }`}>
                  <plan.icon className={`h-6 w-6 ${
                    plan.popular ? 'text-primary-foreground' : 'text-primary'
                  }`} />
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription className="text-xs">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Link to={plan.link} className="w-full">
                  <Button 
                    className={`w-full ${plan.popular ? 'shadow-medium' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
