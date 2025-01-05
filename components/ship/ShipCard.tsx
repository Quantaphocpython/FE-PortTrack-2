'use client';

import { Ship } from '@/hooks/useGetShips';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Anchor,
  Ruler,
  Waves,
  ShipWheel,
  BarChart,
  Clock,
  Info,
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { truncateAddress, truncateText } from '@/lib/utils';

const ShipCard: React.FC<Ship> = ({
  id,
  name,
  owner,
  shipCode,
  registryCountry,
  shipType,
  length,
  width,
  capacity,
  engineType,
  registeredAt,
}) => {
  const formatDate = (timestamp: bigint) =>
    new Date(Number(timestamp) * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const getShipTypeColor = (type: string) => {
    const colorMap: { [key: string]: string } = {
      'Container Ship': 'bg-blue-100 text-blue-800',
      'Bulk Carrier': 'bg-green-100 text-green-800',
      Tanker: 'bg-red-100 text-red-800',
      'Cargo Ship': 'bg-yellow-100 text-yellow-800',
      'Passenger Ship': 'bg-purple-100 text-purple-800',
      'Fishing Vessel': 'bg-teal-100 text-teal-800',
      Other: 'bg-gray-100 text-gray-800',
    };
    return colorMap[type] || 'bg-gray-100 text-gray-800';
  };

  const getEngineTypeIcon = (type: string) => {
    const engineIcons: { [key: string]: React.ReactNode } = {
      'Diesel Engine': <BarChart className="w-4 h-4 text-blue-500" />,
      'Steam Turbine': <Waves className="w-4 h-4 text-red-500" />,
      'Gas Turbine': <ShipWheel className="w-4 h-4 text-green-500" />,
      'Nuclear Propulsion': <Anchor className="w-4 h-4 text-purple-500" />,
      Hybrid: <Info className="w-4 h-4 text-orange-500" />,
      Electric: <Clock className="w-4 h-4 text-teal-500" />,
    };
    return engineIcons[type] || <Info className="w-4 h-4 text-gray-500" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-100 p-4 relative">
          <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Anchor className="w-6 h-6 text-blue-600" />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <h2 className="text-xl font-bold text-gray-800">
                      {truncateText(name, { maxLength: 25 })}
                    </h2>
                  </TooltipTrigger>
                  <TooltipContent>{name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Badge
              className={`text-xs ${getShipTypeColor(shipType)} font-semibold`}
            >
              {shipType}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <ShipWheel className="w-5 h-5 text-gray-500" />,
                label: 'Owner',
                value: truncateAddress(owner),
                tooltip: owner,
              },
              {
                icon: <Waves className="w-5 h-5 text-blue-500" />,
                label: 'Ship Code',
                value: shipCode,
              },
              {
                icon: <Ruler className="w-5 h-5 text-green-500" />,
                label: 'Dimensions',
                value: `${length}m x ${width}m`,
              },
              {
                icon: <BarChart className="w-5 h-5 text-purple-500" />,
                label: 'Capacity',
                value: `${capacity} tons`,
              },
              {
                icon: <Clock className="w-5 h-5 text-orange-500" />,
                label: 'Registered',
                value: formatDate(registeredAt),
              },
              {
                icon: <Anchor className="w-5 h-5 text-red-500" />,
                label: 'Registry',
                value: registryCountry,
              },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span className="font-medium text-gray-700">
                    {item.label}
                  </span>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <p className="text-sm text-gray-600">{item.value}</p>
                    </TooltipTrigger>
                    {item.tooltip && (
                      <TooltipContent>{item.tooltip}</TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Engine Type</span>
              <div className="flex items-center space-x-2">
                {getEngineTypeIcon(engineType)}
                <Badge>{engineType}</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ShipCard;
