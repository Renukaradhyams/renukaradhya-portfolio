import { Briefcase, Building2, Calendar } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Intern",
    company: "Bharat Electronics Limited (BEL)",
    location: "India",
    duration: "Sep 2024 – Oct 2024",
    description: [
      "Explored sonar and radar systems with exposure to defense-grade signal processing technologies",
      "Gained understanding of large-scale defense electronics manufacturing processes",
      "Observed quality assurance protocols in mission-critical systems",
    ],
    type: "Defense Technology",
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "Full Stack Development Intern",
    company: "TechCiti Technologies",
    location: "India",
    duration: "Oct 2024 – Jan 2025",
    description: [
      "Developed responsive web pages using HTML, CSS, and JavaScript",
      "Worked on real-world client projects with tight deadlines",
      "Collaborated with senior developers on production codebases",
    ],
    type: "Web Development",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Azure Cloud Computing Intern",
    company: "EakTech",
    location: "India",
    duration: "Oct 2023 – Nov 2023",
    description: [
      "Gained hands-on experience in deploying and managing services on Microsoft Azure",
      "Learned cloud infrastructure fundamentals and deployment workflows",
      "Developed understanding of cloud security and resource management",
    ],
    type: "Cloud Computing",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    title: "Android Development Intern",
    company: "Genesis Technologies",
    location: "India",
    duration: "Oct 2022 – Nov 2022",
    description: [
      "Developed basic Android applications using Java and Android Studio",
      "Learned mobile UI/UX principles and app lifecycle management",
      "Built foundational mobile development skills",
    ],
    type: "Mobile Development",
    gradient: "from-emerald-500 to-green-500",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-alt section-pattern-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-conic from-accent/5 via-transparent to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <FadeIn className="text-center mb-12">
          <p className="text-accent font-semibold mb-2 tracking-wide text-sm uppercase">
            Professional Journey
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & <span className="gradient-text">Internships</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diverse exposure across defense technology, web development, cloud computing, 
            and mobile development.
          </p>
        </FadeIn>

        <StaggerContainer className="max-w-3xl mx-auto" staggerDelay={0.15}>
          {experiences.map((exp, index) => (
            <StaggerItem key={`${exp.title}-${exp.company}`}>
              <div className="timeline-item">
                <motion.div 
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                />
                <GlassCard className="ml-4 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`h-3 w-3 rounded-full bg-gradient-to-r ${exp.gradient}`} />
                        <span className="tech-badge">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="h-4 w-4 flex-shrink-0 text-accent" />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/80 dark:bg-secondary/50 px-3 py-1.5 rounded-full whitespace-nowrap">
                      <Calendar className="h-3.5 w-3.5 text-accent" />
                      {exp.duration}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Experience;
