"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  words: {
    text: string;
    className?: string;
  }[];
  cursorClassName?: string;
  className?: string;
}

export const TypewriterEffect = ({
  words,
  cursorClassName,
  className,
}: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const shouldDelete = isDeleting;
    const shouldType = !isDeleting;

    if (shouldType) {
      if (currentText.length < currentWord.text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.text.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }

    if (shouldDelete) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.text.slice(0, currentText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className={cn("text-base sm:text-xl", className)}>
      {words.map((word, idx) => {
        const isCurrentWord = idx === currentWordIndex;
        return (
          <span key={`word-${idx}`} className={cn("", word.className)}>
            {isCurrentWord ? currentText : word.text}
            {isCurrentWord && (
              <span
                className={cn(
                  "inline-block w-0.5 h-4 sm:h-6 bg-slate-900 dark:bg-slate-100 ml-1 animate-pulse",
                  cursorClassName
                )}
              />
            )}
          </span>
        );
      })}
    </div>
  );
}; 