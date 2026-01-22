import { Heart, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center gap-6">
          <div>
            <p className="font-heading text-2xl font-bold mb-1">
              Renukaradhya M S
            </p>
            <p className="text-primary-foreground/70">
              Software Engineer | AI & Robotics Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/renukaradhya-m-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:renukaradhyarenums@gmail.com"
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="w-full max-w-md h-px bg-primary-foreground/20" />

          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-1">
              <span>Designed & Built with</span>
              <Heart className="h-4 w-4 text-accent fill-accent" />
              <span>by Renukaradhya M S</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>© {currentYear} All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
