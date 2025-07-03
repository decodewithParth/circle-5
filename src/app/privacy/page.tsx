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

export default function PrivacyPolicyPage() {
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
                Legal Information
              </div>
              
              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Privacy <span className="text-[#9146FF]">Policy</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#9146FF] to-purple-600 mx-auto rounded-full"></div>
              </div>
              
              {/* Subtitle */}
              <h2 className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200 max-w-3xl leading-relaxed">
                Last updated: July 3, 2025
              </h2>
            </div>
          </section>

          {/* Privacy Policy Content */}
          <section className="py-16 px-4 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                
                {/* Introduction */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Introduction</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    At Circle ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform that connects brands and creators.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    By using Circle, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our platform.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Information We Collect</h2>
                  
                  <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Personal Information</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We may collect the following personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Name, email address, and phone number</li>
                    <li>Profile information, including bio, social media links, and portfolio</li>
                    <li>Payment and billing information</li>
                    <li>Communication preferences and settings</li>
                    <li>Profile pictures and media content</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Usage Information</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We automatically collect certain information about your use of our platform:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Log data (IP address, browser type, pages visited)</li>
                    <li>Device information (device type, operating system)</li>
                    <li>Usage patterns and interactions with the platform</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                {/* How We Use Your Information */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">How We Use Your Information</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We use the collected information for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>To provide and maintain our platform services</li>
                    <li>To facilitate connections between brands and creators</li>
                    <li>To process payments and manage financial transactions</li>
                    <li>To communicate with you about your account and services</li>
                    <li>To improve our platform and develop new features</li>
                    <li>To ensure platform security and prevent fraud</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </div>

                {/* Information Sharing */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Information Sharing and Disclosure</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li><strong>With other users:</strong> Your profile information may be visible to other users on the platform</li>
                    <li><strong>Service providers:</strong> We may share information with trusted third-party service providers</li>
                    <li><strong>Legal requirements:</strong> We may disclose information if required by law or to protect our rights</li>
                    <li><strong>Business transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                  </ul>
                </div>

                {/* Data Security */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Data Security</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                {/* Your Rights */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Your Rights and Choices</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                    <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
                  </ul>
                </div>

                {/* Cookies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our platform. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                {/* Third-Party Links */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Third-Party Links</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Children's Privacy</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Our platform is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                  </p>
                </div>

                {/* International Transfers */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">International Data Transfers</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                  </p>
                </div>

                {/* Changes to Policy */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Changes to This Privacy Policy</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Contact Us</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us using the information on Contact Us page.
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