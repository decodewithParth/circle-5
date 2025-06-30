"use client";
import { EvervaultCard } from "./aceternity/evervault-card-1";

export const ForBrandsSection = () => {
  const brandCards = [
    {
      text: "01",
      title: "Circle of Creators",
      description: "Get access to the nano to mega creators and influencers of your category"
    },
    {
      text: "02",
      title: "0 Tab Switch",
      description: "No need to open multiple tabs to track the influencers or creators"
    },
    {
      text: "03",
      title: "AI Powered Assistant",
      description: "AI available support for your brands vision curation."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            For Brands
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
            Why Top Brands Choose Us ?
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-12 max-w-6xl mx-auto">
          {brandCards.map((card, index) => (
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