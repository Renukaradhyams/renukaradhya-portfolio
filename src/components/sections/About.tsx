import { Code2, Brain, Cpu, Cloud, GraduationCap, Briefcase, Rocket } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Java, SQL, Web technologies with clean code practices",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Brain,
    title: "AI Fundamentals",
    description: "Machine learning concepts and data analytics",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Microsoft Azure deployment and cloud services",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Raspberry Pi, Arduino, and microcontrollers",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const stats = [
  { icon: GraduationCap, value: 8.19, label: "CGPA", suffix: "", decimals: 2 },
  { icon: Briefcase, value: 4, label: "Internships", suffix: "+" },
  { icon: Rocket, value: 10, label: "Projects", suffix: "+" },
];

const About = () => {
  return (
    <section id="about" className="section bg-background section-pattern-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <FadeIn direction="right">
            <p className="text-accent font-semibold mb-2 tracking-wide text-sm uppercase">
              About Me
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Passionate About Building{" "}
              <span className="gradient-text">Intelligent Solutions</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am an enthusiastic and detail-oriented engineering graduate with a strong 
                foundation in software development, AI fundamentals, cloud technologies, 
                and embedded systems. I enjoy working at the intersection of hardware and 
                software, where logical thinking and creativity come together to build 
                intelligent systems.
              </p>
              <p>
                With academic excellence (CGPA 8.19) and multiple internships across 
                Android development, Azure cloud computing, full-stack development, and 
                defense technology exposure at Bharat Electronics Limited, I have developed 
                a disciplined engineering mindset and strong problem-solving abilities.
              </p>
              <p>
                I am continuously learning and actively seeking entry-level opportunities 
                where I can contribute, grow, and deliver impact in the technology industry.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-foreground">
                      {stat.decimals ? (
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      ) : (
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Highlights Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <GlassCard className="p-6 h-full">
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
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
