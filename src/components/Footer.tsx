import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t py-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">BizBudLink</h3>
            <p className="text-sm text-muted-foreground">
              Launch your business online in minutes. Simple, fast, and free.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/directory" className="text-muted-foreground hover:text-primary transition-colors">
                  Directory
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 BizBudLink. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="#facebook" 
              className="w-9 h-9 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors group"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#instagram" 
              className="w-9 h-9 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#twitter" 
              className="w-9 h-9 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors group"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
