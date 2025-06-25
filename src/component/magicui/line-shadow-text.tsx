"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LineShadowTextProps {
  children: ReactNode;
  className?: string;
  shadowColor?: string;
  shadowOffset?: number;
}

export const LineShadowText = ({
  children,
  className,
  shadowColor = "rgba(0, 0, 0, 0.3)",
  shadowOffset = 2,
}: LineShadowTextProps) => {
  return (
    <div
      className={cn("relative", className)}
      style={{
        textShadow: `${shadowOffset}px ${shadowOffset}px 0 ${shadowColor}`,
      }}
    >
      {children}
    </div>
  );
}; 