import { 
  Code, 
  Brain, 
  Cloud, 
  Wrench, 
  Cpu, 
  Users 
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import GlassCard from "@/components/ui/GlassCard";
import SkillProgressBar from "@/components/ui/SkillProgressBar";

const skillCategories = [
  {
    icon: Code,
    title: "Programming & Web",
    skills: [
      { name: "Java", level: 85 },
      { name: "SQL (MySQL)", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 75 },
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Brain,
    title: "AI & Data",
    skills: [
      { name: "AI Fundamentals", level: 80 },
      { name: "Data Analytics", level: 75 },
      { name: "Machine Learning", level: 70 },
      { name: "Data Science", level: 72 },
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    skills: [
      { name: "Microsoft Azure", level: 82 },
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Linux", level: 78 },
    ],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Wrench,
    title: "Development Tools",
    skills: [
      { name: "Android Studio", level: 75 },
      { name: "Version Control", level: 85 },
      { name: "Command Line", level: 80 },
      { name: "REST APIs", level: 78 },
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Cpu,
    title: "Robotics & Embedded",
    skills: [
      { name: "Raspberry Pi", level: 88 },
      { name: "Arduino", level: 85 },
      { name: "Microcontrollers", level: 82 },
      { name: "Verilog", level: 70 },
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Teamwork", level: 88 },
      { name: "Adaptability", level: 92 },
    ],
    gradient: "from-rose-500 to-red-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <FadeIn className="text-center mb-12">
          <p className="text-accent font-semibold mb-2 tracking-wide text-sm uppercase">
            Technical Expertise
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning software development, artificial intelligence, 
            cloud computing, and embedded systems.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <GlassCard className="p-6 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillProgressBar
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;
