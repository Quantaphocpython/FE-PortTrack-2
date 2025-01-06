'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGetShips } from '@/hooks/useGetShips';
import ShipCard from './ShipCard';
import { LayoutGrid, List, RefreshCw, Ship as ShipIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';

type ViewMode = 'grid' | 'list';

const ShipList: React.FC = () => {
  const { ships, error, isLoading, refetch } = useGetShips();
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter ships based on search term
  const filteredShips = ships.filter(
    (ship) =>
      ship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ship.shipCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render loading skeletons
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-[300px] w-full" />
          ))}
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
          <ShipIcon className="mx-auto w-12 h-12 text-red-500 mb-4" />
          <h2 className="text-xl font-semibold text-red-700 mb-2">
            Unable to Load Ships
          </h2>
          <p className="text-red-600">{error.message}</p>
          <Button onClick={refetch} className="mt-4">
            <RefreshCw className="mr-2 h-4 w-4" /> Try Again
          </Button>
        </div>
      </div>
    );
  }

  // Render empty state
  if (ships.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
          <ShipIcon className="mx-auto w-12 h-12 text-gray-500 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            No Ships Registered
          </h2>
          <p className="text-gray-600">
            There are currently no ships in the system.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-[80px]">
      {/* Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          {/* Search Input */}
          <Input
            placeholder="Search ships..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
        </div>

        {/* Refresh Button */}
        <Button onClick={refetch} variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" /> Refresh
        </Button>
      </div>

      {/* Ships Grid/List */}
      <AnimatePresence>
        <motion.div
          layout
          className={`
            ${
              viewMode === 'grid'
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
            }
          `}
        >
          {filteredShips.map((ship) => (
            <motion.div
              key={ship.id.toString()}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ShipCard {...ship} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No Results for Search */}
      {filteredShips.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No ships match your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ShipList;
