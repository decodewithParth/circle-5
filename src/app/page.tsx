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

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)] pt-0 p-0 sm:pt-0 sm:p-0">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={[
              { name: "Home", link: "#" },
              { name: "About", link: "#about" },
              { name: "Contact", link: "#contact" },
            ]}
          />
          <NavbarButton href="#" variant="primary">Sign Up</NavbarButton>
        </NavBody>
      </Navbar>

      {/* Sample Evervault Card */}
      <div className="flex justify-center items-center w-full">
        <div className="w-72 h-72">
          <EvervaultCard text="Watch me hover" />
        </div>
      </div>

      {/* Sample Evervault Card 1 (updated) */}
      <div className="flex justify-center items-center w-full mt-8">
        <div className="w-72 h-72">
          <EvervaultCard1 text="Card 1 Demo" title="Card 1" description="This card tells about the evervault card that are from the....................................................................................................... PArth chauhan and this becomes the issue" />
        </div>
      </div>
    </div>
  );
}
