import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Madhusmita Developer
            </h3>
            <p className="text-background/80 leading-relaxed">
              Passionate about creating digital experiences that make a difference. 
              Let's build something amazing together.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-background/80 hover:text-background transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-background/80 hover:text-background transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Sweetsmile4" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="www.linkedin.com/in/madhusmita-talukdar-531964268" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="madhusmita2003@outlook.com" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-400" /> by Madhusmita Developer
          </p>
          <p className="text-background/40 text-sm mt-2">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
