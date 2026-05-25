import { useState } from "react";
import { ExternalLink, Globe, Server, Cloud, Code2, Database, Layout, Github, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import GlassCard from "@/components/ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Unnathi CNC Industry",
    subtitle: "Full Stack Web Application for Inquiry Automation",
    date: "Jan 2026 – Apr 2026",
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "TypeScript", "MySQL", "SMTP"],
    category: "Full Stack Automation",
    filterCategory: "Full Stack & SaaS",
    icon: Server,
    gradient: "from-violet-500 to-indigo-600",
    glowColor: "rgba(139,92,246,0.5)",
    link: "https://unnathicnc.com/",
    image: "/project_photo/unnathi.png",
    description: [
      "Built a full-stack inquiry automation platform to streamline client communication and workflow management.",
      "Developed scalable REST APIs, JWT-based authentication workflows, and MySQL database integrations for efficient inquiry handling and data management.",
      "Integrated SMTP-based automated communication workflows and responsive frontend dashboards for operational efficiency."
    ]
  },
  {
    title: "Karunadu LED & Lighting",
    subtitle: "E-commerce Product Inquiry Platform",
    date: "Nov 2025 – Jan 2026",
    technologies: ["React.js", "Node.js", "TypeScript", "REST APIs", "SMTP", "GitHub", "Hostinger"],
    category: "E-Commerce",
    filterCategory: "E-Commerce & FinTech",
    icon: Layout,
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6,182,212,0.5)",
    link: "https://www.karunaduled.in/",
    image: "/project_photo/karunaduled.png",
    description: [
      "Developed a full-stack e-commerce platform enabling customers to send product inquiries through automated email workflows.",
      "Built responsive frontend interfaces and scalable backend APIs for smooth customer interaction and inquiry handling.",
      "Integrated SMTP services using Nodemailer and managed deployment workflows using GitHub and Hostinger."
    ]
  },
  {
    title: "Dental Clinic Management System",
    subtitle: "Appointment Management System",
    date: "Feb 2026 – Apr 2026",
    technologies: ["React.js", "Node.js", "Express.js", "TypeScript", "REST APIs", "MySQL", "SMTP"],
    category: "Healthcare SaaS",
    filterCategory: "Full Stack & SaaS",
    icon: Database,
    gradient: "from-fuchsia-500 to-pink-600",
    glowColor: "rgba(217,70,239,0.5)",
    link: "https://aradhyanextgenlabs.online/",
    image: "/project_photo/dental.png",
    description: [
      "Developed a clinic management platform supporting appointment scheduling, patient management, and inquiry systems.",
      "Built secure REST APIs, API security workflows, and integrated MySQL databases for scalable appointment and patient record management.",
      "Designed responsive frontend dashboards and communication workflows to improve clinic administration efficiency."
    ]
  },
  {
    title: "Galaxy Power Solar",
    subtitle: "Business Website with SEO Optimization",
    date: "Dec 2025 – Jan 2026",
    technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "SMTP", "SEO", "Hostinger"],
    category: "Corporate Platform",
    filterCategory: "Enterprise & Corporate",
    icon: Globe,
    gradient: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52,211,153,0.5)",
    link: "https://www.galaxypowersolar.in/",
    image: "/project_photo/galaxypowersolar.png",
    description: [
      "Designed and developed a responsive business website with modern UI components and scalable frontend architecture.",
      "Implemented SEO optimization strategies to improve website visibility, accessibility, and performance.",
      "Developed backend integrations and managed deployment workflows using Hostinger hosting infrastructure."
    ]
  },
  {
    title: "Aradhya NextGen",
    subtitle: "Corporate Website & Live Deployment",
    date: "Dec 2025 – Feb 2026",
    technologies: ["React.js", "Node.js", "Express.js", "TypeScript", "SMTP", "GitHub", "Hostinger"],
    category: "Enterprise Web",
    filterCategory: "Enterprise & Corporate",
    icon: Cloud,
    gradient: "from-blue-400 to-indigo-500",
    glowColor: "rgba(96,165,250,0.5)",
    link: "https://aradhyanextgen.com/",
    image: "/project_photo/aradhyanextgen.png",
    description: [
      "Developed and deployed the official corporate website for Aradhya NextGen with responsive design architecture.",
      "Built scalable frontend modules, API integrations, state management workflows, and responsive UI systems to support business workflows and optimized user experience.",
      "Managed version control, deployment pipelines, and hosting environments using GitHub and Hostinger."
    ]
  },
  {
    title: "Hrithik Chit",
    subtitle: "Digital Chit Fund Management Platform",
    date: "Apr 2026 – May 2026",
    technologies: ["React.js", "Node.js", "Express.js", "TypeScript", "SMTP", "SEO", "Hostinger"],
    category: "FinTech",
    filterCategory: "E-Commerce & FinTech",
    icon: Code2,
    gradient: "from-violet-400 to-purple-600",
    glowColor: "rgba(167,139,250,0.5)",
    link: "https://www.hrithikchit.com/",
    image: "/project_photo/hrithikchit.png",
    description: [
      "Developed a digital chit fund management platform with scalable frontend and backend systems for business operations.",
      "Built responsive UI components and backend integrations to manage customer interactions and workflow automation.",
      "Implemented SEO optimization, communication workflows, and deployment processes using modern hosting infrastructure."
    ]
  },
];

