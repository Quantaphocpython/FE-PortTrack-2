import { Button } from "@/components/ui/button";
import { Ship, Anchor, Building2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16">

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    <Link href="/journey-recording" className="block">
                        <Button variant="outline" className="w-full h-40 flex flex-col gap-4">
                            <Ship className="h-12 w-12" />
                            <span className="text-lg font-semibold">Journey Recording</span>
                        </Button>
                    </Link>
                    <Link href="/journey-tracking" className="block">
                        <Button variant="outline" className="w-full h-40 flex flex-col gap-4">
                            <Anchor className="h-12 w-12" />
                            <span className="text-lg font-semibold">Journey Tracking</span>
                        </Button>
                    </Link>
                    <Link href="/port-management" className="block">
                        <Button variant="outline" className="w-full h-40 flex flex-col gap-4">
                            <Building2 className="h-12 w-12" />
                            <span className="text-lg font-semibold">Port Management</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}