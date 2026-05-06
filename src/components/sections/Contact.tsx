import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, Phone, CheckCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FadeIn } from "@/components/ui/motion";
import GlassCard from "@/components/ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mqenbnqq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Message Sent! 🎉",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({ name: "", email: "", message: "" });
        
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Formspree Error:", error);

      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/renukaradhya-m-s/",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]",
    },
    {
      icon: Github,
      href: "https://github.com/Renukaradhyams",
      label: "GitHub",
      color: "hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(31,41,55,0.5)]",
    },
    {
      icon: Globe,
      href: "https://renukaradhyams.netlify.app",
      label: "Portfolio",
      color: "hover:bg-cyan-600 hover:shadow-[0_0_20px_rgba(8,145,178,0.5)]",
    },
    {
      icon: Mail,
      href: "mailto:renukaradhyarenums@gmail.com",
      label: "Email",
      color: "hover:bg-violet-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]",
    },
  ];

  return (
    <section id="contact" className="section bg-background relative overflow-hidden py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-violet-500/5 via-cyan-500/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <p className="text-cyan-400 font-medium tracking-wide text-xs uppercase">
              Get in Touch
            </p>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm actively seeking opportunities in software engineering. 
            Feel free to reach out for collaborations, opportunities, or just to say hi.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <FadeIn direction="right">
            <div className="space-y-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <motion.a
                  href="mailto:renukaradhyarenums@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-violet-500/30 transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border border-white/10">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Email</p>
                    <p className="font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                      renukaradhyarenums@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+916360076463"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-violet-500/30 transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border border-white/10">
                    <Phone className="h-6 w-6 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Phone</p>
                    <p className="font-bold text-foreground group-hover:text-violet-400 transition-colors">+91-6360076463</p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center shadow-lg border border-white/10">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Location</p>
                    <p className="font-bold text-foreground">Davangere, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                  Social Profiles
                </h3>

                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left" delay={0.1}>
            <GlassCard className="p-8 border border-white/5 bg-white/[0.02]">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-background border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20 h-12 rounded-xl"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20 h-12 rounded-xl"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="bg-background border-white/10 resize-none focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl"
                  />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={isSuccess ? "success" : "submit"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="pt-2"
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className={`w-full h-14 rounded-xl text-base font-bold tracking-wide transition-all duration-300 ${
                        isSuccess 
                          ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                          : 'bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)]'
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSuccess ? (
                        <>
                          <CheckCircle className="mr-2 h-6 w-6" />
                          Message Sent Successfully!
                        </>
                      ) : isSubmitting ? (
                        <>
                          <motion.div
                            className="mr-3 h-5 w-5 border-2 border-current border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </AnimatePresence>
              </form>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
