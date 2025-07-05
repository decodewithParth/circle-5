import type { Metadata } from "next";
import TermsOfServicePageClient from "./terms-client";

export const metadata: Metadata = {
  title: "Terms of Service - Hey Circle | Legal Agreement",
  description: "Read our terms of service to understand how we use your data and how you can use our platform. We value your privacy and ensure you understand how we use your data to improve your experience.",
};

export default function TermsOfServicePage() {
  return <TermsOfServicePageClient />;
}