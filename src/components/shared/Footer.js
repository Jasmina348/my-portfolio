import { Github, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 All Rights Reserved
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground transition-colors flex items-center justify-center"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground transition-colors flex items-center justify-center"
              aria-label="Website"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;