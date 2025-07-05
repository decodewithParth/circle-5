import type { Metadata } from "next";
import PrivacyPolicyPageClient from "./privacy-client";

export const metadata: Metadata = {
  title: "Privacy Policy - Hey Circle | Your Privacy Matters",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information. We value your privacy and ensure you understand how we use your data to improve your experience.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}