import type { Metadata } from "next";
import AboutPageClient from "./about-client";

export const metadata: Metadata = {
  title: "About Us - Hey Circle | Our Story & Mission",
  description: "Learn about Circle's journey from Digital Devas to revolutionizing brand-creator partnerships. Discover our mission to connect creators with brands through transparency and AI.",
};

export default function AboutPage() {
  return <AboutPageClient />;
} 
