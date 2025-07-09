import  {Button} from "../reusable/Button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-orange rounded-full opacity-60 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-red rounded-full opacity-50 blur-3xl transform translate-x-1/3"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-yellow rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-purple rounded-full opacity-30 blur-3xl transform -translate-x-1/4"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
          Hey! I'm Jasmina
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A Full-Stack Developer & Design Enthusiast.
        </p>
        
        <Button variant="glass" size="lg" className="group">
          <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
          Download Resume
        </Button>
      </div>
    </section>
  );
};

export default Hero;