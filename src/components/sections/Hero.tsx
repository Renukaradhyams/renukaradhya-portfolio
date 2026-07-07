import { ArrowDown, Download, FolderKanban, Phone, Mail, Code, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import TypingAnimation from "@/components/ui/TypingAnimation";
import profileImage from "/Renukaradhya_MS.jpeg";

const roles = [
  "Web Development Manager",
  "Full Stack Web Developer",
  "Technical Lead",
  "Building Scalable Digital Solutions",
];

const techStack = [
  "React.js", "Node.js", "TypeScript", "MySQL", "Azure", "GitHub", "Express.js"
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30 dark:from-background dark:via-indigo-950/20 dark:to-background">
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 20%, hsl(260 100% 60% / 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 80%, hsl(190 100% 50% / 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 60%, hsl(300 100% 50% / 0.08) 0%, transparent 40%)
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
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-violet-600/20 blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-cyan-600/20 blur-[100px]"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span className="text-sm font-medium text-violet-300">Available for Opportunities</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1]"
            >
              Building <br className="hidden md:block"/>
              <span className="relative inline-block mt-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
                  Scalable Digital
                </span>
              </span>
              <br/>
              Experiences
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 h-10 flex items-center justify-center lg:justify-start gap-3"
            >
              <Code className="h-6 w-6 text-cyan-400" />
              <TypingAnimation texts={roles} typingSpeed={60} deletingSpeed={30} />
            </motion.div>
            
            {/* Tech Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10"
            >
              {techStack.map((tech, idx) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 text-sm font-medium rounded-md bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" asChild className="group bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all rounded-full px-8">
                <a href="#projects">
                  <FolderKanban className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  View Projects
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="group border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 rounded-full px-8 backdrop-blur-md text-foreground">
                <a href="/Renukaradhya_MS_Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                  Resume
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild className="group hover:bg-white/5 rounded-full px-6">
                <a href="#contact">
                  <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  Contact
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:ml-10"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20 blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Animated border */}
              <motion.div
                className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500 opacity-70"
                style={{ backgroundSize: '200% 100%' }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Profile image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2rem] overflow-hidden bg-background">
                <img
                  src={profileImage}
                  alt="Renukaradhya M S"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-6 -right-6 bg-background/80 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">10+</span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Projects</span>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 bg-background/80 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 shadow-2xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">3+</span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Internships</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-current to-transparent" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

