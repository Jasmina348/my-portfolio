import { Card, CardContent } from "../reusable/card";
import { Button } from "../reusable/Button";
import { ExternalLink } from "lucide-react";
import project1 from "../../assets/project-1.jpg";
import project2 from "../../assets/project-2.jpg";
import project3 from "../../assets/project-3.jpg";
import project4 from "../../assets/project-4.jpg";
import project5 from "../../assets/project-5.jpg";
import project6 from "../../assets/project-6.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Google Health",
      category: "Web Application",
      image: project1,
      description: "Healthcare management platform"
    },
    {
      title: "Phoenix Digital Agency",
      category: "Mobile Application", 
      image: project2,
      description: "Creative agency website"
    },
    {
      title: "Project Management UI",
      category: "UX/UI Design",
      image: project3,
      description: "Task management interface"
    },
    {
      title: "Cloud Storage",
      category: "UX/UI Design",
      image: project4,
      description: "File management system"
    },
    {
      title: "React Social App",
      category: "Mobile Application",
      image: project5,
      description: "Social networking platform"
    },
    {
      title: "Apple Design System",
      category: "Web Application",
      image: project6,
      description: "Component library design"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background gradient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-yellow rounded-full opacity-20 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground uppercase tracking-wider text-sm font-semibold mb-4">
            PROJECTS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-card/60 backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;