import { 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Wrench, 
  Rocket 
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

const skillCategories = [
  {
    icon: Layout,
    title: "Frontend Development",
    skills: ["React.js", "TypeScript", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "Framer Motion"],
    gradient: "from-violet-500 to-indigo-600",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    border: "group-hover:border-violet-500/50",
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Java", "REST APIs", "Microservices"],
    gradient: "from-cyan-500 to-blue-600",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    border: "group-hover:border-cyan-500/50",
  },
  {
    icon: Database,
    title: "Database Management",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    gradient: "from-fuchsia-500 to-pink-600",
    glow: "group-hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]",
    border: "group-hover:border-fuchsia-500/50",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["Azure", "AWS", "Docker", "CI/CD Pipelines", "Linux"],
    gradient: "from-emerald-400 to-teal-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]",
    border: "group-hover:border-emerald-500/50",
  },
  {
    icon: Wrench,
    title: "Tools & Ecosystem",
    skills: ["Git", "GitHub", "Postman", "VS Code", "SMTP", "Webpack/Vite"],
    gradient: "from-blue-400 to-indigo-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]",
    border: "group-hover:border-blue-500/50",
  },
  {
    icon: Rocket,
    title: "Hosting & Deployment",
    skills: ["Hostinger", "Vercel", "Netlify", "Heroku", "cPanel"],
    gradient: "from-violet-400 to-purple-600",
    glow: "group-hover:shadow-[0_0_30px_rgba(167,139,250,0.3)]",
    border: "group-hover:border-violet-500/50",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section bg-background relative overflow-hidden py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px]" />
        
        {/* Dynamic Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <FadeIn className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <p className="text-cyan-400 font-medium tracking-wide text-xs uppercase">
              Technical Expertise
            </p>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical stack, focusing on scalable full-stack development and modern architecture.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.title} className="h-full">
              <motion.div whileHover={{ y: -5 }} className="h-full">
                <GlassCard className={`p-8 h-full border border-white/5 bg-white/[0.02] transition-all duration-500 group relative overflow-hidden flex flex-col ${category.glow} ${category.border}`}>
                  
                  {/* Card specific background glow */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                  
                  <div className="flex items-center gap-5 mb-8 relative z-10">
                    <motion.div 
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg relative overflow-hidden`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <category.icon className="h-7 w-7 text-white relative z-10 drop-shadow-md" />
                    </motion.div>
                    <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-white transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5 relative z-10 mt-auto">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3.5 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold tracking-wide rounded-lg group-hover:bg-white/10 group-hover:border-white/20 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;
