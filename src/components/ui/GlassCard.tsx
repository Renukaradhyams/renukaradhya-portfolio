import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
}

const GlassCard = ({
  children,
  className,
  hover = true,
  tilt = false,
  ...props
}: GlassCardProps) => {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "bg-card/60 dark:bg-card/40 backdrop-blur-xl",
        "border border-border/50 dark:border-white/10",
        "shadow-lg shadow-black/5 dark:shadow-black/20",
        hover && "transition-all duration-300 hover:shadow-xl hover:shadow-accent/10",
        className
      )}
      whileHover={
        tilt
          ? {
              rotateX: 5,
              rotateY: 5,
              scale: 1.02,
              transition: { duration: 0.2 },
            }
          : hover
          ? { y: -4, scale: 1.01 }
          : {}
      }
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {/* Glassmorphism gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent dark:from-white/5 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
