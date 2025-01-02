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