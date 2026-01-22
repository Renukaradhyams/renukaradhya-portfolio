import { GraduationCap, BookOpen, Award, Trophy, Medal } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

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
    name: "Artificial Intelligence",
    issuer: "Infosys Springboard",
    year: "Aug 2023",
  },
  {
    name: "Microsoft Azure, AI Fundamentals",
    issuer: "Microsoft",
    year: "Aug 2023",
  },
  {
    name: "Python, Java, Data Analytics, Data Science",
    issuer: "NPTEL",
    year: "2023 – 2024",
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
  return (
    <section id="education" className="section bg-background">
      <div className="container-custom">
        <FadeIn className="text-center mb-12">
          <p className="text-accent font-semibold mb-2 tracking-wide text-sm uppercase">
            Academic Background
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation complemented by industry certifications 
            and technical achievements.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <FadeIn direction="right">
            <div className="skill-card h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-primary" />
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
                  <div 
                    key={edu.degree} 
                    className={`border-l-2 border-primary/20 pl-4 ${index !== education.length - 1 ? 'pb-4' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">
                          {edu.degree}
                        </h4>
                        {edu.field && (
                          <p className="text-primary font-medium text-sm">
                            {edu.field}
                          </p>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded whitespace-nowrap">
                        {edu.grade}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <BookOpen className="h-4 w-4 flex-shrink-0" />
                      <span>{edu.institution}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Certifications Card */}
          <FadeIn direction="left" delay={0.1}>
            <div className="skill-card h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent/20 flex items-center justify-center">
                  <Award className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Certifications
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Professional Courses
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-start justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div>
                      <h4 className="font-medium text-foreground text-sm">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded whitespace-nowrap">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Achievements Section */}
        <FadeIn delay={0.2} className="mt-8">
          <div className="skill-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent/20 flex items-center justify-center">
                <Trophy className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Achievements & Awards
                </h3>
                <p className="text-sm text-muted-foreground">
                  Recognition & Accomplishments
                </p>
              </div>
            </div>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.1}>
              {achievements.map((achievement) => (
                <StaggerItem key={achievement.title + achievement.description}>
                  <div className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-center group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <achievement.icon className="h-6 w-6 text-accent" />
                    </div>
                    <p className="font-semibold text-foreground text-sm">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                    <p className="text-xs text-accent mt-1">{achievement.year}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Education;
