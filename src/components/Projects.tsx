import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "SCSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive charts, and personalized weather alerts.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      technologies: ["TypeScript", "React", "Chart.js", "OpenWeather API", "PWA"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development, 
            UI/UX design, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500 group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1 shadow-elegant hover:shadow-glow transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;