"use client";
import { useEffect, useState } from "react";

interface ConfettiProps {
  className?: string;
  colors?: string[];
  count?: number;
  duration?: number;
}

export const Confetti = ({
  className,
  colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"],
  count = 100,
  duration = 3000,
}: ConfettiProps) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    size: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -10,
      vx: (Math.random() - 0.5) * 8,
      vy: Math.random() * 3 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 4 + 2,
    }));

    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + 0.1, // gravity
        }))
      );
    }, 16);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setParticles([]);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [count, colors, duration]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 ${className || ""}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
}; 