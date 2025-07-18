import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-subtle flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Madhusmita Talukdar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            Creating beautiful, functional web applications with modern technologies. 
            Passionate about clean code, user experience, and innovative solutions.
          </p>

          <div className="flex justify-center gap-4 mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="default" size="lg" className="shadow-glow hover:shadow-elegant transition-all duration-300">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              View Projects
            </Button>
          </div>

          <div className="flex justify-center gap-6 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com/Sweetsmile4" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Github className="h-6 w-6" />
            </a>
            <a href="www.linkedin.com/in/madhusmita-talukdar-531964268" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="madhusmita2003@outlook.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
