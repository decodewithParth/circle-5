"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NumberTickerProps {
  value: number;
  className?: string;
  duration?: number;
}

export const NumberTicker = ({
  value,
  className,
  duration = 2,
}: NumberTickerProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startValue = displayValue;
    const endValue = value;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      const currentValue = Math.round(startValue + (endValue - startValue) * progress);
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [value, duration]);

  return (
    <motion.span 
      className={cn("inline-block", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayValue}
    </motion.span>
  );
}; 