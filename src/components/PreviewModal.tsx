import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertCircle } from "lucide-react";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  domain: string;
  title: string;
}

export const PreviewModal = ({ isOpen, onClose, domain, title }: PreviewModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh]">
        <DialogHeader>
          <DialogTitle>Live Preview: {title}</DialogTitle>
        </DialogHeader>
        
        <div className="relative w-full h-full rounded-lg overflow-hidden bg-muted">
          <iframe
            src={domain}
            title={`Preview of ${title}`}
            className="w-full h-full border-0"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            onError={() => {
              // Handle iframe loading errors
            }}
          />
          
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
            <div className="bg-card p-6 rounded-lg shadow-lg text-center max-w-md pointer-events-auto">
              <AlertCircle className="w-12 h-12 mx-auto mb-4 text-warning" />
              <p className="text-sm text-muted-foreground">
                Live preview may be blocked by X-Frame-Options.
                <br />
                <a 
                  href={domain} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary underline mt-2 inline-block"
                >
                  Open site in new tab
                </a>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
