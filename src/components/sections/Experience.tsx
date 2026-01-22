import { Briefcase, Building2, Calendar } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

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
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-alt">
      <div className="container-custom">
        <FadeIn className="text-center mb-12">
          <p className="text-accent font-semibold mb-2 tracking-wide text-sm uppercase">
            Professional Journey
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Internships
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
                <div className="timeline-dot" />
                <div className="skill-card ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-full whitespace-nowrap">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.duration}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Experience;
