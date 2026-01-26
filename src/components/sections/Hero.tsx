import { ArrowDown, Download, FolderKanban, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import TypingAnimation from "@/components/ui/TypingAnimation";
import ParticleBackground from "@/components/ui/ParticleBackground";

const roles = [
  "Software Engineer",
  "Web Developer",
  "AI & ML Enthusiast",
  "Robotics Explorer",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient dark:hero-gradient">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/15 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent font-semibold mb-4 tracking-wide text-sm md:text-base"
            >
              Entry-Level Software Developer • ECE Graduate
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Hi, I'm{" "}
              <span className="relative">
                <span className="text-accent text-glow">Renukaradhya M S</span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-1 bg-accent/50 rounded-full"
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
              className="text-xl md:text-2xl text-white/80 mb-6 h-10"
            >
              <TypingAnimation texts={roles} typingSpeed={80} deletingSpeed={40} />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-white/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Electronics and Communication Engineering graduate with hands-on experience in{" "}
              <span className="text-accent font-medium">Software Development</span>,{" "}
              <span className="text-accent font-medium">AI</span>,{" "}
              <span className="text-accent font-medium">Cloud Computing</span>, and{" "}
              <span className="text-accent font-medium">Robotics</span>. 
              Building practical, scalable, and technology-driven solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button variant="accent" size="xl" asChild className="group glow-accent">
                <a href="#projects">
                  <FolderKanban className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  View Projects
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild className="group">
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
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-white/60"
            >
              <a href="tel:+916360076463" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                +91-6360076463
              </a>
              <a href="mailto:renukaradhyarenums@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
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
              {/* Animated ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-accent/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-accent/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Profile image */}
              <div className="profile-image w-64 h-64 md:w-80 md:h-80 animate-pulse-glow">
                <img
                  src="/WhatsApp Image 2026-01-12 at 6.56.30 PM.jpeg"
                  alt="Renukaradhya M S"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-2 -right-2 glass-card px-3 py-2 text-xs font-medium text-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              🎓 CGPA 8.19
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-2 glass-card px-3 py-2 text-xs font-medium text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              💼 4+ Internships
            </motion.div>
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
            className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
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
