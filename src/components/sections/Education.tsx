import { GraduationCap, BookOpen, Award, Trophy, Medal, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Electronics and Communication",
    institution: "Bapuji Institute of Engineering And Technology",
    year: "Nov 2021 – May 2025",
    grade: "CGPA: 8.19",
  },
  {
    degree: "Pre-University College",
    field: "Science",
    institution: "Sir M V PU College",
    year: "May 2020 – June 2021",
    grade: "89%",
  },
  {
    degree: "High School (SSLC)",
    field: "",
    institution: "Sri Taralabalu Central School",
    year: "Apr 2018 – May 2019",
    grade: "90%",
  },
];

const certifications = [
  {
    name: "Artificial Intelligence Foundation",
    issuer: "Infosys Springboard",
    year: "Aug 2023",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "NLP & Deep Learning",
    issuer: "Infosys Springboard",
    year: "Sep 2023",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    year: "Aug 2023",
    color: "from-cyan-500 to-teal-500",
  },
  {
    name: "Python Programming",
    issuer: "NPTEL",
    year: "2023",
    color: "from-emerald-500 to-green-500",
  },
  {
    name: "Java Programming",
    issuer: "NPTEL",
    year: "2023",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Data Analytics",
    issuer: "NPTEL",
    year: "2024",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Data Science",
    issuer: "NPTEL",
    year: "2024",
    color: "from-rose-500 to-pink-500",
  },
  {
    name: "BEL Internship",
    issuer: "Bharat Electronics Limited",
    year: "2024",
    color: "from-amber-500 to-orange-500",
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Institute Best Project",
    description: "Humanoid Robot",
    year: "May 2025",
  },
  {
    icon: Trophy,
    title: "Winner",
    description: "HexaCam Robot - Best Project",
    year: "July 2024",
  },
  {
    icon: Medal,
    title: "Runner-Up",
    description: "STM32 Microcontrollers - Institute Level",
    year: "Nov 2023",
  },
  {
    icon: Medal,
    title: "Runner-Up",
    description: "ISTE State Level - Product Marketing",
    year: "July 2022",
  },
];

const Education = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="education" className="section bg-background section-pattern relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-accent/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <FadeIn className="text-center mb-12">
          <p className="text-accent font-semibold mb-2 tracking-wide text-sm uppercase">
            Academic Background
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation complemented by industry certifications 
            and technical achievements.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <FadeIn direction="right">
            <GlassCard className="p-6 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center shadow-lg">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Education
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Academic Qualifications
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div 
                    key={edu.degree} 
                    className={`border-l-2 border-accent/30 pl-4 ${index !== education.length - 1 ? 'pb-4' : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">
                          {edu.degree}
                        </h4>
                        {edu.field && (
                          <p className="text-accent font-medium text-sm">
                            {edu.field}
                          </p>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded whitespace-nowrap border border-accent/20">
                        {edu.grade}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <BookOpen className="h-4 w-4 flex-shrink-0" />
                      <span>{edu.institution}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </FadeIn>

          {/* Achievements Card */}
          <FadeIn direction="left" delay={0.1}>
            <GlassCard className="p-6 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-teal-600 flex items-center justify-center shadow-lg">
                  <Trophy className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Achievements
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Awards & Recognition
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title + achievement.description}
                    className="p-4 rounded-xl bg-secondary/50 dark:bg-secondary/30 hover:bg-secondary transition-colors text-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <achievement.icon className="h-5 w-5 text-accent" />
                    </div>
                    <p className="font-semibold text-foreground text-sm">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                    <p className="text-xs text-accent mt-1">{achievement.year}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </FadeIn>
        </div>

        {/* Certifications - Horizontal Scroll */}
        <FadeIn delay={0.2} className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Award className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Certifications
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professional Courses & Training
                </p>
              </div>
            </div>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 rounded-lg bg-secondary hover:bg-accent/20 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 rounded-lg bg-secondary hover:bg-accent/20 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="horizontal-scroll"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="flex-shrink-0 w-64"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-5 h-full" hover>
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${cert.color} mb-4`} />
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    {cert.issuer}
                  </p>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full border border-accent/20">
                    {cert.year}
                  </span>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Education;
