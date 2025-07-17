import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "📝 To-Do List",
      description: "A simple and interactive task management web app that lets users add, delete, and mark tasks as completed. Uses local storage to retain tasks across sessions.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      liveUrl: "#",
      githubUrl: "https://github.com/Sweetsmile4/To-Do-List"
    },
    {
      title: "🤖 AI Blog Generator",
      description: "A full-stack AI-powered web app that converts YouTube video links into blog posts. Uses AssemblyAI for transcription and OpenAI for generating blog content.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Express.js", "MySQL", "OpenAI API", "AssemblyAI"],
      liveUrl: "#",
      githubUrl: "https://github.com/Sweetsmile4/AI_Blog_generator"
    },
    {
      title: "🌦️ Weather App",
      description: "A user-friendly app that fetches and displays real-time weather data (temperature, humidity, and sky conditions) for any city using the OpenWeatherMap API.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      liveUrl: "#",
      githubUrl: "https://github.com/Sweetsmile4/Weather-App"
    },
    {
      title: "🎨 Nike Shoe Product Page",
      description: "A modern, e-commerce shoe product page designed in Figma. Emphasizes brand identity, user engagement, and clean layout with clickable UI elements.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=300&fit=crop",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      liveUrl: "https://www.figma.com/design/sS2ypmhZkYMfi7ckSbBBaD/Nike-Shoe?node-id=0-1&t=0pcHeIbBKh6cAWZB-1",
      githubUrl: "#"
    },
    {
      title: "💊 Calyte – Drug Addiction Awareness",
      description: "A conceptual social impact project aimed at raising awareness and offering support for drug addiction. Designed to provide education and community resources.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      technologies: ["HTML/CSS", "JavaScript", "Figma", "Social Impact Design"],
      liveUrl: "#",
      githubUrl: "https://github.com/theia13/Calyte"
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
                  {project.liveUrl !== "#" && (
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1 shadow-elegant hover:shadow-glow transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl !== "#" && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
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