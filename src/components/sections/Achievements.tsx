import { Award, Trophy, Medal, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { useRef } from "react";

const certifications = [
  {
    name: "Artificial Intelligence",
    issuer: "Infosys Springboard",
    year: "2023",
    color: "from-violet-500 to-indigo-500",
  },
  {
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    year: "2023",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Python",
    issuer: "NPTEL",
    year: "2023",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    name: "Java",
    issuer: "NPTEL",
    year: "2023",
    color: "from-emerald-400 to-teal-500",
  },
  {
    name: "Data Analytics",
    issuer: "NPTEL",
    year: "2024",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Data Science",
    issuer: "NPTEL",
    year: "2024",
    color: "from-violet-400 to-purple-600",
  },
];

const achievements = [
  {
    icon: Medal,
    title: "State Level Runner-Up",
    description: "ISTE Product Marketing",
    year: "2022",
  },
  {
    icon: Medal,
    title: "Runner-Up",
    description: "STM32 Microcontrollers",
    year: "2023",
  },
  {
    icon: Trophy,
    title: "Institute Best Project",
    description: "Humanoid Robot",
    year: "2025",
  },
];

const Achievements = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="achievements" className="section bg-background relative overflow-hidden py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <p className="text-cyan-400 font-medium tracking-wide text-xs uppercase">
              Milestones
            </p>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Certifications</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Achievements Card */}
          <div className="lg:col-span-4">
            <FadeIn direction="left" className="h-full">
              <GlassCard className="p-8 h-full border border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
                    <Trophy className="h-7 w-7 text-white relative z-10" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      Achievements
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title + achievement.description}
                      className="p-5 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-full blur-xl group-hover:bg-violet-500/20 transition-colors" />
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                          <achievement.icon className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="font-bold text-foreground text-base group-hover:text-cyan-300 transition-colors">{achievement.title}</p>
                          <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          </div>

          {/* Certifications Card */}
          <div className="lg:col-span-8">
            <FadeIn direction="right" delay={0.2} className="h-full">
              <GlassCard className="p-8 h-full border border-white/5 bg-white/[0.02]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center shadow-lg">
                      <Award className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground">
                        Certifications
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <GlassCard className="p-6 h-full border border-white/5 bg-background/50 hover:bg-white/5 hover:border-white/10 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${cert.color} mb-5 group-hover:w-full transition-all duration-500`} />
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="font-heading font-bold text-foreground text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all">
                              {cert.name}
                            </h4>
                            <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                              <Sparkles className="h-3 w-3 text-cyan-400" />
                              {cert.issuer}
                            </p>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
