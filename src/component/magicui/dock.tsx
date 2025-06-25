"use client";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";

interface DockItemProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const DockItem = ({ children, className, onClick }: DockItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 cursor-pointer hover:scale-110",
        isHovered && "scale-110",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

interface DockProps {
  children: ReactNode;
  className?: string;
}

export const Dock = ({ children, className }: DockProps) => {
  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 p-2 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10",
        className
      )}
    >
      {children}
    </div>
  );
}; 