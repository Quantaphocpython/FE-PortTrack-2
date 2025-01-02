import { CallToAction } from "@/components/homepage/call-to-action";
import { CTACards } from "@/components/homepage/cta-cards";
import { Expertise } from "@/components/homepage/expertise";
import { Features } from "@/components/homepage/features";
import { HeroSection } from "@/components/homepage/hero-section";
import { ParallaxSection } from "@/components/homepage/parallax-section";
import { Partners } from "@/components/homepage/partners";
import { Statistics } from "@/components/homepage/statistics";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CTACards />
      <Expertise />
      <Features />
      <Partners />
      <ParallaxSection />
      <Statistics />
      <CallToAction />
    </>
  );
}
