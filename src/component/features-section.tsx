import { EvervaultCard } from "./aceternity/evervault-card";
import {
  FaShieldAlt,
  FaMapMarkerAlt,
  FaComments,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { RetroGrid } from "./magicui/retro-grid";
import { TextAnimate } from "./magicui/text-animate";

const features = [
  {
    heading: "Vault Verification",
    description: "Work with 0 risk vetted creators and influencers.",
    // icon: <FaShieldAlt className="text-4xl text-green-500 animate-pulse" />,
    color: "from-green-400 via-blue-500 to-purple-600",
  },
  {
    heading: "NearBy Discovery",
    description: "Find Creators like Finding Restaurants near by you.",
    // icon: <FaMapMarkerAlt className="text-4xl text-pink-500 animate-bounce" />,
    color: "from-pink-400 via-red-500 to-yellow-500",
  },
  {
    heading: "Quick Response",
    description: "Chat with your liked creators and get faster replies.",
    // icon: <FaComments className="text-4xl text-blue-500 animate-pulse" />,
    color: "from-blue-400 via-cyan-500 to-indigo-500",
  },
  {
    heading: "Transparent Payment",
    description: "No hidden fees and ambiguous payments.",
    // icon: <FaMoneyCheckAlt className="text-4xl text-yellow-500 animate-bounce" />,
    color: "from-yellow-400 via-orange-500 to-pink-500",
  },
];

export function FeaturesSection() {
  return (
    <div className="features-section-wrapper w-full flex flex-col justify-center items-center py-12 relative overflow-hidden bg-gray-100 backdrop-blur-md">
      {/* Top gradient for smooth merging */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white/80 to-transparent z-10" />
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 z-20">
        Features
      </h2>
      {/* <RetroGrid className="z-0" /> */}
      <section className="flex flex-row items-center justify-center gap-8 w-full z-20">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center w-64"
          >
            {/* icon removed */}
            <EvervaultCard
              text={feature.heading}
              className={`mb-2 bg-gradient-to-br ${feature.color}`}
            />
            <div className="text-center text-gray-700 dark:text-gray-200 mt-2 text-base font-medium">
              <TextAnimate
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.5 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
                  exit: { opacity: 0, y: 30, scale: 0.5, transition: { duration: 0.8 } },
                }}
                by="character"
              >
                {feature.description}
              </TextAnimate>
            </div>
          </div>
        ))}
      </section>
      {/* Bottom gradient for smooth merging */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white/80 to-transparent z-10" />
    </div>
  );
}
