import HeroSection from "@/components/hero/HeroSection";
import React from "react";

export default async function HomePage() {
  return <main className="min-h-[200vh] relative 2xl:container mx-auto px-4 py-6">
    <HeroSection />
  </main>;
}
