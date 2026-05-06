import { Heart, Linkedin, Github, Mail, Globe, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/renukaradhya-m-s/",
      label: "LinkedIn",
      color: "hover:text-blue-500 hover:bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Github,
      href: "https://github.com/Renukaradhyams",
      label: "GitHub",
      color: "hover:text-white hover:bg-white/10 border-white/20",
    },
    {
      icon: Globe,
      href: "https://renukaradhyams.netlify.app",
      label: "Portfolio",
      color: "hover:text-cyan-400 hover:bg-cyan-400/10 border-cyan-400/20",
    },
    {
      icon: Mail,
      href: "mailto:renukaradhyarenums@gmail.com",
      label: "Email",
      color: "hover:text-violet-400 hover:bg-violet-400/10 border-violet-400/20",
    },
  ];

  return (
    <footer className="relative bg-background border-t border-white/5 py-12 overflow-hidden mt-20">
      {/* Gradient decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-violet-600/10 via-cyan-600/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo & Title */}
          <div>
            <motion.p 
              className="font-heading text-3xl font-bold text-foreground mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Renukaradhya<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">.</span>
            </motion.p>
            <p className="text-muted-foreground font-medium tracking-wide">
              Software Engineer | Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-xl bg-white/[0.02] border flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm font-medium text-muted-foreground/80">
            <div className="flex items-center gap-1.5">
              <span>Designed & Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-rose-500 fill-rose-500/50" />
              </motion.span>
              <span>by Renukaradhya M S</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>© {currentYear} All rights reserved.</span>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute right-4 bottom-4 md:right-8 md:bottom-8 w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] transition-all duration-300 z-50 border border-white/20"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
