import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SCSS", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express.js", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Webpack", "Vite", "Jest", "Cypress"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-primary bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default animate-scale-in"
                    style={{ animationDelay: `${index * 0.2 + skillIndex * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Always learning and exploring new technologies to stay at the forefront of web development.
          </p>
          <div className="flex justify-center gap-4 text-4xl">
            <span className="animate-float">⚛️</span>
            <span className="animate-float" style={{ animationDelay: '1s' }}>🚀</span>
            <span className="animate-float" style={{ animationDelay: '2s' }}>💡</span>
            <span className="animate-float" style={{ animationDelay: '3s' }}>🎨</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;