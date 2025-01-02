"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Journey } from "@/app/types";
import { useState } from "react";
import { mockJourneys } from "@/app/mock/data";
import {
  Navigation,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  List,
  Ship
} from "lucide-react";
import { motion } from "framer-motion";

export function JourneySearch() {
  const [journeyId, setJourneyId] = useState("");
  const [journey, setJourney] = useState<Journey | null>(mockJourneys[0]);

  const handleSearch = async () => {
    const found = mockJourneys.find(j => j.id.toString() === journeyId);
    setJourney(found || null);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 p-6">
        <div className="flex items-center space-x-4">
          <Navigation className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Journey Detailed Lookup
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
            htmlFor="journeyId"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
          >
            <MapPin className="w-5 h-5 text-blue-500" />
            <span>Enter Journey ID</span>
          </Label>
          <div className="flex space-x-2">
            <Input
              id="journeyId"
              value={journeyId}
              onChange={(e) => setJourneyId(e.target.value)}
              placeholder="Enter journey ID"
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

        {journey && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800/30 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 space-y-6"
          >
            {/* Header Section */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Navigation className="w-10 h-10 text-blue-500 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    Journey #{journey.id.toString()}
                  </h3>
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 ${journey.completed
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'
                      }`}
                  >
                    {journey.completed ? (
                      <><CheckCircle className="w-4 h-4 mr-1" /> Completed</>
                    ) : (
                      <><AlertCircle className="w-4 h-4 mr-1" /> In Progress</>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Information Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Ship className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Ship ID</p>
                    <p className="font-medium">{journey.shipId.toString()}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Start Port ID</p>
                    <p className="font-medium">{journey.startPortId.toString()}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <List className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Port IDs</p>
                    <p className="font-medium">
                      {journey.portIds.map(id => id.toString()).join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrival Times */}
            <div className="border-t pt-4 border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-5 h-5 text-gray-500" />
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Arrival Times
                </h4>
              </div>
              <div className="space-y-2">
                {journey.arrivalTimes.map((time, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <span className="text-gray-500">Port {index + 1}:</span>
                    <span className="font-medium">
                      {new Date(Number(time)).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="border-t pt-4 border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <List className="w-5 h-5 text-gray-500" />
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Journey Notes
                </h4>
              </div>
              <ul className="space-y-2 text-sm">
                {journey.notes.map((note, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-gray-500">•</span>
                    <span className="font-medium">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}