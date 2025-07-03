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

export default function TermsOfServicePage() {
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
                  Terms of <span className="text-[#9146FF]">Service</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#9146FF] to-purple-600 mx-auto rounded-full"></div>
              </div>
              
              {/* Subtitle */}
              <h2 className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200 max-w-3xl leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </h2>
            </div>
          </section>

          {/* Terms of Service Content */}
          <section className="py-16 px-4 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                
                {/* Introduction */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Introduction</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Welcome to Circle. These Terms of Service ("Terms") govern your use of our platform that connects brands and creators. By accessing or using Circle, you agree to be bound by these Terms and all applicable laws and regulations.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    If you do not agree with any of these terms, you are prohibited from using or accessing this platform. The materials contained in this platform are protected by applicable copyright and trademark law.
                  </p>
                </div>

                {/* Definitions */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Definitions</h2>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li><strong>"Platform"</strong> refers to Circle, our website, and all related services</li>
                    <li><strong>"User"</strong> refers to any individual or entity using our platform</li>
                    <li><strong>"Creator"</strong> refers to content creators, influencers, and individuals offering creative services</li>
                    <li><strong>"Brand"</strong> refers to businesses, companies, and organizations seeking creator partnerships</li>
                    <li><strong>"Content"</strong> refers to any text, images, videos, or other materials shared on the platform</li>
                    <li><strong>"Services"</strong> refers to all features and functionality provided by Circle</li>
                  </ul>
                </div>

                {/* Account Registration */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Account Registration</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    To use certain features of our platform, you must create an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and update your account information to keep it accurate and current</li>
                    <li>Protect your account credentials and not share them with others</li>
                    <li>Accept responsibility for all activities that occur under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                </div>

                {/* Platform Usage */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Platform Usage</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    You may use our platform for lawful purposes only. You agree not to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Use the platform for any illegal or unauthorized purpose</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Upload or share harmful, offensive, or inappropriate content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt the platform's functionality</li>
                    <li>Use automated systems to access the platform without permission</li>
                  </ul>
                </div>

                {/* Creator Responsibilities */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Creator Responsibilities</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    As a creator using our platform, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Provide accurate and truthful information about your services and experience</li>
                    <li>Deliver content and services as agreed upon with brands</li>
                    <li>Meet deadlines and fulfill contractual obligations</li>
                    <li>Maintain professional communication with brands</li>
                    <li>Respect intellectual property rights and copyright laws</li>
                    <li>Comply with all applicable advertising and disclosure regulations</li>
                    <li>Maintain the quality and authenticity of your content</li>
                  </ul>
                </div>

                {/* Brand Responsibilities */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Brand Responsibilities</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    As a brand using our platform, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Provide clear and accurate campaign briefs and requirements</li>
                    <li>Pay creators according to agreed-upon terms and timelines</li>
                    <li>Provide timely feedback and approvals</li>
                    <li>Respect creator creative freedom within agreed parameters</li>
                    <li>Maintain professional communication with creators</li>
                    <li>Comply with all applicable advertising and disclosure regulations</li>
                    <li>Provide necessary materials and information for campaigns</li>
                  </ul>
                </div>

                {/* Payment Terms */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Payment Terms</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Payment terms and conditions:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>All payments are processed through our secure payment system</li>
                    <li>Payment terms are agreed upon between brands and creators</li>
                    <li>Circle may charge platform fees as disclosed in our fee structure</li>
                    <li>Refunds are subject to our refund policy and mutual agreement</li>
                    <li>Tax obligations are the responsibility of individual users</li>
                    <li>Disputes regarding payments should be resolved through our dispute resolution process</li>
                  </ul>
                </div>

                {/* Intellectual Property */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Intellectual Property</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Intellectual property rights and ownership:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Creators retain ownership of their original content unless otherwise agreed</li>
                    <li>Brands may license content according to agreed-upon terms</li>
                    <li>Circle retains rights to platform content and materials</li>
                    <li>Users must respect copyright and trademark laws</li>
                    <li>Unauthorized use of content is prohibited</li>
                    <li>Disputes over intellectual property should be resolved between parties</li>
                  </ul>
                </div>

                {/* Privacy and Data */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Privacy and Data Protection</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                  </p>
                </div>

                {/* Dispute Resolution */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Dispute Resolution</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    In the event of disputes between users:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Parties should attempt to resolve disputes amicably</li>
                    <li>Circle may provide mediation services at our discretion</li>
                    <li>Legal disputes should be resolved through appropriate legal channels</li>
                    <li>Circle is not responsible for resolving disputes between users</li>
                    <li>Users agree to indemnify Circle against claims arising from their use of the platform</li>
                  </ul>
                </div>

                {/* Limitation of Liability */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Limitation of Liability</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Circle's liability is limited to the extent permitted by law. We are not responsible for:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Disputes between users of the platform</li>
                    <li>Quality or delivery of services provided by creators</li>
                    <li>Actions or inactions of third-party service providers</li>
                    <li>Loss of data or content due to technical issues</li>
                    <li>Indirect, incidental, or consequential damages</li>
                  </ul>
                </div>

                {/* Termination */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Termination</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We may terminate or suspend your account at any time for:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                    <li>Violation of these Terms of Service</li>
                    <li>Fraudulent or illegal activities</li>
                    <li>Repeated violations of platform policies</li>
                    <li>Non-payment of fees or charges</li>
                    <li>At our sole discretion for any other reason</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Upon termination, your right to use the platform ceases immediately.
                  </p>
                </div>

                {/* Changes to Terms */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Changes to Terms</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the platform after changes constitutes acceptance of the new Terms.
                  </p>
                </div>

                {/* Governing Law */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Governing Law</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in India.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Contact Information</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us using the information on our Contact Us page.
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