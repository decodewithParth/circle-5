"use client";
import { EvervaultCard } from "./aceternity/evervault-card-1";

export const ForCreatorsSection = () => {
  const creatorCards = [
    {
      text: "01",
      title: "Strangers-to-Collabs",
      description: "Start connecting with other creators, share ideas, and collab in works and hangouts."
    },
    {
      text: "02",
      title: "Professional Opportunities",
      description: "Explore the professional work opportunities of one of the best brands on Circle."
    },
    {
      text: "03",
      title: "Community Feed",
      description: "A Twitter-like community feed to share or request thoughts, ideas or experiences."
    },
    {
      text: "04",
      title: "Jamming",
      description: "Join and enjoy the crafted - Creators Jams , Events , Workshops and more..."
    },
    {
      text: "05",
      title: "Absolute Perks",
      description: "Become first one to get access brands & business discounts and offers"
    },
    {
      text: "06",
      title: "Support Assist 24 x 7",
      description: "Got something on your mind or feeling stuck? Our team is just a call away!"
    }
  ];

  return (
    <section id="for-creators" className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            For Creators
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
            Get Recognized. Get Booked. Get Paid.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-12 max-w-6xl mx-auto">
          {creatorCards.map((card, index) => (
            <EvervaultCard
              key={index}
              text={card.text}
              title={card.title}
              description={card.description}
              size="max-w-xs h-64"
              className="w-full max-w-xs mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 