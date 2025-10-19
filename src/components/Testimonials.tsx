import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Bloom Beauty Salon",
      category: "Beauty & Wellness",
      content: "BizLaunch helped me get my salon online in less than 10 minutes. I've already received 5 new bookings from customers who found me in the directory!",
      rating: 5,
      initials: "SJ",
    },
    {
      name: "Marcus Chen",
      business: "QuickFix Auto Repair",
      category: "Auto Services",
      content: "As a small auto shop owner, I didn't have time to build a website. BizLaunch made it so easy, and now I can share my services with customers instantly.",
      rating: 5,
      initials: "MC",
    },
    {
      name: "Priya Patel",
      business: "Spice Garden Restaurant",
      category: "Food & Beverage",
      content: "The best decision for my restaurant. My page looks professional, and the analytics help me understand what customers are interested in. Highly recommend!",
      rating: 5,
      initials: "PP",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Business Owners Are Saying
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful businesses already growing with BizLaunch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="animate-scale-in hover:shadow-large transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-primary/20">
                    <AvatarFallback className="bg-gradient-hero text-primary-foreground font-semibold text-sm">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.business}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
