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

export default function CookiePolicyPage() {
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
          <section className="w-full flex flex-col items-center justify-center min-h-[40vh] py-16 md:py-20 px-4 md:px-16 gap-8 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:from-transparent dark:via-purple-950/20 dark:to-transparent">
            <div className="flex-1 flex flex-col items-center justify-center max-w-4xl gap-6 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9146FF]/10 border border-[#9146FF]/20 text-[#9146FF] text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#9146FF] animate-pulse"></span>
                Cookie Information
              </div>
              
              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Cookie <span className="text-[#9146FF]">Policy</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#9146FF] to-purple-600 mx-auto rounded-full"></div>
              </div>
              
              {/* Subtitle */}
              <h2 className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200 max-w-3xl leading-relaxed">
                Last updated: July 3, 2025
              </h2>
            </div>
          </section>

          {/* Cookie Policy Content */}
          <section className="py-16 px-4 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                
                {/* Introduction */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">What Are Cookies?</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Think of cookies as tiny helpers that make your experience on Circle better! They're small text files that websites (including ours) store on your device to remember your preferences and make things work smoothly.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Just like how you might save your favorite settings on your phone, cookies help us remember things like your login status, language preferences, and what you've been looking at so we can give you a more personalized experience.
                  </p>
                </div>

                {/* How We Use Cookies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">How We Use Cookies</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We use cookies to make Circle work better for you. Here's what they help us do:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li><strong>Keep you logged in:</strong> So you don't have to enter your password every time</li>
                    <li><strong>Remember your preferences:</strong> Like your language choice or theme settings</li>
                    <li><strong>Make the site faster:</strong> By storing information locally on your device</li>
                    <li><strong>Improve your experience:</strong> By showing you relevant content and features</li>
                    <li><strong>Keep things secure:</strong> By helping us detect and prevent fraud</li>
                    <li><strong>Understand how you use Circle:</strong> So we can make it better for everyone</li>
                  </ul>
                </div>

                {/* Types of Cookies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Types of Cookies We Use</h2>
                  
                  <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Essential Cookies</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    These are like the foundation of a house - they're absolutely necessary for Circle to work properly. They help with basic functions like:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Keeping you logged in securely</li>
                    <li>Remembering your shopping cart or saved items</li>
                    <li>Making sure the website loads properly</li>
                    <li>Protecting against security threats</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Performance Cookies</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    These cookies help us understand how you use Circle so we can make it better. They collect information like:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Which pages you visit most often</li>
                    <li>How long you spend on different sections</li>
                    <li>If you encounter any errors or issues</li>
                    <li>What features you use the most</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Functionality Cookies</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    These cookies remember your choices and preferences to give you a more personalized experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Your language and region settings</li>
                    <li>Your theme preferences (light or dark mode)</li>
                    <li>Your notification preferences</li>
                    <li>Your search history and filters</li>
                  </ul>
                </div>

                {/* Third-Party Cookies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Third-Party Cookies</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Sometimes we work with trusted partners who also use cookies on our site. These help us provide you with better services like:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li><strong>Analytics services:</strong> To understand how people use Circle (like Google Analytics)</li>
                    <li><strong>Payment processors:</strong> To securely handle your payments</li>
                    <li><strong>Social media:</strong> To let you share content easily</li>
                    <li><strong>Advertising partners:</strong> To show you relevant ads (only with your permission)</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We only work with partners who respect your privacy and follow strict data protection standards.
                  </p>
                </div>

                {/* Managing Cookies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Managing Your Cookies</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    You're in control! You can manage cookies in several ways:
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Browser Settings</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Most browsers let you control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Block all cookies (though this might make some websites not work properly)</li>
                    <li>Block only third-party cookies</li>
                    <li>Delete cookies when you close your browser</li>
                    <li>See what cookies are stored on your device</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Our Cookie Settings</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We're working on adding cookie preference settings directly to Circle so you can easily choose what types of cookies you want to allow.
                  </p>
                </div>

                {/* What Happens If You Disable Cookies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">What Happens If You Disable Cookies?</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    If you choose to disable cookies, here's what might happen:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li><strong>You'll need to log in more often</strong> - We won't be able to remember you</li>
                    <li><strong>Some features might not work</strong> - Like saving your preferences</li>
                    <li><strong>The site might be slower</strong> - We'll need to load everything fresh each time</li>
                    <li><strong>You might see less relevant content</strong> - We won't know what you're interested in</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    But don't worry - the core features of Circle will still work! You'll just have a more basic experience.
                  </p>
                </div>

                {/* Updates to This Policy */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Updates to This Cookie Policy</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    As Circle grows and improves, we might update this cookie policy. When we do, we'll:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Update the "Last updated" date at the top of this page</li>
                    <li>Notify you through our platform or email if there are significant changes</li>
                    <li>Give you time to review the changes before they take effect</li>
                  </ul>
                </div>

                {/* Contact Information */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Questions About Cookies?</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We want to be transparent about how we use cookies and make sure you understand your choices. If you have any questions about our cookie policy or how we use cookies, please don't hesitate to reach out using the information on our Contact Us page.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We're here to help and make sure you feel comfortable with how we use cookies to improve your experience on Circle!
                  </p>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>
      <FooterSection />
    </div>
  );
} 