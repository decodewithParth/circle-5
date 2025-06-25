"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextAnimateProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const TextAnimate = ({
  children,
  className,
  delay = 0,
  stagger = 0.1,
}: TextAnimateProps) => {
  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");

  return (
    <div className={cn("flex flex-wrap", className)}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * stagger,
            ease: "easeOut",
          }}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}; 