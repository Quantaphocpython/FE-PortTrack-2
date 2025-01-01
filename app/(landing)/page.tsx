import { CallToAction } from "@/components/homepage/call-to-action";
import { CTACards } from "@/components/homepage/cta-cards";
import { Expertise } from "@/components/homepage/expertise";
import { Features } from "@/components/homepage/features";
import { HeroSection } from "@/components/homepage/hero-section";
import { ParallaxSection } from "@/components/homepage/parallax-section";
import { Partners } from "@/components/homepage/partners";
import { Statistics } from "@/components/homepage/statistics";
import PageWrapper from "@/components/wrapper/page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <CTACards />
      <Expertise />
      <Features />
      <Partners />
      <ParallaxSection />
      <Statistics />
      <CallToAction />
    </PageWrapper>
  );
}
