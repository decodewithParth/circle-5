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
      <section className="w-full flex flex-col md:flex-row items-center justify-between min-h-[70vh] py-8 sm:py-12 md:py-24 px-2 sm:px-4 md:px-16 gap-6 sm:gap-8 bg-transparent !bg-transparent">
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
      
      {/* Right: Marquee */}
      <div className="flex-1 flex items-center justify-center relative min-w-0 w-full max-w-full">
        <Marquee3D />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
    </>
  );
}

// export default function InfluencerHero() {
//   return (
//     <div className="relative flex items-center justify-center min-h-[70vh]">
//       {/* Female Character Image */}
//       <Image
//         src="/public/images/influencers/abhisaaschanna.jpeg" // Replace with your female image path
//         alt="Priya S."
//         width={500}
//         height={600}
//         className="rounded-3xl object-cover"
//         priority
//       />

//       {/* Top Right Profile Box */}
//       <div className="absolute top-10 right-10 bg-white/90 rounded-xl shadow-lg flex items-center gap-3 px-5 py-3">
//         <Image
//           src="/public/images/ai_image.png" // Small profile image
//           alt="Priya S."
//           width={48}
//           height={48}
//           className="rounded-full object-cover"
//         />
//         <div>
//           <div className="font-semibold">Priya S.</div>
//           <div className="text-xs text-pink-500">Fashion</div>
//           <div className="text-xs text-gray-500">Mumbai</div>
//         </div>
//         <div className="ml-4 text-right">
//           <div className="text-pink-600 font-bold text-lg">95K+</div>
//           <div className="text-xs text-gray-500">Followers</div>
//         </div>
//       </div>

//       {/* Bottom Left Stats Box */}
//       <div className="absolute bottom-10 left-10 bg-white/90 rounded-xl shadow-lg px-6 py-4">
//         <div className="flex flex-col gap-1">
//           <div className="flex justify-between">
//             <span className="text-gray-700 font-medium">Views</span>
//             <span className="text-pink-600 font-bold">34,000</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-700 font-medium">Likes</span>
//             <span className="text-pink-600 font-bold">8,500</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-700 font-medium">Engagement</span>
//             <span className="text-green-600 font-bold">4.12%</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }