import { useContractRead } from 'wagmi';
import { contractABI } from '@/lib/contracts/abi';

export function useGetShips() {
  const {
    data: ships,
    error,
    isLoading,
    refetch,
    isError,
  } = useContractRead({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    abi: contractABI,
    functionName: 'getShips',
  });

  return {
    ships: ships || [],
    isLoading,
    isError,
    error,
    refetch,
  };
}
