"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;

    const beams = beamsRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = beams.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      beams.style.setProperty("--mouse-x", `${mouseX}px`);
      beams.style.setProperty("--mouse-y", `${mouseY}px`);
    };

    beams.addEventListener("mousemove", handleMouseMove);
    return () => beams.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950 [--mouse-x:50%] [--mouse-y:50%]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.15),transparent_40%)]" />
    </div>
  );
}; 