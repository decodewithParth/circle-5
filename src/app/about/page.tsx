

"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from "@/component/aceternity/resizable-navbar";
import { ShimmerButton } from "@/component/magicui/shimmer-button";
import { useState } from "react";

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] pt-0 p-0 sm:pt-0 sm:p-0">
      {/* Navbar */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <ShimmerButton 
            onClick={() => window.location.href = '/#waitlist'}
            className="text-sm"
          >
            Join Waitlist
          </ShimmerButton>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <NavItems
              items={navItems}
              className="flex-col items-start gap-4"
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
            <ShimmerButton 
              onClick={() => {
                window.location.href = '/#waitlist';
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-sm"
            >
              Join Waitlist
            </ShimmerButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <div className="flex-1 w-full">
        <div className="container mx-auto">
          {/* Hero Section */}
          <section className="w-full flex flex-col items-center justify-center min-h-[80vh] py-16 md:py-32 px-4 md:px-16 gap-12 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:from-transparent dark:via-purple-950/20 dark:to-transparent">
            <div className="flex-1 flex flex-col items-center justify-center max-w-5xl gap-8 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9146FF]/10 border border-[#9146FF]/20 text-[#9146FF] text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#9146FF] animate-pulse"></span>
                Founded in 2025
              </div>
              
              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  About <span className="text-[#9146FF]">Circle</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#9146FF] to-purple-600 mx-auto rounded-full"></div>
              </div>
              
              {/* Subtitle */}
              <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 max-w-4xl leading-relaxed">
                Connecting brands and creators through{" "}
                <span className="text-[#9146FF] font-semibold">transparency</span>,{" "}
                <span className="text-[#9146FF] font-semibold">authenticity</span>, and{" "}
                <span className="text-[#9146FF] font-semibold">meaningful partnerships</span>.
              </h2>
              
              {/* Stats */}
              <div className="flex flex-col sm:flex-row items-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#9146FF]">2</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Founders</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#9146FF]">1</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Mission</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#9146FF]">∞</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Possibilities</div>
                </div>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-20 px-4 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                  Our Story
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                  Born from real-world challenges
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto text-center space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <p>
                  The idea for Circle was born while we were running our marketing agency, 
                  <strong className="text-[#9146FF]"> Digital Devas</strong>. During our work with brands and creators, 
                  we consistently faced two major challenges:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔗</div>
                    <h3 className="text-xl font-semibold mb-2">Genuine Connections</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Finding authentic partnerships between brands and creators
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ensuring clear communication and honest collaboration
                    </p>
                  </div>
                </div>
                <p className="mt-12">
                  These challenges inspired us to create a platform that would revolutionize 
                  how brands and creators connect, collaborate, and grow together.
                </p>
              </div>
            </div>
          </section>

          {/* Founders Section */}
          <section className="py-20 px-4 bg-gray-100 dark:bg-neutral-950">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                  Meet Our Founders
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                  The visionaries behind Circle
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
                {/* Founder */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#9146FF] to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                      <div className="text-3xl">👨‍💼</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">Parth Chauhan</h3>
                  <p className="text-[#9146FF] font-semibold mb-4">Founder & CEO</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Visionary leader with a passion for connecting people and creating meaningful partnerships.
                  </p>
                </div>

                {/* Co-founder */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#9146FF] to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                      <div className="text-3xl">👨‍💻</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">Jay Bhatt</h3>
                  <p className="text-[#9146FF] font-semibold mb-4">Co-founder & CTO</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Technical innovator driving the platform's development and growth strategy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20 px-4 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                To revolutionize the creator economy by building a transparent, authentic, and efficient 
                platform that connects brands with the right creators, fostering meaningful collaborations 
                that drive growth for both parties.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 