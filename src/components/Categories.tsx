import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Scissors, 
  Wrench, 
  Coffee, 
  Home, 
  Car, 
  Shirt, 
  Heart, 
  Camera,
  Laptop,
  Utensils,
  Dumbbell,
  Briefcase
} from "lucide-react";

export const Categories = () => {
  const categories = [
    { icon: Scissors, name: "Beauty & Salon", count: 45 },
    { icon: Wrench, name: "Home Services", count: 67 },
    { icon: Coffee, name: "Food & Beverage", count: 89 },
    { icon: Car, name: "Auto Services", count: 34 },
    { icon: Shirt, name: "Fashion & Retail", count: 56 },
    { icon: Heart, name: "Health & Wellness", count: 43 },
    { icon: Camera, name: "Photography", count: 28 },
    { icon: Laptop, name: "Technology", count: 52 },
    { icon: Utensils, name: "Restaurants", count: 78 },
    { icon: Dumbbell, name: "Fitness", count: 31 },
    { icon: Home, name: "Real Estate", count: 39 },
    { icon: Briefcase, name: "Professional Services", count: 61 },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perfect for Any Business Type
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of businesses across diverse industries already growing with BizLaunch.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <Card 
              key={category.name}
              className="group cursor-pointer hover:shadow-large transition-all duration-300 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-card flex items-center justify-center group-hover:bg-gradient-hero transition-all duration-300 shadow-soft">
                  <category.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {category.count} businesses
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
