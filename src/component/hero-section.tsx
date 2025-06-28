"use client";
import { useEffect, useState } from "react";
import { AuroraText } from "@/component/magicui/aurora-text";
import { Marquee3D } from "@/component/magicui/marquee";
import { cn } from "@/lib/utils";

const PLACE1_WORDS = ["Brand", "Business", "Startup", "MSME", "SME"];
const PLACE2_WORDS = ["Creator", "Influencer"];

function WordRotator({ words, interval = 1500, className }: { words: string[]; interval?: number; className?: string }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words, interval]);
  return <span className={cn("inline-block transition-all duration-500", className)}>{words[index]}</span>;
}

export function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between min-h-[70vh] py-12 md:py-24 px-4 md:px-16 gap-8 bg-transparent">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-xl gap-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Are you <AuroraText className="inline-block transition-colors duration-700 ease-in-out"><WordRotator words={PLACE1_WORDS} /></AuroraText>?
          <br />
          Struggling to find <AuroraText className="inline-block transition-colors duration-700 ease-in-out"><WordRotator words={PLACE2_WORDS} interval={2000} /></AuroraText>?
        </h1>
        <h2 className="text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-200">
          Get your brand identity in seconds using{" "}
          <AuroraText className="inline-block font-extrabold text-2xl md:text-3xl transition-colors duration-700 ease-in-out">Circle</AuroraText> in seconds
        </h2>
      </div>
      {/* Right: Marquee3D */}
      {/* <div className="flex-1 flex items-center justify-center w-full max-w-2xl bg-transparent">
        <Marquee3D />
      </div> */}
    </section>
  );
}