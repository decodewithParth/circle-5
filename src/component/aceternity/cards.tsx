"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

// Feature Block Animated Card
interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export const FeatureCard = ({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {title}
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Background Overlay Card
interface BackgroundOverlayCardProps {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
}

export const BackgroundOverlayCard = ({
  children,
  backgroundImage,
  className,
}: BackgroundOverlayCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950",
        className
      )}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 group-hover:opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="relative z-10 p-6">{children}</div>
    </div>
  );
};

// Content Card
interface ContentCardProps {
  title: string;
  author: {
    name: string;
    avatar?: string;
  };
  readTime: string;
  className?: string;
}

export const ContentCard = ({
  title,
  author,
  readTime,
  className,
}: ContentCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950",
        className
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        {author.avatar && (
          <img
            src={author.avatar}
            alt={author.name}
            className="h-10 w-10 rounded-full"
          />
        )}
        <div>
          <p className="font-medium text-slate-900 dark:text-slate-100">
            {author.name}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {readTime}
          </p>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h3>
    </div>
  );
};

// Testimonial Card
interface TestimonialCardProps {
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar?: string;
  };
  className?: string;
}

export const TestimonialCard = ({
  content,
  author,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950",
        className
      )}
    >
      <blockquote className="mb-4 text-slate-600 dark:text-slate-400">
        "{content}"
      </blockquote>
      <div className="flex items-center gap-3">
        {author.avatar && (
          <img
            src={author.avatar}
            alt={author.name}
            className="h-10 w-10 rounded-full"
          />
        )}
        <div>
          <p className="font-medium text-slate-900 dark:text-slate-100">
            {author.name}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {author.role} at {author.company}
          </p>
        </div>
      </div>
    </div>
  );
};

// Stats Card
interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  className?: string;
}

export const StatsCard = ({
  title,
  value,
  description,
  icon,
  className,
}: StatsCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {title}
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
            {value}
          </p>
          {description && (
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {description}
            </p>
          )}
        </div>
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

// Evervault Card
interface EvervaultCardProps {
  text: string;
}

export const EvervaultCard = ({ text }: EvervaultCardProps) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-72 h-72">
        <EvervaultCard text={text} />
      </div>
    </div>
  );
}; 