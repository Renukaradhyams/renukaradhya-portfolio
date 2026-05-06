import { ExternalLink, Globe, Server, Cloud, Code2, Database, Layout, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Unnathi CNC Industry",
    subtitle: "Full Stack Web App for Client Inquiry Automation",
    technologies: ["React.js", "Node.js", "Express.js", "TypeScript", "MySQL", "SMTP"],
    category: "Full Stack Automation",
    icon: Server,
    gradient: "from-violet-500 to-indigo-600",
    glowColor: "rgba(139,92,246,0.5)",
    link: "https://unnathicnc.com/",
    image: "/project_photo/unnathi.png"
  },
  {
    title: "Karunadu LED & Lighting",
    subtitle: "E-commerce Product Enquiry Platform",
    technologies: ["React.js", "Node.js", "TypeScript", "SMTP", "Hostinger"],
    category: "E-Commerce",
    icon: Layout,
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6,182,212,0.5)",
    link: "https://www.karunaduled.in/",
    image: "/project_photo/karunaduled.png"
  },
  {
    title: "Dental Clinic Management",
    subtitle: "Appointment Management System",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs"],
    category: "Healthcare SaaS",
    icon: Database,
    gradient: "from-fuchsia-500 to-pink-600",
    glowColor: "rgba(217,70,239,0.5)",
    link: "https://aradhyanextgenlabs.online/",
    image: "/project_photo/dental.png"
  },
  {
    title: "Galaxy Power Solar",
    subtitle: "Business Website with SEO Optimization",
    technologies: ["React.js", "SEO", "Node.js", "TypeScript"],
    category: "Corporate Platform",
    icon: Globe,
    gradient: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52,211,153,0.5)",
    link: "https://www.galaxypowersolar.in/",
    image: "/project_photo/galaxypowersolar.png"
  },
  {
    title: "Aradhya NextGen",
    subtitle: "Corporate Website & Live Deployment",
    technologies: ["React.js", "Express.js", "TypeScript", "SMTP"],
    category: "Enterprise Web",
    icon: Cloud,
    gradient: "from-blue-400 to-indigo-500",
    glowColor: "rgba(96,165,250,0.5)",
    link: "https://aradhyanextgen.com/",
    image: "/project_photo/aradhyanextgen.png"
  },
  {
    title: "Hrithik Chit",
    subtitle: "Digital Chit Fund Management Platform",
    technologies: ["React.js", "Node.js", "Express.js", "SEO"],
    category: "FinTech",
    icon: Code2,
    gradient: "from-violet-400 to-purple-600",
    glowColor: "rgba(167,139,250,0.5)",
    link: "https://www.hrithikchit.com/",
    image: "/project_photo/hrithikchit.png"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-background relative overflow-hidden py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <p className="text-cyan-400 font-medium tracking-wide text-xs uppercase">
              Featured Work
            </p>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Applications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of production-ready web applications, business platforms, and scalable digital solutions.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
          {projects.map((project, index) => (
            <StaggerItem key={project.title} className="h-full">
              <motion.div
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <GlassCard 
                  className="h-full flex flex-col p-0 overflow-hidden border border-white/10 bg-white/[0.02] group"
                >
                  {/* Card Header Image */}
                  <div className="h-48 w-full relative overflow-hidden group-hover:opacity-100 transition-opacity">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark gradient overlay so text below it blends well */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
                    
                    {/* Floating Icon Over Image */}
                    <div className={`absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-background/50 backdrop-blur-sm group-hover:bg-background/80 transition-colors">
                    <div className="mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-6 mb-6 border-t border-white/5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 text-[11px] font-semibold tracking-wide uppercase rounded-md group-hover:border-cyan-500/30 group-hover:text-cyan-100 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 mt-auto">
                      <Button variant="default" size="sm" asChild className="w-full bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(8,145,178,0.3)] transition-all">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="text-center mt-16">
          <Button size="lg" asChild className="group bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md rounded-full px-8 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <a
              href="https://github.com/Renukaradhyams"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground"
            >
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Full Portfolio on GitHub
            </a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
