export interface Ship {
  id: bigint;
  name: string;
  owner: string;
  journeyIds: bigint[];
  isActive: boolean;
  shipCode: string;
  registryCountry: string;
  shipType: string;
  length: bigint;
  width: bigint;
  capacity: bigint;
  engineType: string;
  registeredAt: bigint;
}

export interface Journey {
  id: bigint;
  shipId: bigint;
  startPortId: bigint;
  portIds: bigint[];
  arrivalTimes: bigint[];
  notes: string[];
  completed: boolean;
}

export interface Port {
  id: bigint;
  name: string;
  location: string;
  portAddress: string;
  representative: string;
  portCode: string;
  country: string;
  geoCoordinates: {
    latitude: number;
    longitude: number;
  };
  registeredAt: bigint;
}

export interface FormShipReigstionData {
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
