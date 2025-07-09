"use client";
import { useEffect, useState } from "react";
import { AuroraText } from "@/component/magicui/aurora-text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Marquee3D } from "@/component/magicui/marquee";

// Add CSS animation for smooth word transitions
const wordAnimationStyle = `
  @keyframes fadeInOut {
    0% { opacity: 0; transform: translateY(-10px); }
    50% { opacity: 1; transform: translateY(0); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;

const PLACE1_WORDS = ["Brand ?", "Business ?", "Startup ?", "MSME ?", "SME ?"];
const PLACE2_WORDS = ["Creator ?", "Influencer ?"];

function WordRotator({ words, interval = 1500, className }: { words: string[]; interval?: number; className?: string }) {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words, interval]);
  
  return (
    <span 
      className={cn(
        "inline-block transition-all duration-300 ease-in-out",
        className
      )}
      key={index}
    >
      {words[index]}
    </span>
  );
}

export function HeroSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: wordAnimationStyle }} />
      <section className="w-full flex flex-col md:flex-row items-center justify-between min-h-[70vh] pt-0 pb-8 px-2 sm:px-4 md:px-16 gap-6 sm:gap-8 bg-transparent !bg-transparent">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-full sm:max-w-xl gap-4 sm:gap-6 pl-2 sm:pl-4 md:pl-0">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
          Are you <AuroraText className="inline-block transition-colors duration-700 ease-in-out"><WordRotator words={PLACE1_WORDS} /></AuroraText>
          <br />
          Struggling to find <AuroraText className="inline-block transition-colors duration-700 ease-in-out"><WordRotator words={PLACE2_WORDS} interval={2000} /></AuroraText>
        </h1>
        <h2 className="text-base sm:text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-200 relative">
          <span className="absolute -left-4 sm:-left-6 top-1/2 transform -translate-y-1/2 w-1 h-6 sm:h-8 bg-gradient-to-b from-[#9146FF] to-purple-600 rounded-full"></span>
          Get your brand identity in seconds using{" "}
          <AuroraText className="inline-block font-extrabold text-lg sm:text-2xl md:text-3xl transition-colors duration-700 ease-in-out">Hey Circle</AuroraText> in seconds
        </h2>
      </div>
      
      {/* Right: Image with Stat Overlays */}
      <div className="flex-1 flex items-center justify-center relative min-w-0 w-full max-w-full">
        <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[520px] md:w-[480px] md:h-[620px]">
          <Image
            src="/ai_character.png"
            alt="AI Creator"
            fill
            className="object-contain rounded-3xl"
            priority
          />
          {/* Bottom Right Profile Card */}
          <div className="hidden sm:flex absolute top-60 right-[-50px] bg-white/80 rounded-xl items-center gap-1 px-1 py-1 sm:gap-3 sm:px-5 sm:py-3 md:gap-4 md:px-8 md:py-4 w-fit min-w-0 text-xs sm:text-sm md:text-base">
            <Image
              src="/Parth Profile Picture.jpg"
              alt="AI Creator"
              width={48}
              height={48}
              className="rounded-full object-contain border border-gray-200"
            />
            <div>
              <div className="font-semibold">Parth C.</div>
              <div className="text-xs text-purple-700">Tech</div>
              <div className="text-xs text-black-400">Ahemdabad</div>
            </div>
            <div className="ml-4 text-right">
              <div className="text-pink-600 font-bold text-lg">120K+</div>
              <div className="text-xs text-gray-500">Followers</div>
            </div>
          </div>
          {/* Bottom Left Stats Card */}
          <div className="hidden sm:flex absolute bottom-3 left-3 bg-white/80 backdrop-blur-md rounded-xl px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 min-w-[120px] sm:min-w-[180px] md:min-w-[220px] flex-col gap-1 text-xs sm:text-sm md:text-base">
            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Views</span>
              <span className="text-pink-600 font-bold">271220</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Likes</span>
              <span className="text-pink-600 font-bold">20020</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Engagement</span>
              <span className="text-green-600 font-bold">9.08%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}