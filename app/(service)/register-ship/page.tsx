'use client';

import { AnimatedBackground } from '@/components/ui/animated-background';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import PageWrapper from '@/components/wrapper/page-wrapper';
import { useToast } from '@/hooks/use-toast';
import { useRegisterShip } from '@/hooks/useRegisterShip';
import { FormShipReigstionData } from '@/types';
import { motion } from 'framer-motion';
import { Anchor, Info, Loader2, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

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
  const [formData, setFormData] = useState<FormShipReigstionData>({
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

  const { registerShip, isConfirming, isConfirmed, isPending, isError } =
    useRegisterShip();
  const { toast } = useToast();

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

    try {
      await registerShip({
        name: formData.shipName,
        owner: formData.ownerWalletAddress,
        shipCode: formData.shipCode,
        registryCountry: formData.registrationCountry,
        shipType: formData.shipType,
        length: parseFloat(formData.length),
        width: parseFloat(formData.width),
        capacity: parseFloat(formData.capacity),
        engineType: formData.engineType,
      });
    } catch (error) {
      console.error('Error registering ship:', error);
    }
  };

  // Theo dõi các trạng thái của transaction
  useEffect(() => {
    if (isPending) {
      toast({
        title: 'Processing Registration',
        description: 'Your ship registration is being submitted...',
        variant: 'default',
      });
    }

    if (isConfirming) {
      toast({
        title: 'Confirming Transaction',
        description: 'Waiting for blockchain confirmation...',
        variant: 'default',
      });
    }

    if (isConfirmed) {
      // Reset form sau khi đăng ký thành công
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

      toast({
        title: 'Ship Registered Successfully',
        description: 'Your ship has been registered on the blockchain.',
        className: 'toast-success',
      });
    }

    if (isError) {
      toast({
        title: 'Registration Failed',
        description: 'Unable to register ship. Please try again.',
        variant: 'destructive',
      });
    }
  }, [isPending, isConfirming, isConfirmed, isError]);

  const handleSearchShipCode = () => {
    toast({
      title: 'Search Ship Code',
      description: 'Feature under development...',
    });
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AnimatedBackground />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          <Card className="shadow-2xl rounded-2xl border border-gray-100 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
              <div className="flex items-center space-x-4">
                <Anchor className="w-8 h-8 text-white" />
                <div>
                  <CardTitle className="text-2xl font-bold tracking-tight">
                    Register New Ship
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    Secure blockchain registration for maritime vessels
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4 flex items-center">
                    <Info className="mr-2 text-blue-500" /> Basic Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="shipName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ship Name
                      </Label>
                      <Input
                        id="shipName"
                        name="shipName"
                        value={formData.shipName}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="ownerWalletAddress"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Owner Wallet Address
                      </Label>
                      <Input
                        id="ownerWalletAddress"
                        name="ownerWalletAddress"
                        value={formData.ownerWalletAddress}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  {/* Ship Code and Registration Country */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="shipCode"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Ship Code
                        </Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="w-4 h-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              Enter the ship code to search for information
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
                          className="input-field flex- 1"
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
                      <Label
                        htmlFor="registrationCountry"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Registration Country
                      </Label>
                      <Input
                        id="registrationCountry"
                        name="registrationCountry"
                        value={formData.registrationCountry}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4 flex items-center">
                    <Info className="mr-2 text-blue-500" /> Technical
                    Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="shipType"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ship Type
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleChange({
                            target: { name: 'shipType', value },
                          })
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
                      <Label
                        htmlFor="engineType"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Engine Type
                      </Label>
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
                      <Label
                        htmlFor="length"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Length (m)
                      </Label>
                      <Input
                        id="length"
                        name="length"
                        type="number"
                        value={formData.length}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="width"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Width (m)
                      </Label>
                      <Input
                        id="width"
                        name="width"
                        type="number"
                        value={formData.width}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="capacity"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Capacity (tons)
                      </Label>
                      <Input
                        id="capacity"
                        name="capacity"
                        type="number"
                        value={formData.capacity}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <Button
                    type="submit"
                    variant="default"
                    className="w-full font-bold py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    disabled={isPending || isConfirming}
                  >
                    {isPending || isConfirming ? (
                      <div className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {isPending
                          ? 'Submitting Transaction...'
                          : 'Confirming on Blockchain...'}
                      </div>
                    ) : (
                      'Register Ship'
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
