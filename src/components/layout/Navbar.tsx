import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/80 dark:bg-card/60 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      } ${isScrolled ? "py-3" : "py-5"}`}
    >
      <div className="container-custom flex items-center justify-between">
        <a
          href="#"
          className={`font-heading text-xl font-bold transition-colors ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
        >
          Renukaradhya<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent relative group ${
                isScrolled ? "text-muted-foreground" : "text-white/80"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <ThemeToggle className={isScrolled ? "" : "text-white hover:text-white"} />
          <Button
            variant={isScrolled ? "default" : "heroOutline"}
            size="sm"
            asChild
            className={isScrolled ? "" : "border-white/30 text-white hover:bg-white/10"}
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle className={isScrolled ? "" : "text-white"} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card/95 dark:bg-card/90 backdrop-blur-xl border-t border-border/50">
          <div className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-accent py-2 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" asChild className="mt-2">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
