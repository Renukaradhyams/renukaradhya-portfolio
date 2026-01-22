import { Code2, Brain, Cpu, Cloud, GraduationCap, Briefcase } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Java, SQL, Web technologies with clean code practices",
  },
  {
    icon: Brain,
    title: "AI Fundamentals",
    description: "Machine learning concepts and data analytics",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Microsoft Azure deployment and cloud services",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Raspberry Pi, Arduino, and microcontrollers",
  },
];

const stats = [
  { icon: GraduationCap, value: "8.19", label: "CGPA" },
  { icon: Briefcase, value: "4+", label: "Internships" },
];

const About = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <FadeIn direction="right">
            <p className="text-accent font-semibold mb-2 tracking-wide text-sm uppercase">
              About Me
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Passionate About Building{" "}
              <span className="text-primary">Intelligent Solutions</span>
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
            <div className="flex gap-8 mt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Highlights Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="skill-card group h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default About;
