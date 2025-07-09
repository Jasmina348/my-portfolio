import { Card } from "../reusable/card";

const About = () => {
  const stats = [
    { number: "12", label: "YEARS OF EXPERIENCE" },
    { number: "50+", label: "PROJECTS COMPLETED" },
    { number: "25", label: "CLIENTS" },
  ];

  const skills = [
    "Application Development",
    "Project Management", 
    "Web Designing"
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background gradient blob */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-red rounded-full opacity-20 blur-3xl transform -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <p className="text-gradient-orange uppercase tracking-wider text-sm font-semibold mb-4">
              ABOUT ME
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Code, Design, Deliver.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I'm a software developer with over 12 years of experience in the field. I 
              combine technical skills with creative thinking to help clients work 
              smarter and achieve their goals. I always have a focus on usability, 
              clean code, and getting projects across the finish line.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border shadow-card">
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground tracking-wider">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;