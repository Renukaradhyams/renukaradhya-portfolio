import { Heart, Linkedin, Github, Mail, Instagram, ArrowUp } from "lucide-react";
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
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:renukaradhyarenums@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative bg-card dark:bg-card/80 backdrop-blur-sm border-t border-border/50 py-12">
      {/* Gradient decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 h-40 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo & Title */}
          <div>
            <motion.p 
              className="font-heading text-2xl font-bold text-foreground mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Renukaradhya<span className="text-accent">.</span>
            </motion.p>
            <p className="text-muted-foreground">
              Software Engineer | AI & Robotics Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-secondary/80 dark:bg-secondary/50 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>Designed & Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-accent fill-accent" />
              </motion.span>
              <span>by Renukaradhya M S</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>© {currentYear} All rights reserved.</span>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute right-4 bottom-4 md:right-8 md:bottom-8 w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