const categories = ["All", "Full Stack & SaaS", "E-Commerce & FinTech", "Enterprise & Corporate"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.filterCategory === activeCategory);

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
        <FadeIn className="text-center mb-12">
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

        {/* Categories Tabs Filter */}
        <FadeIn delay={0.1} className="flex justify-center mb-16">
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeCategory === category
                    ? "text-white"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600/80 to-cyan-600/80 rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.3)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid Container with AnimatePresence */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[500px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full"
                >
                  <GlassCard 
                    className="h-full flex flex-col p-0 overflow-hidden border border-white/10 bg-white/[0.02] group hover:border-cyan-500/20 hover:shadow-[0_0_30px_rgba(8,145,178,0.05)] transition-all duration-300"
                  >
                    {/* Card Header Image */}
                    <div className="h-48 w-full relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent pointer-events-none" />
                      
                      {/* Floating Icon Over Image */}
                      <div className={`absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                        <project.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-background/50 backdrop-blur-sm group-hover:bg-background/80 transition-colors">
                      <div className="mb-4 flex-grow">
                        <div className="flex justify-between items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                            {project.category}
                          </span>
                          <span className="text-[9px] font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/25 whitespace-nowrap">
                            {project.date}
                          </span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all mb-2">
                          {project.title}
                        </h3>
                        <p className="text-xs font-semibold text-muted-foreground leading-relaxed mb-4">
                          {project.subtitle}
                        </p>
                        
                        {/* Detailed Bullet Points */}
                        <ul className="space-y-2 mt-4 mb-6">
                          {project.description.map((bullet, idx) => (
                            <li key={idx} className="flex items-start text-xs text-muted-foreground/90 leading-relaxed">
                              <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 mr-2 flex-shrink-0 shadow-[0_0_4px_rgba(34,211,238,0.5)]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto pt-6 mb-6 border-t border-white/5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 text-[10px] font-semibold tracking-wide uppercase rounded-md group-hover:border-cyan-500/30 group-hover:text-cyan-100 transition-colors"
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Resume Download Highlights Banner */}
        <FadeIn delay={0.2} className="mt-20 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.01] p-8 md:p-12 text-center group hover:border-cyan-500/30 hover:shadow-[0_0_35px_rgba(8,145,178,0.05)] transition-all duration-500">
            {/* Decorative background gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-cyan-500/5 to-violet-600/5 opacity-50 pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-violet-300">Detailed Background</span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                  Interested in my detailed <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Technical Expertise</span>?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Download my complete, printer-friendly PDF resume to review my academic credentials, professional internships, certifications, and technical stack.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <Button size="lg" asChild className="group relative bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold tracking-wide rounded-full px-8 py-6 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.4)] transition-all hover:scale-105 duration-300">
                  <a href="/Renukaradhya_MS_Resume.pdf" download>
                    <Download className="mr-2.5 h-5 w-5 transition-transform group-hover:-translate-y-1" />
                    Download Resume PDF
                    <span className="absolute -inset-px rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur-sm -z-10 transition-opacity duration-300" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="text-center mt-12">
          <Button size="lg" asChild className="group bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md rounded-full px-8 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
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
