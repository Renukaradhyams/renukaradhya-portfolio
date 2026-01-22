import { 
  Code, 
  Brain, 
  Cloud, 
  Wrench, 
  Cpu, 
  Users 
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const skillCategories = [
  {
    icon: Code,
    title: "Programming & Web",
    skills: ["Java", "SQL (MySQL)", "HTML", "CSS", "JavaScript"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: Brain,
    title: "AI & Data",
    skills: [
      "Artificial Intelligence Fundamentals",
      "Data Analytics",
      "Data Science",
      "Machine Learning Concepts",
    ],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    skills: [
      "Microsoft Azure",
      "Git & GitHub",
      "VS Code",
      "Linux",
    ],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Wrench,
    title: "Development Tools",
    skills: [
      "Android Studio",
      "Visual Studio Code",
      "Git Version Control",
      "Command Line",
    ],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Cpu,
    title: "Robotics & Embedded",
    skills: [
      "Raspberry Pi",
      "Arduino",
      "Microcontrollers",
      "Verilog",
      "Embedded Systems",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Adaptability",
      "Quick Learner",
    ],
    color: "from-rose-500/20 to-red-500/20",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-alt">
      <div className="container-custom">
        <FadeIn className="text-center mb-12">
          <p className="text-accent font-semibold mb-2 tracking-wide text-sm uppercase">
            Technical Expertise
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning software development, artificial intelligence, 
            cloud computing, and embedded systems.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="skill-card h-full group">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;
