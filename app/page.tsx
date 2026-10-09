import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { EngineeringDesign } from "@/components/sections/home/EngineeringDesign";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { IndustriesSection } from "@/components/sections/home/IndustriesSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { TechMarquee } from "@/components/sections/home/TechMarquee";
import { WhatWeBuild } from "@/components/sections/home/WhatWeBuild";
import { WhyCodeNCast } from "@/components/sections/home/WhyCodeNCast";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getHomeJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  ...createPageMetadata({
    description:
      "CodeNCast builds digital products, software, websites, e-commerce experiences and growth systems for modern businesses.",
    path: "/",
  }),
  title: "CodeNCast | Digital Products, Software & Growth",
};

export default function HomePage() {
  const jsonLd = getHomeJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content" className="flex-1 bg-brand-bg">
        <HeroSection />
        <TechMarquee />
        <WhatWeBuild />
        <EngineeringDesign />
        <ProcessSection />
        <IndustriesSection />
        <WhyCodeNCast />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
