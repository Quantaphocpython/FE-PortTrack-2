"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Anchor } from "lucide-react";
import { useState } from "react";

export function PortManagement() {
  const [portCode, setPortCode] = useState("");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Anchor className="h-6 w-6" />
          Port Management
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="Enter port code"
              value={portCode}
              onChange={(e) => setPortCode(e.target.value)}
            />
            <Button className="w-full">Search Port</Button>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Port Details</h3>
            <p className="text-sm text-muted-foreground">
              No port information available
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}