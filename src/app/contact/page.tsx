import type { Metadata } from "next";
import ContactPageClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us - Hey Circle | Get in Touch with Our Team",
  description: "Reach out to our team for any questions, feedback, or support. We're here to help you with your brand-creator partnerships.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}