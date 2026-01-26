import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillProgressBarProps {
  skill: string;
  level: number;
  color?: string;
}

const SkillProgressBar = ({
  skill,
  level,
  color = "accent",
}: SkillProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary dark:bg-secondary/50 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-${color} rounded-full relative`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{
            background: `linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)))`,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
