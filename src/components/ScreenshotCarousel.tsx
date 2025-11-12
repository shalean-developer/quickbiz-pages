import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScreenshotCarouselProps {
  screenshots: string[];
  alt: string;
}

export const ScreenshotCarousel = ({ screenshots, alt }: ScreenshotCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  if (screenshots.length === 0) {
    return (
      <div className="w-full aspect-video bg-muted rounded-xl flex items-center justify-center">
        <p className="text-muted-foreground">No screenshots available</p>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full" 
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Screenshot carousel"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
        <img
          src={screenshots[currentIndex]}
          alt={`${alt} - Screenshot ${currentIndex + 1} of ${screenshots.length}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {screenshots.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={goToPrevious}
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={goToNext}
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
          
          <div className="flex justify-center gap-2 mt-4">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
