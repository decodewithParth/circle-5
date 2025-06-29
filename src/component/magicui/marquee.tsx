"use client";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
}

interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
  category: string;
}

export const Marquee = ({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 1,
}: MarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex overflow-hidden",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "flex animate-marquee",
          vertical ? "flex-col" : "flex-row",
          reverse && "animate-marquee-reverse",
          isPaused && "animation-play-state-paused"
        )}
        style={{
          animationDuration: "var(--duration, 40s)",
        }}
      >
        {Array.from({ length: repeat }, (_, i) => (
          <div key={i} className="flex shrink-0">
            {children}
          </div>
        ))}
      </div>
      <div
        className={cn(
          "flex animate-marquee",
          vertical ? "flex-col" : "flex-row",
          reverse && "animate-marquee-reverse",
          isPaused && "animation-play-state-paused"
        )}
        style={{
          animationDuration: "var(--duration, 40s)",
        }}
      >
        {Array.from({ length: repeat }, (_, i) => (
          <div key={i} className="flex shrink-0">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

/* eslint-disable @next/next/no-img-element */

const placeholderImg =
  "https://via.placeholder.com/200x300.png?text=Creator";

const reviews: Review[] = [
  // Group 1 (1 female, 3 males)
  { name: "Prajakta Kohli", username: "@mostlysane", body: "Relatable and fun!", img: "/images/influencers/prajaktakohli.jpeg", category: "Comedian" },
  { name: "CarryMinati", username: "@carryminati", body: "Roasting king!", img: "/images/influencers/carryminati.jpeg", category: "Roaster" },
  { name: "Bhuvan Bam", username: "@bhuvan.bam22", body: "BB Ki Vines!", img: "/images/influencers/bhuvanbam.jpeg", category: "Entertainer" },
  { name: "Ashish Chanchlani", username: "@ashishchanchlani", body: "Epic sketches!", img: "/images/influencers/ashishchanchlani.jpeg", category: "Comedian" },

  // Group 2 (1 female, 3 males)
  { name: "Ahsaas Channa", username: "@ahsaaschanna", body: "Talented actress!", img: "/images/influencers/ahsaaschanna.jpeg", category: "Actress" },
  { name: "Nischay Malhan", username: "@triggeredinsaan", body: "Hilarious content!", img: "/images/influencers/nischaymalaan.jpeg", category: "YouTuber" },
  { name: "Abhishek Malhan", username: "@fukra_insaan", body: "Bigg Boss star!", img: "/images/influencers/abhishekmalaan.jpeg", category: "YouTuber" },
  { name: "Gaurav Taneja", username: "@flyingbeast320", body: "Fitness inspiration!", img: "/images/influencers/gauravtaneja.jpeg", category: "Fitness" },

  // Group 3 (1 female, 3 males)
  { name: "Bharti Singh", username: "@bharti.laughterqueen", body: "Queen of comedy!", img: "/images/influencers/bhartisingh.jpeg", category: "Comedian" },
  { name: "Apoorva Sharma", username: "@apoorvasharma", body: "Creative mind!", img: "/images/influencers/apoorvasharma.jpeg", category: "Artist" },
  { name: "Mandira Bedi", username: "@mandirabedi", body: "Multi-talented!", img: "/images/influencers/mandirabedi.jpeg", category: "Host" },
  { name: "Revati Pillai", username: "@revatipillai", body: "Web series star!", img: "/images/influencers/revatipillai.jpeg", category: "Actress" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  category,
}: {
  img: string;
  name: string;
  category: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-48 w-36 cursor-pointer overflow-hidden rounded-xl border border-gray-200/20 transition-all duration-300 mx-2"
      )}
    >
      {/* Background Image or Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      {/* Blur Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent backdrop-blur-md" />
      {/* Creator Info */}
      <div className="absolute bottom-2 left-2 right-2 flex flex-col items-start">
        <h3 className="text-sm font-semibold text-white truncate">{name}</h3>
        <p className="text-xs text-gray-300 truncate">{category}</p>
      </div>
    </div>
  );
};

// Helper to split reviews into groups of 4
function splitIntoGroups(arr: Review[], groupSize: number): Review[][] {
  const groups: Review[][] = [];
  for (let i = 0; i < arr.length; i += groupSize) {
    groups.push(arr.slice(i, i + groupSize));
  }
  return groups;
}

export function Marquee3D() {
  const groups = splitIntoGroups(reviews, 4); // 3 groups of 4
  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px] bg-transparent">
      <div
        className="flex flex-row items-center gap-4 bg-transparent"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        {groups.map((group, idx) => (
          <Marquee
            key={idx}
            pauseOnHover
            vertical
            className="[--duration:40s] bg-transparent"
            reverse={idx === 1} // alternate direction for middle column
          >
            <div className="flex flex-col gap-4 bg-transparent">
              {Array.from({ length: 20 }).map((_, repeatIdx) =>
                group.map((review, i) => (
                  <ReviewCard key={review.username + i + '-' + repeatIdx} {...review} />
                ))
              )}
            </div>
          </Marquee>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
} 