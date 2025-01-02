"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";
import { useState } from "react";

export function JourneyTracker() {
  const [journeyId, setJourneyId] = useState("");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Navigation className="h-6 w-6" />
          Journey Tracking
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="Enter journey ID"
              value={journeyId}
              onChange={(e) => setJourneyId(e.target.value)}
            />
            <Button className="w-full">Track Journey</Button>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Journey Details</h3>
            <p className="text-sm text-muted-foreground">
              No journey information available
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}