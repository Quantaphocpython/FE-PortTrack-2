'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export function PortSearch() {
  const [portCode, setPortCode] = useState('');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Port</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="portCode">Port Code</Label>
            <div className="flex gap-2">
              <Input
                id="portCode"
                value={portCode}
                onChange={(e) => setPortCode(e.target.value)}
                placeholder="Enter port code"
              />
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
