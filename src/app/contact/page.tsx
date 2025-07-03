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
import { FooterSection } from "@/component/footer-section";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactPage() {
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
          <section className="w-full flex flex-col items-center justify-center min-h-[60vh] py-16 md:py-24 px-4 md:px-16 gap-12 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:from-transparent dark:via-purple-950/20 dark:to-transparent">
            <div className="flex-1 flex flex-col items-center justify-center max-w-4xl gap-8 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9146FF]/10 border border-[#9146FF]/20 text-[#9146FF] text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#9146FF] animate-pulse"></span>
                Get in Touch
              </div>
              
              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Contact <span className="text-[#9146FF]">Us</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#9146FF] to-purple-600 mx-auto rounded-full"></div>
              </div>
              
              {/* Subtitle */}
              <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 max-w-3xl leading-relaxed">
                Ready to revolutionize your brand-creator partnerships? 
                <span className="text-[#9146FF] font-semibold"> Let's connect</span> and build something amazing together.
              </h2>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="py-20 px-4 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  We'd love to hear from you
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {/* Email */}
                <div className="bg-gradient-to-br from-white via-purple-50/50 to-blue-50/30 dark:from-neutral-900 dark:via-purple-950/20 dark:to-blue-950/10 rounded-3xl p-8 shadow-xl border border-[#9146FF]/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9146FF]/5 via-transparent to-purple-600/5 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#9146FF]/20 to-transparent rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <FaEnvelope className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Drop us a line anytime
                    </p>
                    <a 
                      href="mailto:team.heycircle@gmail.com"
                      className="text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors duration-300 break-all text-lg"
                    >
                      team.heycircle@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-gradient-to-br from-white via-pink-50/50 to-red-50/30 dark:from-neutral-900 dark:via-pink-950/20 dark:to-red-950/10 rounded-3xl p-8 shadow-xl border border-pink-500/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-red-600/5 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <FaPhone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Call us directly
                    </p>
                    <a 
                      href="tel:+919327047291"
                      className="text-pink-600 dark:text-pink-400 font-semibold hover:text-pink-700 dark:hover:text-pink-300 transition-colors duration-300 text-lg"
                    >
                      +91 9327047291
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30 dark:from-neutral-900 dark:via-blue-950/20 dark:to-indigo-950/10 rounded-3xl p-8 shadow-xl border border-blue-500/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-600/5 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <FaMapMarkerAlt className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Address</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Visit our office
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                      Revealing Soon
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-2xl p-8 border border-[#9146FF]/20">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <FaClock className="w-6 h-6 text-[#9146FF]" />
                    <h3 className="text-2xl font-bold text-black dark:text-white">Response Time</h3>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    We typically respond to all inquiries within <span className="text-[#9146FF] font-semibold">24 hours</span>. 
                    For urgent matters, feel free to call us directly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-950 dark:to-black">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the waitlist and be among the first to experience the future of brand-creator partnerships.
              </p>
              <div className="flex justify-center items-center">
                <ShimmerButton 
                  onClick={() => window.location.href = '/#waitlist'}
                  className="text-lg px-8 py-4"
                >
                  Join Waitlist
                </ShimmerButton>
              </div>
            </div>
          </section>
        </div>
      </div>
      <FooterSection />
    </div>
  );
} 