"use client";

// import Image from "next/image";
// import { EvervaultCard } from "../component/aceternity/evervault-card";
// import { EvervaultCard as EvervaultCard1 } from "../component/aceternity/evervault-card-1";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  // NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle
} from "../component/aceternity/resizable-navbar";
import { ShimmerButton } from "../component/magicui/shimmer-button";
// import { motion } from "framer-motion";
// import { GoCopilot } from "react-icons/go";
import { HeroSection } from "../component/hero-section";
import { FeaturesSection } from "../component/features-section";
import { ForCreatorsSection } from "../component/for-creators-section";
import { ForBrandsSection } from "../component/for-brands-section";
import WaitlistFormSection from "../component/waitlist-form-section";
import { FooterSection } from "../component/footer-section";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "For Creators", link: "#for-creators" },
    { name: "For Brands", link: "#for-brands" },
    { name: "About Us", link: "/about" },
  ];
  useEffect(() => {
    // Handle scroll to section when page loads with hash
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Small delay to ensure page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, []);
  return (
      <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] pt-0 p-0 sm:pt-0 sm:p-0">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <ShimmerButton>Early Access</ShimmerButton>
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
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-sm"
              >
                Early Access
              </ShimmerButton>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
        <div className="flex-1 w-full">
          <HeroSection />
          <FeaturesSection />
          <ForCreatorsSection />
          <ForBrandsSection />
          <div id="waitlist">
            <WaitlistFormSection />
          </div>
        </div>
        <FooterSection />
      </div>
  );
}
