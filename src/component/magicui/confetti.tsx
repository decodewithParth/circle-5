"use client";
import React, { forwardRef } from "react";
import confetti from "canvas-confetti";

interface ConfettiProps {
  className?: string;
  colors?: string[];
  duration?: number;
  buttonText?: string;
}

export const Confetti = forwardRef<HTMLButtonElement, ConfettiProps>(
  (
    {
      className,
      colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"],
      duration = 3000,
      buttonText = "Trigger Side Cannons",
    },
    ref
  ) => {
    const handleClick = () => {
      const end = Date.now() + duration;

      const frame = () => {
        if (Date.now() > end) return;

        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          startVelocity: 60,
          origin: { x: 0, y: 0.5 },
          colors: colors,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          startVelocity: 60,
          origin: { x: 1, y: 0.5 },
          colors: colors,
        });

        requestAnimationFrame(frame);
      };

      frame();
    };

    return (
      <div className={`relative ${className || ""}`}>
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-purple-500 text-white rounded"
          ref={ref}
        >
          {buttonText}
        </button>
      </div>
    );
  }
);
Confetti.displayName = "Confetti";
export default Confetti; 