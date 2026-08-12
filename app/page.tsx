// Root page — Server Component (no "use client").
// All landing page content flows from landing-page.json through typed props
// into each section component. No content is hardcoded in components.

import landingPageJson from "@/src/data/landing-page.json";
import type { LandingPageData } from "@/src/types/landing-page";

import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

import HeroSection from "@/src/components/sections/HeroSection";
import ClientShowcase from "@/src/components/sections/ClientShowcase";
import CommunitySection from "@/src/components/sections/CommunitySection";
import FeatureSection from "@/src/components/sections/FeatureSection";
import StatsSection from "@/src/components/sections/StatsSection";
import TestimonialSection from "@/src/components/sections/TestimonialSection";
import BlogSection from "@/src/components/sections/BlogSection";
import CTASection from "@/src/components/sections/CTASection";

// Cast the imported JSON to our typed interface.
// resolveJsonModule: true is set in tsconfig.json.
const landingPage = landingPageJson as LandingPageData;

/**
 * Home — landing page.
 *
 * Content flow:
 *   src/data/landing-page.json
 *     → landingPage (LandingPageData)
 *       → section components via typed props
 *
 * All section components are Server Components.
 * No page-specific text exists outside of landing-page.json.
 */
export default function Home() {
  return (
    <>
      <Header data={landingPage.nav} />

      <main id="main-content">
        <HeroSection data={landingPage.hero} />
        <ClientShowcase data={landingPage.clients} />
        <CommunitySection data={landingPage.community} />
        <FeatureSection data={landingPage.featureSections[0]} />
        <StatsSection data={landingPage.stats} />
        <FeatureSection data={landingPage.featureSections[1]} />
        <TestimonialSection data={landingPage.testimonial} />
        <BlogSection data={landingPage.blog} />
        <CTASection data={landingPage.cta} />
      </main>

      <Footer data={landingPage.footer} />
    </>
  );
}
