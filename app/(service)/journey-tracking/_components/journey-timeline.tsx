'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Journey, Port } from '@/types';

interface TimelineProps {
  journey?: Journey;
  ports?: Port[];
}

export function JourneyTimeline({ journey, ports }: TimelineProps) {
  if (!journey || !ports) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Journey Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {journey.portIds.map((portId, index) => {
            const port = ports.find((p) => p.id === portId);
            const arrivalTime = new Date(Number(journey.arrivalTimes[index]));

            return (
              <div key={portId.toString()} className="flex items-start gap-4">
                <div className="min-w-[120px] text-sm text-muted-foreground">
                  {arrivalTime.toLocaleDateString()}
                </div>
                <div>
                  <div className="font-medium">{port?.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {port?.location}
                  </div>
                  {journey.notes[index] && (
                    <div className="mt-1 text-sm">{journey.notes[index]}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
