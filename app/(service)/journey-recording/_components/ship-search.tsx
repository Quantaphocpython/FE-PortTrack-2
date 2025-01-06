'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { mockShips } from '@/lib/mock/data';
import { Ship } from '@/types';
import { motion } from 'framer-motion';
import {
  BarChart2,
  Clock,
  Code,
  Compass,
  Gauge,
  MapPin,
  Ruler,
  ShipWheel,
  User,
  Waves,
} from 'lucide-react';
import { useState } from 'react';

export function ShipSearch() {
  const [shipCode, setShipCode] = useState('');
  const [ship, setShip] = useState<Ship | null>(mockShips[0]);

  const handleSearch = async () => {
    const found = mockShips.find((s) => s.shipCode === shipCode);
    setShip(found || null);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 p-6">
        <div className="flex items-center space-x-4">
          <ShipWheel className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Vessel Detailed Lookup
          </h2>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <Label
            htmlFor="shipCode"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
          >
            <Compass className="w-5 h-5 text-blue-500" />
            <span>Enter Ship Code</span>
          </Label>
          <div className="flex space-x-2">
            <Input
              id="shipCode"
              value={shipCode}
              onChange={(e) => setShipCode(e.target.value)}
              placeholder="Enter ship code (e.g. OE001)"
              className="flex-grow bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm"
            />
            <Button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg transition-all"
            >
              Search
            </Button>
          </div>
        </motion.div>

        {ship && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800/30 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 space-y-6"
          >
            {/* Header Section */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Waves className="w-10 h-10 text-blue-500 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {ship.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {ship.shipType}
                  </p>
                </div>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  ship.isActive
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
                }`}
              >
                {ship.isActive ? 'Active' : 'Inactive'}
              </div>
            </div>

            {/* Detailed Information Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Ship Code</p>
                    <p className="font-medium">{ship.shipCode}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Registry Country</p>
                    <p className="font-medium">{ship.registryCountry}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Owner</p>
                    <p className="font-medium text-sm truncate">{ship.owner}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Ruler className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Dimensions</p>
                    <p className="font-medium">
                      {ship.length.toString()}m x {ship.width.toString()}m
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart2 className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Capacity</p>
                    <p className="font-medium">
                      {ship.capacity.toString()} TEU
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Gauge className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Engine Type</p>
                    <p className="font-medium">{ship.engineType}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="flex items-center space-x-3 border-t pt-4 border-gray-200 dark:border-gray-700">
              <Clock className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Registered At</p>
                <p className="font-medium">
                  {new Date(Number(ship.registeredAt)).toLocaleDateString()}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
