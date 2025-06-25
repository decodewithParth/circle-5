"use client";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
}

export const Marquee = ({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 1,
}: MarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex overflow-hidden",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "flex animate-marquee",
          vertical ? "flex-col" : "flex-row",
          reverse && "animate-marquee-reverse",
          isPaused && "animation-play-state-paused"
        )}
        style={{
          animationDuration: "20s",
        }}
      >
        {Array.from({ length: repeat }, (_, i) => (
          <div key={i} className="flex shrink-0">
            {children}
          </div>
        ))}
      </div>
      <div
        className={cn(
          "flex animate-marquee",
          vertical ? "flex-col" : "flex-row",
          reverse && "animate-marquee-reverse",
          isPaused && "animation-play-state-paused"
        )}
        style={{
          animationDuration: "20s",
        }}
      >
        {Array.from({ length: repeat }, (_, i) => (
          <div key={i} className="flex shrink-0">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}; 