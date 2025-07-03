"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  FaLinkedin, 
  FaInstagram, 
  FaEnvelope,
  FaHeart 
} from "react-icons/fa";


export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const XIcon = (props: React.HTMLAttributes<SVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  );

  const handleProductLinkClick = (href: string) => {
    // Check if we're on the about page
    if (window.location.pathname === '/about') {
      // Navigate to home page with the section hash
      window.location.href = `/${href}`;
    } else {
      // If already on home page, just scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "For Creators", href: "#for-creators" },
      { name: "For Brands", href: "#for-brands" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "#contact" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
    ],
  };

  const socialLinks = [
    { name: "X", icon: XIcon, href: "https://x.com/heycircleapp" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/company/107613168" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/heycircle.app" },
    { name: "Email", icon: FaEnvelope, href: "mailto:team.heycircle@gmail.com" },
  ];

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold mb-4">
                Circle
                <span className="text-[#9146FF]">.</span>
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Connecting brands and creators in the most innovative way. 
                Join the revolution of authentic partnerships and meaningful collaborations.
              </p>
                            <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-[#9146FF] hover:bg-white/20 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleProductLinkClick(link.href)}
                    className="text-gray-400 hover:text-[#9146FF] transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#9146FF] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#9146FF] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Circle. All rights reserved.
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <FaHeart className="mx-2 text-red-500" />
            <span>for creators and brands</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
