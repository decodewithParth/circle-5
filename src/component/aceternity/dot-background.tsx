"use client";
import { cn } from "@/lib/utils";

export const DotBackground = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full bg-dot-black/[0.2] dark:bg-dot-white/[0.2]",
        className
      )}
      {...props}
    />
  );
}; 