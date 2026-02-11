"use client";

import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ImpactHighlights from "@/components/ImpactHighlights";
import VisionBanner from "@/components/VisionBanner";
import CoreValues from "@/components/CoreValues";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Intro />
      <CoreValues />
      <ImpactHighlights />
      <Stats />
      <VisionBanner />
    </div>
  );
}
