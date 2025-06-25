"use client";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import React, { useState, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

const sizeMap: Record<string, string> = {
  sm: "max-w-xs h-72",
  md: "max-w-sm h-96",
  lg: "max-w-md h-[28rem]",
};

const expandedSizeMap: Record<string, string> = {
  sm: "max-w-xs h-96",
  md: "max-w-sm h-[32rem]",
  lg: "max-w-md h-[40rem]",
};

export const EvervaultCard = ({
  text,
  className,
  size = "md",
  children,
  title,
  description,
}: {
  text?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | string;
  children?: ReactNode;
  title?: string;
  description?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  useEffect(() => {
    if (description && description.length > 100) {
      setShowReadMore(true);
    }
  }, [description]);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription = description && description.length > 100 
    ? description.substring(0, 100) + "..."
    : description;

  return (
    <motion.div
      className={cn(
        "border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start mx-auto p-4 relative transition-all duration-300",
        isExpanded ? (expandedSizeMap[size] || size) : (sizeMap[size] || size),
        className
      )}
      animate={{ height: isExpanded ? "auto" : "auto" }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full h-64 relative overflow-hidden bg-transparent flex items-center justify-center"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative h-44 w-44  rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="dark:text-white text-black z-20">{text}</span>
          </div>
        </div>
      </div>

      {title && (
        <h2 className="dark:text-white text-black mt-4 text-lg font-semibold">
          {title}
        </h2>
      )}
      {description && (
        <div className="mt-2 w-full">
          <p className="dark:text-white text-black text-sm font-light w-full break-words">
            {isExpanded ? description : truncatedDescription}
          </p>
          {showReadMore && (
            <button
              onClick={toggleExpanded}
              className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-2 transition-colors"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      )}
      {children}
    </motion.div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
