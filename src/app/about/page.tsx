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
import { EvervaultCard } from "@/component/aceternity/evervault-card-1";
import { EvervaultCard as EvervaultCardSimple } from "@/component/aceternity/evervault-card";
import { Timeline } from "@/component/aceternity/timeline";
import { useState } from "react";
import Image from "next/image";
import { FooterSection } from "@/component/footer-section";
import Link from "next/link";
import { CardDemo } from "@/component/aceternity/cards";

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  const timelineData = [
    {
      title: "12 Sep 2024",
      content: (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong className="text-[#9146FF] font-bold">Parth Chauhan</strong> joined <strong className="text-[#9146FF] font-bold">Digital Devas</strong> as Co-founder, 
            taking on multiple roles and responsibilities to drive the agency's growth and success.
          </p>
          <div className="bg-gradient-to-r from-[#9146FF]/10 to-purple-600/10 p-4 rounded-lg border border-[#9146FF]/20">
            <p className="text-sm text-[#9146FF] font-medium">
              💡 Key Insight: Parth's diverse expertise and leadership would become the foundation for building meaningful brand-creator partnerships
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "27 Feb 2025",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Down the line of 6 months, we worked with many companies under NDA (Non-Disclosure Agreement) and gave them new identities. 
            While tracking their progress, we identified some critical issues that were affecting the brand-creator ecosystem.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EvervaultCardSimple
              text="01"
              className="h-32"
              showIcon={false}
            >
              <h4 className="text-lg font-bold text-[#9146FF]">Connectivity of Creators</h4>
            </EvervaultCardSimple>
            
            <EvervaultCardSimple
              text="02"
              className="h-32"
              showIcon={false}
            >
              <h4 className="text-lg font-bold text-[#9146FF]">Transparency of Process</h4>
            </EvervaultCardSimple>
            
            <EvervaultCardSimple
              text="03"
              className="h-32"
              showIcon={false}
            >
              <h4 className="text-lg font-bold text-[#9146FF]">Management of Relations</h4>
            </EvervaultCardSimple>
          </div>
          
          <div className="bg-gradient-to-r from-[#9146FF]/20 to-purple-600/20 p-6 rounded-lg border border-[#9146FF]/30">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              After discussing these problems with brands and creators, we realized we had identified a significant opportunity 
              to revolutionize the creator economy.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "15 Mar 2025",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            During this timeline, we focused on <strong className="text-[#9146FF] font-bold">ideation</strong>, 
            <strong className="text-[#9146FF] font-bold"> planning</strong>, and started building our team to bring 
            the Circle vision to life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EvervaultCardSimple
              text="💡"
              className="h-32"
              showIcon={true}
            >
              <h4 className="text-lg font-bold text-[#9146FF]">Ideation</h4>
            </EvervaultCardSimple>
            
            <EvervaultCardSimple
              text="📋"
              className="h-32"
              showIcon={true}
            >
              <h4 className="text-lg font-bold text-purple-600">Planning</h4>
            </EvervaultCardSimple>
            
            <EvervaultCardSimple
              text="👥"
              className="h-32"
              showIcon={true}
            >
              <h4 className="text-lg font-bold text-[#9146FF]">Team Building</h4>
            </EvervaultCardSimple>
          </div>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Ideation:</strong> Brainstorming and conceptualizing the perfect platform to solve the identified challenges</li>
            <li><strong>Planning:</strong> Strategic planning, roadmap development, and defining the core features and vision</li>
            <li><strong>Team Building:</strong> Assembling the right team with diverse skills to execute the Circle vision</li>
          </ul>
          
          <div className="bg-gradient-to-r from-[#9146FF]/20 to-purple-600/20 p-6 rounded-lg border border-[#9146FF]/30">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              This phase was crucial in laying the foundation for what would become a revolutionary platform 
              in the creator economy.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Current",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We are working on every single line of code to satisfy your needs, leveraging cutting-edge <strong className="text-[#9146FF] font-bold">AI technology</strong>.<br />
            The platform will be shared with you soon!
          </p>
          <div className="flex justify-center">
            <Link href="/#waitlist" passHref legacyBehavior>
              <a>
                <ShimmerButton className="px-8 py-3 text-lg rounded-full">
                  Join the Waitlist
                </ShimmerButton>
              </a>
            </Link>
          </div>
          <div className="bg-gradient-to-r from-[#9146FF]/20 to-purple-600/20 p-6 rounded-lg border border-[#9146FF]/30">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Your feedback and interest will help us shape the future of Circle. Stay tuned for updates!
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Launch",
      content: (
        <div className="relative flex flex-col items-center justify-center py-12 px-4 md:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-[#9146FF]/30 via-purple-400/10 to-blue-400/10 rounded-3xl blur-2xl opacity-60 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <span className="text-6xl md:text-7xl lg:text-8xl animate-bounce">🚀</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#9146FF] drop-shadow-lg mb-2">Launch</h2>
            <p className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Waiting to handover this amazing product
            </p>
            <div
              className="mt-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] via-purple-500 to-blue-400 drop-shadow-lg animate-pulse select-none"
            >
              ✨ Coming Soon ✨
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] pt-0 p-0 sm:pt-0 sm:p-0">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <ShimmerButton onClick={() => window.location.href = '/#waitlist'} className="text-sm">
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

          {/* Story Section - Commented out original story section */}
          {/* 
          <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-neutral-950">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9146FF]/10 border border-[#9146FF]/20 text-[#9146FF] text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#9146FF]"></span>
                  The Beginning
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                  Our Story
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                  Born from real-world challenges
                </p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-white via-purple-50/30 to-blue-50/20 dark:from-neutral-900 dark:via-purple-950/20 dark:to-blue-950/10 rounded-3xl p-10 md:p-16 shadow-xl border border-[#9146FF]/30 backdrop-blur-sm mb-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9146FF]/10 via-transparent to-purple-600/5 opacity-60"></div>
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#9146FF]/20 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
                  <div className="relative z-10 text-center space-y-8">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#9146FF]/15 to-purple-600/15 border border-[#9146FF]/30 text-[#9146FF] text-sm font-semibold shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#9146FF] animate-pulse"></span>
                      Our Journey Begins
                      <span className="w-2 h-2 rounded-full bg-[#9146FF] animate-pulse"></span>
                    </div>
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-800 dark:text-gray-200 max-w-4xl mx-auto font-medium">
                      The idea for Circle was born while we were running our marketing agency, 
                      <strong className="text-[#9146FF] font-bold"> Digital Devas</strong>. During our work with brands and creators, 
                      we consistently faced two major challenges that inspired our mission.
                    </p>
                    <div className="flex justify-center items-center gap-6 mt-8">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#9146FF]/50 to-[#9146FF]"></div>
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#9146FF] to-purple-600 shadow-lg"></div>
                      <div className="w-12 h-px bg-gradient-to-l from-transparent via-purple-600/50 to-purple-600"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                  <EvervaultCard
                    text="01"
                    title="Genuine Connections"
                    description="Finding authentic partnerships between brands and creators that go beyond superficial collaborations and create lasting value for both parties. We discovered that most platforms focus on quantity over quality, leading to partnerships that don't deliver real results. Circle was built to prioritize meaningful connections that drive mutual growth and success."
                    size="md"
                    className="mx-auto"
                  />
                  
                  <EvervaultCard
                    text="02"
                    title="Transparency"
                    description="Ensuring clear communication, honest collaboration, and complete transparency in all aspects of brand-creator partnerships. The lack of transparency in the creator economy was a major pain point we identified. Circle provides complete visibility into partnership metrics, communication channels, and performance tracking to build trust between all parties involved."
                    size="md"
                    className="mx-auto"
                  />
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                    The Ultimate Solution
                  </h3>
                </div>
                <div className="flex justify-center mb-12">
                  <EvervaultCardSimple
                    text="💡"
                    className="w-full max-w-md h-auto"
                    showIcon={false}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
                      Circle
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      These challenges inspired us to create a platform that would revolutionize 
                      how brands and creators connect, collaborate, and grow together. 
                      <strong className="text-[#9146FF] font-semibold">Circle</strong> was born from the belief that 
                      authentic partnerships drive the best results.
                    </p>
                  </EvervaultCardSimple>
                </div>
              </div>
            </div>
          </section>
          */}

          {/* Timeline Story Section */}
          <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-neutral-950">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9146FF]/10 border border-[#9146FF]/20 text-[#9146FF] text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#9146FF]"></span>
                  Our Journey
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                  How Circle Began
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                  A timeline of our story from challenges to solution
                </p>
              </div>
              
              <Timeline data={timelineData.slice().reverse()} />
            </div>
          </section>

          {/* Founders Section */}
          <section className="py-24 px-4 bg-gradient-to-b from-gray-100 via-white to-gray-50 dark:from-neutral-950 dark:via-black dark:to-neutral-950">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9146FF]/10 border border-[#9146FF]/20 text-[#9146FF] text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#9146FF]"></span>
                  Meet the Team
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                  Meet Our Founders
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                  The visionaries behind Circle
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Founder Card */}
                <div className="flex justify-center">
                  <div className="relative max-w-xs w-full h-80 rounded-2xl shadow-2xl overflow-hidden border border-[#9146FF]/30 p-3 bg-white dark:bg-neutral-900">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src="/Parth Profile Picture.jpg"
                        alt="Parth Chauhan"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 py-5 flex flex-col items-start">
                        <h3 className="text-xl font-extrabold text-white mb-1 drop-shadow">Parth Chauhan</h3>
                        <span className="text-[#9146FF] bg-white/80 px-3 py-1 rounded-full text-xs font-bold shadow">Founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Co-founder Card */}
                <div className="flex justify-center">
                  <div className="relative max-w-xs w-full h-80 rounded-2xl shadow-2xl overflow-hidden border border-purple-600/30 p-3 bg-white dark:bg-neutral-900">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src="/Jay Profile Picture.jpg"
                        alt="Jay Bhatt"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 py-5 flex flex-col items-start">
                        <h3 className="text-xl font-extrabold text-white mb-1 drop-shadow">Jay Bhatt</h3>
                        <span className="text-purple-600 bg-white/80 px-3 py-1 rounded-full text-xs font-bold shadow">Co-founder & COO</span>
                      </div>
                    </div>
                  </div>
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
      <FooterSection />
    </div>
  );
} 