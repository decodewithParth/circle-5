import type { Metadata } from "next";
import HomePageClient from "./home-client";

export const metadata: Metadata = {
  title: "Hey Circle | Revolutionizing Brand-Creator Partnerships",
  description: "Join the future of brand-creator partnerships. Hey Circle connects creators with brands through AI-powered matching and transparent collaboration.",
};

export default function Home() {
  return <HomePageClient />;
}