import { Briefcase, Building2, Calendar, MapPin } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Sakyaitech Solutions",
    location: "India",
    duration: "Nov 2025 – Present",
    description: [
      "Building scalable full-stack applications",
      "Working with Java, React.js, APIs, and databases",
      "Developing production-ready solutions",
    ],
    type: "Software Engineering",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    title: "Full Stack Development Intern",
    company: "TechCiti Technologies",
    location: "India",
    duration: "Oct 2024 – Jan 2025",
    description: [
      "Developed responsive web applications",
      "Worked on real-world client projects",
      "Improved frontend performance and UI responsiveness",
    ],
    type: "Web Development",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Azure Cloud Computing Intern",
    company: "EakTech",
    location: "India",
    duration: "Oct 2023 – Nov 2023",
    description: [
      "Worked with Microsoft Azure services",
      "Cloud deployment and management experience",
      "Gained hands-on experience in modern cloud architecture",
    ],
    type: "Cloud Computing",
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Intern",
    company: "Bharat Electronics Limited (BEL)",
    location: "India",
    duration: "Sep 2024 – Oct 2024",
    description: [
      "Exposure to sonar and radar systems",
      "Defense-grade technologies and signal processing",
      "Learned about mission-critical electronic components",
    ],
    type: "Defense Technology",
    gradient: "from-emerald-400 to-teal-500",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-alt bg-secondary/10 relative overflow-hidden py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-violet-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-cyan-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-violet-500/5 via-transparent to-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
            <p className="text-violet-400 font-medium tracking-wide text-xs uppercase">
              Professional Journey
            </p>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Career Timeline</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="max-w-4xl mx-auto relative" staggerDelay={0.15}>
          {/* Vertical timeline line */}
          <div className="absolute left-[20px] sm:left-[28px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-violet-500/50 via-cyan-500/50 to-transparent hidden sm:block" />

          {experiences.map((exp, index) => (
            <StaggerItem key={`${exp.title}-${exp.company}`}>
              <div className="relative pl-10 sm:pl-16 pb-12 last:pb-0">
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-0 sm:left-[21px] top-6 w-4 h-4 rounded-full bg-background border-2 border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.6)] z-10 hidden sm:block"
                  initial={{ scale: 0, boxShadow: "0 0 0 rgba(139,92,246,0)" }}
                  whileInView={{ scale: 1, boxShadow: "0 0 15px rgba(139,92,246,0.6)" }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                />
                
                <GlassCard className="p-6 md:p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)] hover:-translate-y-1">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${exp.gradient} shadow-lg`} />
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mt-2">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="h-4 w-4 text-violet-400" />
                          <span className="text-sm font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-cyan-400" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-cyan-100 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full whitespace-nowrap h-fit shrink-0 backdrop-blur-md">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      <span className="font-medium tracking-wide">{exp.duration}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start text-base text-muted-foreground/90 leading-relaxed"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 mr-3 flex-shrink-0 shadow-[0_0_5px_rgba(139,92,246,0.5)]" />
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
