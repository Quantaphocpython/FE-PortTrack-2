import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { contractABI } from '@/lib/contracts/abi';
import { useToast } from './use-toast';

export interface RegisterShipArgs {
  name: string;
  owner: string;
  shipCode: string;
  registryCountry: string;
  shipType: string;
  length: number;
  width: number;
  capacity: number;
  engineType: string;
}

export function useRegisterShip() {
  const { toast } = useToast();
  const {
    data: hash,
    error,
    isPending,
    writeContract,
    isError,
  } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const registerShip = async ({
    name,
    owner,
    shipCode,
    registryCountry,
    shipType,
    length,
    width,
    capacity,
    engineType,
  }: RegisterShipArgs) => {
    try {
      if (
        !name.trim() ||
        !owner.trim() ||
        !shipCode.trim() ||
        !registryCountry.trim() ||
        !shipType.trim()
      ) {
        throw new Error('All string fields must be non-empty');
      }

      if (length <= 0 || width <= 0 || capacity <= 0) {
        throw new Error('Length, width, and capacity must be positive numbers');
      }

      writeContract({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        abi: contractABI,
        functionName: 'registerShip',
        args: [
          name,
          owner,
          shipCode,
          registryCountry,
          shipType,
          length,
          width,
          capacity,
          engineType,
        ],
      });

      toast({
        title: 'Ship Registration Submitted',
        description: 'Your ship registration is being processed.',
        variant: 'default',
      });
    } catch (err) {
      console.error('Error registering ship:', err);

      // Hiển thị thông báo lỗi
      toast({
        title: 'Registration Failed',
        description:
          err instanceof Error ? err.message : 'An unexpected error occurred.',
        variant: 'destructive',
      });

      throw err;
    }
  };

  const resetState = () => {
    // Logic reset state nếu cần
  };

  return {
    registerShip,
    isPending,
    isConfirming,
    isConfirmed,
    isError,
    hash,
    error,
    resetState,
  };
}
