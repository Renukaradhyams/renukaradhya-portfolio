import { Github, ExternalLink, Bot, Globe, Database, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Humanoid Robot",
    subtitle: "Institute Best Project",
    description:
      "Built a humanoid robotic system combining microcontrollers and embedded programming to demonstrate motion control and human-like interaction capabilities.",
    technologies: ["Python", "C", "Raspberry Pi", "Arduino", "Microcontrollers"],
    period: "Feb 2025 – May 2025",
    category: "Robotics",
    icon: Bot,
    highlight: true,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "HexaCam Robot with ARM",
    subtitle: "Best Project Winner",
    description:
      "Developed an intelligent robotic system using Raspberry Pi integrating software logic with hardware control for real-time operations and camera-based navigation.",
    technologies: ["Python", "C", "Raspberry Pi", "Linux"],
    period: "Mar 2024 – July 2024",
    category: "Robotics & AI",
    icon: Bot,
    highlight: true,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Hospital Management System",
    description:
      "Designed a web-based system to manage hospital operations including patient records, appointments, and administrative workflows.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
    period: "Aug 2023 – Sep 2023",
    category: "Web Development",
    icon: Database,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "AradhyaAgenc – Cloud Web Project",
    description:
      "Developed and deployed a dynamic HTML-based website on Microsoft Azure cloud infrastructure demonstrating cloud deployment skills.",
    technologies: ["HTML", "Microsoft Azure", "VS Code"],
    period: "Oct 2023 – Nov 2023",
    category: "Cloud & Web",
    icon: Cloud,
    gradient: "from-orange-500 to-amber-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <FadeIn className="text-center mb-12">
          <p className="text-accent font-semibold mb-2 tracking-wide text-sm uppercase">
            Featured Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects & <span className="gradient-text">Applications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of hands-on projects demonstrating practical application of 
            software engineering, robotics, and cloud technologies.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <GlassCard 
                className={`h-full ${project.highlight ? 'ring-2 ring-accent/30' : ''}`}
                tilt
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <project.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <span className="tech-badge">
                          {project.category}
                        </span>
                        {project.highlight && (
                          <span className="ml-2 text-xs font-medium text-accent bg-accent/20 px-2 py-1 rounded-full border border-accent/30">
                            🏆 Award Winner
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm font-medium text-accent mb-3">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-secondary/80 dark:bg-secondary/50 text-secondary-foreground text-xs rounded-md font-medium hover:bg-accent/20 hover:text-accent transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="text-center mt-10">
          <Button variant="outline" size="lg" asChild className="group glass-card border-accent/30 hover:border-accent">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View More on GitHub
            </a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
