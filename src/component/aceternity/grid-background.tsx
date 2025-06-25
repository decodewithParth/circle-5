"use client";
import { cn } from "@/lib/utils";

export const GridBackground = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]",
        className
      )}
      {...props}
    />
  );
}; 