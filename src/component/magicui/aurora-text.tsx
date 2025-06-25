"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AuroraTextProps {
  children: ReactNode;
  className?: string;
}

export const AuroraText = ({ children, className }: AuroraTextProps) => {
  return (
    <div className={cn("relative", className)}>
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse"
        style={{
          backgroundSize: "200% 200%",
          animation: "aurora 3s ease-in-out infinite",
        }}
      >
        {children}
      </div>
      <div className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
        {children}
      </div>
    </div>
  );
}; 