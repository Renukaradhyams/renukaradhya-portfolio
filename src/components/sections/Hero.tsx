import { ArrowDown, Download, FolderKanban, Phone, Mail, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import TypingAnimation from "@/components/ui/TypingAnimation";
import profileImage from "/WhatsApp Image 2026-01-12 at 6.56.30 PM.jpeg";

const roles = [
  "Software Engineer",
  "Web Developer",
  "AI & ML Enthusiast",
  "Robotics Explorer",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30 dark:from-background dark:via-secondary/10 dark:to-background">
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 20%, hsl(var(--accent) / 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 80%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 60%, hsl(174 70% 45% / 0.08) 0%, transparent 40%)
            `,
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating code symbols */}
        <motion.div
          className="absolute top-1/3 right-1/4 text-6xl text-accent/10 font-mono"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {"</>"}
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/6 text-4xl text-primary/10 font-mono"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {"{ }"}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm font-medium text-accent">Open to Work • ECE Graduate</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
            >
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Renukaradhya M S</span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 h-10 flex items-center justify-center lg:justify-start gap-2"
            >
              <Code className="h-6 w-6 text-accent" />
              <TypingAnimation texts={roles} typingSpeed={80} deletingSpeed={40} />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Electronics and Communication Engineering graduate with hands-on experience in{" "}
              <span className="text-foreground font-medium">Software Development</span>,{" "}
              <span className="text-foreground font-medium">AI & Machine Learning</span>,{" "}
              <span className="text-foreground font-medium">Cloud Computing</span>, and{" "}
              <span className="text-foreground font-medium">Robotics</span>. 
              Building practical, scalable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" asChild className="group bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20">
                <a href="#projects">
                  <FolderKanban className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  View Projects
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="group border-border/50 hover:border-accent hover:bg-accent/5">
                <a href="/Renukaradhya_MS_Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Quick contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
            >
              <a href="tel:+916360076463" className="flex items-center gap-2 hover:text-accent transition-colors">
                <div className="p-2 rounded-full bg-accent/10">
                  <Phone className="h-3 w-3 text-accent" />
                </div>
                +91-6360076463
              </a>
              <a href="mailto:renukaradhyarenums@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <div className="p-2 rounded-full bg-accent/10">
                  <Mail className="h-3 w-3 text-accent" />
                </div>
                renukaradhyarenums@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-primary/20 blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Animated border */}
              <motion.div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent via-primary to-accent"
                style={{ backgroundSize: '200% 100%' }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Profile image */}
              <div className="relative profile-image w-72 h-72 md:w-80 md:h-80 rounded-2xl">
                <img
                  src={profileImage}
                  alt="Renukaradhya M S"
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-xl border border-accent/30"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold">CGPA 8.19</span>
                </div>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-xl border border-primary/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold">4+ Internships</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
            <ArrowDown className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
