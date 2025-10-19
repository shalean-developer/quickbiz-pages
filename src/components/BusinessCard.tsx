import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface BusinessCardProps {
  id: string;
  name: string;
  slug: string;
  category: string;
  description?: string;
  logo_url?: string;
  location?: string;
  is_featured?: boolean;
}

export const BusinessCard = ({
  name,
  slug,
  category,
  description,
  logo_url,
  location,
  is_featured,
}: BusinessCardProps) => {
  return (
    <Card className="group hover:shadow-large transition-all duration-300 animate-scale-in overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-lg bg-gradient-card flex items-center justify-center border shadow-soft flex-shrink-0">
            {logo_url ? (
              <img
                src={logo_url}
                alt={name}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <Building2 className="h-8 w-8 text-primary" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors truncate">
                {name}
              </h3>
              {is_featured && (
                <Badge variant="secondary" className="gap-1 flex-shrink-0">
                  <Star className="h-3 w-3 fill-current" />
                  Featured
                </Badge>
              )}
            </div>

            <Badge variant="outline" className="mb-3">
              {category}
            </Badge>

            {description && (
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {description}
              </p>
            )}

            {location && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span className="truncate">{location}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link to={`/business/${slug}`} className="w-full">
          <Button className="w-full" variant="outline">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
