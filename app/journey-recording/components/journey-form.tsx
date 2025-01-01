"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function JourneyForm() {
  const [shipId, setShipId] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shipId">Ship ID</Label>
        <Input
          id="shipId"
          value={shipId}
          onChange={(e) => setShipId(e.target.value)}
          placeholder="Enter ship ID"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter journey notes"
        />
      </div>
      <Button className="w-full">Record Journey</Button>
    </div>
  );
}