"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Globe,
  User,
  Compass,
  Landmark,
  Layers,
  Clock,
} from "lucide-react";
import { mockPorts } from "@/lib/mock/data";
import { Port } from "@/types";

export function PortDetails() {
  const [selectedPort, setSelectedPort] = useState<Port | null>(mockPorts[0]);

  if (!selectedPort) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 p-6">
        <div className="flex items-center space-x-4">
          <Landmark className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Port Details
          </h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="p-6 space-y-6"
      >
        {/* Basic Port Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Port Name</p>
                <p className="font-medium text-lg">{selectedPort.name}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="font-medium">
                  {selectedPort.location}, {selectedPort.country}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Compass className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Port Code</p>
                <p className="font-medium">{selectedPort.portCode}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Representative</p>
                <p className="font-medium">{selectedPort.representative}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blockchain & Geospatial Information */}
        <div className="border-t pt-4 border-gray-200 dark:border-gray-700 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Layers className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Blockchain Address</p>
                <p className="font-medium text-sm truncate">
                  {selectedPort.portAddress}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Registered At</p>
                <p className="font-medium">
                  {new Date(Number(selectedPort.registeredAt)).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Geospatial Coordinates */}
        <div className="border-t pt-4 border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-3">
            <Compass className="w-5 h-5 text-gray-500" />
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Geographical Coordinates
            </h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500">Latitude</p>
              <p className="font-medium">
                {selectedPort.geoCoordinates.latitude}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Longitude</p>
              <p className="font-medium">
                {selectedPort.geoCoordinates.longitude}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
