import type { Metadata } from "next";
import CookiePolicyPageClient from "./cookie-client";

export const metadata: Metadata = {
  title: "Cookie Policy - Hey Circle | How We Use Cookies",
  description: "Learn how Circle uses cookies to enhance your experience. We value your privacy and ensure you understand how we use cookies to improve your experience.",
};

export default function CookiePolicyPage() {
  return <CookiePolicyPageClient />;
}