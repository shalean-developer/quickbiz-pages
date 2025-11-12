import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface WhatsAppWidgetProps {
  phoneNumber: string;
  message?: string;
}

export const WhatsAppWidget = ({ phoneNumber, message = "Hello! I'd like to inquire about your services." }: WhatsAppWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-background border-2 border-primary/20 rounded-2xl shadow-large p-6 w-80 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Chat with us</h3>
                  <p className="text-xs text-muted-foreground">Typically replies instantly</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Have a question? Send us a message on WhatsApp!
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Start Chat
            </Button>
          </div>
        )}
        
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-large hover:shadow-xl transition-all"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>
    </>
  );
};
