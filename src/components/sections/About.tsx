import { Code2, Server, Layout, Cloud, Briefcase, Rocket, Globe, Building2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end applications with React, Node.js, and TypeScript",
    gradient: "from-violet-500 to-indigo-600",
  },
  {
    icon: Server,
    title: "Scalable Architecture",
    description: "Designing robust backend systems and REST APIs",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Layout,
    title: "Modern UI/UX",
    description: "Crafting beautiful, animated, and responsive interfaces",
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    icon: Cloud,
    title: "Cloud Technologies",
    description: "Deploying and managing applications on modern cloud platforms",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Real-world Solutions",
    description: "Delivering business value through scalable web solutions",
    gradient: "from-emerald-400 to-teal-500",
  },
];

const stats = [
  { icon: Rocket, value: 10, label: "Projects", suffix: "+" },
  { icon: Briefcase, value: 3, label: "Internships", suffix: "+" },
  { icon: Code2, value: 5, label: "Technologies", suffix: "+" },
  { icon: Building2, value: 4, label: "Real Client Deployments", suffix: "", isText: true },
];

const About = () => {
  return (
    <section id="about" className="section bg-background/50 relative overflow-hidden py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <p className="text-cyan-400 font-medium tracking-wide text-xs uppercase">
                About Me
              </p>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Engineering <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
                Digital Excellence
              </span>
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                I am currently working as a <strong className="text-foreground font-semibold">Web Development Manager</strong>, leading end-to-end web development initiatives and managing modern business websites and digital platforms. My role involves planning, developing, optimizing, and maintaining scalable web applications while ensuring high performance, security, and exceptional user experience.
              </p>
              <p>
                I collaborate closely with stakeholders to understand business requirements, transform them into technical solutions, oversee project execution, review code quality, mentor development teams, and ensure timely project delivery. I focus on building responsive, secure, SEO-friendly, and scalable digital products using modern web technologies and best development practices.
              </p>
              <p>
                I am passionate about solving complex technical challenges, continuous learning, and delivering innovative web solutions that create measurable business value.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="flex flex-col gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    {stat.isText ? (
                      <p className="font-heading text-2xl font-bold text-foreground text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        {stat.value}+
                      </p>
                    ) : (
                      <p className="font-heading text-3xl font-bold text-foreground">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </p>
                    )}
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1 leading-snug">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Highlights Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4 lg:pl-10" staggerDelay={0.1}>
            {highlights.map((item, index) => (
              <StaggerItem key={item.title} className={index === 4 ? "sm:col-span-2" : ""}>
                <GlassCard className="p-6 h-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default About;
