"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface RetroGridProps {
  className?: string;
  angle?: number;
  cellSize?: number;
  opacity?: number;
  lightLineColor?: string;
  darkLineColor?: string;
}

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "#d1d5db", // Tailwind gray-300
  darkLineColor = "#374151",  // Tailwind gray-700
}: RetroGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let start: number | null = null;

    function drawGrid(time: number) {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.offsetWidth * dpr;
      const height = canvas.offsetHeight * dpr;
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, width, height);

      // Animate grid movement
      const speed = 0.04;
      const offset = ((time * speed) % cellSize);

      // Set grid color based on theme
      const isDark = document.documentElement.classList.contains("dark");
      ctx.strokeStyle = isDark ? darkLineColor : lightLineColor;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = 1 * dpr;

      // Rotate grid
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.translate(-width / 2, -height / 2);

      // Draw vertical lines
      for (let x = -cellSize; x < width + cellSize; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset, height);
        ctx.stroke();
      }
      // Draw horizontal lines
      for (let y = -cellSize; y < height + cellSize; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + offset);
        ctx.lineTo(width, y + offset);
        ctx.stroke();
      }
      ctx.restore();
    }

    function animate(now: number) {
      if (!start) start = now;
      drawGrid(now - start);
      animationFrameId = requestAnimationFrame(animate);
    }
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [angle, cellSize, opacity, lightLineColor, darkLineColor]);

  return (
    <div className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
} 