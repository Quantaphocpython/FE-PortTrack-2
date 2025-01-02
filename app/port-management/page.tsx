"use client";


import { PortSearch } from "./components/port-search";
import { PortDetails } from "./components/port-details";
import { ShipRegistry } from "./components/ship-registry";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { PageHeader } from "@/components/page-header";


export default function PortManagementPage() {
  return (
    <div className="min-h-screen relative">
    <AnimatedBackground />
    <main className="container mx-auto px-4 py-8">
      <PageHeader
        title="Port Management"
        description="Manage port information and record ship arrivals"
      />
      <div className="grid gap-6 mt-8">
        <PortSearch />
        <PortDetails />
        <ShipRegistry />
      </div>
      </main>
    </div>
  );
}