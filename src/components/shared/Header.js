
import Button  from "../reusable/Button";
import { User } from "lucide-react";
import avatarImage from "../../images/avatar.jpg";


const Header = () => {

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-border">
              <img 
                src={avatarImage} 
                alt="Jasmina" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-semibold text-foreground">Jasmina</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          </nav>
          
          <Button variant="gradient" size="sm" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;