'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Anchor, Search, Info } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import Footer from '@/components/wrapper/footer';
import Link from 'next/link';

interface FormData {
  shipName: string;
  ownerWalletAddress: string;
  shipCode: string;
  registrationCountry: string;
  shipType: string;
  length: string;
  width: string;
  capacity: string;
  engineType: string;
  isActive: boolean;
}

const shipTypes = [
  'Container Ship',
  'Bulk Carrier',
  'Tanker',
  'Cargo Ship',
  'Passenger Ship',
  'Fishing Vessel',
  'Other',
];

const engineTypes = [
  'Diesel Engine',
  'Steam Turbine',
  'Gas Turbine',
  'Nuclear Propulsion',
  'Hybrid',
  'Electric',
  'Other',
];

export default function ShipRegistration() {
  const [formData, setFormData] = useState<FormData>({
    shipName: '',
    ownerWalletAddress: '',
    shipCode: '',
    registrationCountry: '',
    shipType: '',
    length: '',
    width: '',
    capacity: '',
    engineType: '',
    isActive: true,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: 'Registration Successful!',
        description:
          'The ship information has been recorded on the blockchain.',
      });

      // Reset form
      setFormData({
        shipName: '',
        ownerWalletAddress: '',
        shipCode: '',
        registrationCountry: '',
        shipType: '',
        length: '',
        width: '',
        capacity: '',
        engineType: '',
        isActive: true,
      });
    } catch (error) {
      console.error('Error registering ship:', error);
      toast({
        title: 'Registration Failed',
        description: 'An error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchShipCode = () => {
    toast({
      title: 'Search Ship Code',
      description: 'Feature under development...',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Link href="/">
        <Button
          type="button"
          variant="outline"
          className="absolute top-8 left-4"
        >
          Back to Home
        </Button>
      </Link>
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Anchor className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-2xl">Register New Ship</CardTitle>
              </div>
              <CardDescription>
                Register your ship&apos;s information on the blockchain for
                tracking and management.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="shipName">Ship Name</Label>
                      <Input
                        id="shipName"
                        name="shipName"
                        value={formData.shipName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ownerWalletAddress">
                        Owner Wallet Address
                      </Label>
                      <Input
                        id="ownerWalletAddress"
                        name="ownerWalletAddress"
                        value={formData.ownerWalletAddress}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="shipCode">Ship Code</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="w-4 h-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                Enter the ship code to search for information
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex space-x-2">
                        <Input
                          id="shipCode"
                          name="shipCode"
                          value={formData.shipCode}
                          onChange={handleChange}
                          required
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleSearchShipCode}
                        >
                          <Search className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="registrationCountry">
                        Registration Country
                      </Label>
                      <Input
                        id="registrationCountry"
                        name="registrationCountry"
                        value={formData.registrationCountry}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="shipType">Ship Type</Label>
                      <Select
                        onValueChange={(value) =>
                          handleChange({ target: { name: 'shipType', value } })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Ship Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {shipTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="engineType">Engine Type</Label>
                      <Select
                        onValueChange={(value) =>
                          handleChange({
                            target: { name: 'engineType', value },
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Engine Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {engineTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="length">Length (m)</Label>
                      <Input
                        id="length"
                        name="length"
                        type="number"
                        value={formData.length}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="width">Width (m)</Label>
                      <Input
                        id="width"
                        name="width"
                        type="number"
                        value={formData.width}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="capacity">Capacity (tons)</Label>
                      <Input
                        id="capacity"
                        name="capacity"
                        type="number"
                        value={formData.capacity}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Status</h3>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.isActive}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, isActive: checked }))
                      }
                    />
                    <Label>Active</Label>
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Processing...' : 'Register'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
