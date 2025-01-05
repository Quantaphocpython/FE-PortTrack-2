'use client';
import { useState, useEffect } from 'react';
import {
  useReadContract,
  UseReadContractParameters,
  UseReadContractReturnType,
} from 'wagmi';
import { contractABI } from '@/lib/contracts/abi';
import { Address } from 'viem';

export interface Ship {
  id: bigint;
  name: string;
  owner: string;
  shipCode: string;
  registryCountry: string;
  shipType: string;
  length: bigint;
  width: bigint;
  capacity: bigint;
  engineType: string;
  registeredAt: bigint;
  isActive: boolean;
}

export function useGetShips() {
  const [ships, setShips] = useState<Ship[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    data: contractData,
    error: contractError,
    isLoading: contractLoading,
    refetch,
  } = useReadContract({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as Address,
    abi: contractABI,
    functionName: 'getShips',
    query: {
      enabled: true,
      staleTime: 1000 * 60 * 5, // 5 phút
    },
  });

  useEffect(() => {
    if (contractData && Array.isArray(contractData)) {
      const parsedShips: Ship[] = contractData.map((ship: any) => ({
        id: BigInt(ship.id),
        name: ship.name,
        owner: ship.owner,
        shipCode: ship.shipCode,
        registryCountry: ship.registryCountry,
        shipType: ship.shipType,
        length: BigInt(ship.length),
        width: BigInt(ship.width),
        capacity: BigInt(ship.capacity),
        engineType: ship.engineType,
        registeredAt: BigInt(ship.registeredAt),
        isActive: ship.isActive,
      }));
      setShips(parsedShips);
      setError(null);
      setIsLoading(false);
    } else if (contractError) {
      setError(contractError);
      setIsLoading(false);
    }
  }, [contractData, contractError]);

  return {
    ships,
    error,
    isLoading: contractLoading || isLoading,
    refetch,
  };
}
