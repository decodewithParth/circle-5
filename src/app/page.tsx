import Image from "next/image";
import { EvervaultCard } from "../component/aceternity/evervault-card";
import { EvervaultCard as EvervaultCard1 } from "../component/aceternity/evervault-card-1";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton
} from "../component/aceternity/resizable-navbar";
import { ShimmerButton } from "../component/magicui/shimmer-button";
import GridDotBackground from "../component/aceternity/grid-dot-background";
import { motion } from "framer-motion";
import { GoCopilot } from "react-icons/go";
import { HeroSection } from "../component/hero-section";
import { FeaturesSection } from "../component/features-section";
import { ForCreatorsSection } from "../component/for-creators-section";
import { ForBrandsSection } from "../component/for-brands-section";

export default function Home() {
  return (
    <GridDotBackground>
      <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)] pt-0 p-0 sm:pt-0 sm:p-0">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems
              items={[
                { name: "Home", link: "#" },
                { name: "About", link: "#about" },
                { name: "Contact", link: "#contact" },
                { name: "features", link: "#features" },
                // { name: "supporters", link: "#supporters" },
                // { name: "For Creators", link: "#for-creators" },
                // { name: "For Brands", link: "#for-brands" },
              ]}
            />
            {/* <NavbarButton href="#" variant="primary">Sign Up</NavbarButton> */}
            <ShimmerButton>Sign Up</ShimmerButton>
          </NavBody>
        </Navbar>
        <div className="container mx-auto">
          <HeroSection />
          <FeaturesSection />
          <ForCreatorsSection />
          <ForBrandsSection />
        </div>
      </div>
    </GridDotBackground>
  );
}
