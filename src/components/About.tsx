import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves turning complex problems into simple, beautiful solutions. 
            With expertise in modern web technologies, I create digital experiences that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, scalable code with best practices and modern development methodologies.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Creating intuitive and visually appealing interfaces that provide excellent user experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Performance</h3>
              <p className="text-muted-foreground">
                Optimizing applications for speed, accessibility, and seamless performance across all devices.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-card">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Started as a curious problem-solver, I've evolved into a full-stack developer with 
                5+ years of experience. My journey spans from crafting pixel-perfect designs to 
                architecting scalable backend systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                When I'm not coding, you'll find me contributing to open-source projects or 
                exploring new frameworks and tools.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Frontend Development</span>
                <span className="text-muted-foreground">95%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold">Backend Development</span>
                <span className="text-muted-foreground">90%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold">UI/UX Design</span>
                <span className="text-muted-foreground">85%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;