import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";
import { Site } from "@/data/sites";

interface SiteCardProps {
  site: Site;
}

export const SiteCard = ({ site }: SiteCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <div 
                className="w-3 h-3 rounded-full flex-shrink-0" 
                style={{ backgroundColor: site.primaryColor }}
                aria-label={`${site.title} brand color`}
              />
              <Badge variant="secondary" className="text-xs">
                {site.category}
              </Badge>
            </div>
            <CardTitle className="text-xl mb-1 break-words">{site.title}</CardTitle>
            <CardDescription className="text-sm line-clamp-2">
              {site.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-mono truncate">
            {site.domain}
          </p>
          
          <div className="flex flex-wrap gap-1.5">
            {site.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-muted-foreground space-y-1">
            <p>Contact: {site.contact}</p>
            {site.launchDate && <p>Launched: {site.launchDate}</p>}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button asChild variant="default" className="flex-1" size="sm">
            <Link to={`/sites/${site.slug}`}>
              <Eye className="w-4 h-4 mr-1" />
              View Page
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="flex-1" 
            size="sm"
          >
            <a 
              href={site.domain} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Visit Site
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
