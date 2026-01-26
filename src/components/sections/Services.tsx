import { Code2, Globe, Sparkles, Rocket, Users, Zap } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites built with latest technologies",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Portfolio Websites",
    description: "Stunning personal portfolios that make you stand out",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Business Websites",
    description: "Professional websites that drive business growth",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Solutions",
    description: "Intelligent web applications with AI integration",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 8, suffix: "+", label: "Happy Clients" },
  { value: 2, suffix: "+", label: "Years Experience" },
];

const Services = () => {
  return (
    <section id="services" className="section bg-secondary/50 dark:bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <Rocket className="h-4 w-4" />
            <span className="text-sm font-medium">Founder @ Aradhya NextGen</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Freelancing & <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building digital solutions for businesses and individuals. 
            From portfolio websites to AI-powered web applications.
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <GlassCard className="p-6 h-full" tilt>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.3} className="text-center mt-12">
          <GlassCard className="inline-flex items-center gap-4 px-6 py-4">
            <Users className="h-5 w-5 text-accent" />
            <span className="text-foreground font-medium">Need a website? Let's work together!</span>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              <Zap className="h-4 w-4" />
              Get in Touch
            </a>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
