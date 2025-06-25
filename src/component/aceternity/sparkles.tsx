"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface SparklesProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleCount?: number;
  className?: string;
}

export const Sparkles = ({
  id = "sparkles",
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleCount = 40,
  className,
}: SparklesProps) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, [particleCount, minSize, maxSize]);

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      style={{ background }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration / speed}s`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          <div className="h-full w-full rounded-full bg-white opacity-60" />
        </div>
      ))}
    </div>
  );
}; 