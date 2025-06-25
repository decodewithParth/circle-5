"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = 16,
  ry = 16,
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
}: {
  children: ReactNode;
  duration?: number;
  rx?: number;
  ry?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: any;
}) => {
  return (
    <Component
      className={cn(
        "relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-900 px-3 py-1",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-xl",
          borderClassName
        )}
        style={{
          background: `linear-gradient(90deg, #00d4ff, #7c3aed, #00d4ff)`,
          backgroundSize: "200% 200%",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: `linear-gradient(90deg, #00d4ff, #7c3aed, #00d4ff)`,
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      <div className={cn("relative z-10", className)}>{children}</div>
    </Component>
  );
}; 