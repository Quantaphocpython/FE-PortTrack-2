"use client";

import { Anchor, Ship, Navigation } from "lucide-react";
import { ShipSearch } from "../journey-recording/_components/ship-search";
import { JourneyRecordingForm } from "../journey-recording/_components/journey-recording-form";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { PageHeader } from "@/components/page-header";
import { PremiumStatsCard } from "@/components/ui/premium-stats-card";
import PageWrapper from "@/components/wrapper/page-wrapper";

export default function JourneyRecordingPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <main className="container mx-auto px-4 py-8">
          <PageHeader
            title="Journey Recording"
            description="Record ship journey information when ships arrive at port"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <PremiumStatsCard
              title="Active Ships"
              value="24"
              icon={<Ship className="w-6 h-6 text-primary" />}
              trend={{ value: 12, label: "vs last month" }}
            />
            <PremiumStatsCard
              title="Active Journeys"
              value="8"
              icon={<Navigation className="w-6 h-6 text-primary" />}
              trend={{ value: -5, label: "vs last month" }}
            />
            <PremiumStatsCard
              title="Port Visits"
              value="156"
              icon={<Anchor className="w-6 h-6 text-primary" />}
              trend={{ value: 23, label: "vs last month" }}
            />
          </div>

          <div className="grid gap-6 mt-8">
            <ShipSearch />
            <JourneyRecordingForm />
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}
