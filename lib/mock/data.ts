// Mock data for the application
export const mockShips = [
  {
    id: BigInt(1),
    name: "Ocean Explorer",
    owner: "0x1234567890abcdef",
    journeyIds: [BigInt(1), BigInt(2)],
    isActive: true,
    shipCode: "OE001",
    registryCountry: "Singapore",
    shipType: "Container Ship",
    length: BigInt(300),
    width: BigInt(45),
    capacity: BigInt(10000),
    engineType: "Diesel Electric",
    registeredAt: BigInt(Date.now())
  },
  {
    id: BigInt(2),
    name: "Pacific Voyager",
    owner: "0x0987654321fedcba",
    journeyIds: [BigInt(3)],
    isActive: true,
    shipCode: "PV002",
    registryCountry: "Panama",
    shipType: "Bulk Carrier",
    length: BigInt(250),
    width: BigInt(40),
    capacity: BigInt(8000),
    engineType: "Marine Diesel",
    registeredAt: BigInt(Date.now())
  }
];

export const mockJourneys = [
  {
    id: BigInt(1),
    shipId: BigInt(1),
    startPortId: BigInt(1),
    portIds: [BigInt(1), BigInt(2), BigInt(3)],
    arrivalTimes: [
      BigInt(Date.now() - 7 * 24 * 60 * 60 * 1000),
      BigInt(Date.now() - 4 * 24 * 60 * 60 * 1000),
      BigInt(Date.now() - 1 * 24 * 60 * 60 * 1000)
    ],
    notes: [
      "Cargo loaded successfully",
      "Weather conditions optimal",
      "Arrived ahead of schedule"
    ],
    completed: false
  }
];

export const mockPorts = [
  {
    id: BigInt(1),
    name: "Singapore Port",
    location: "Singapore",
    portAddress: "0xabcdef1234567890",
    representative: "John Smith",
    portCode: "SGSIN",
    country: "Singapore",
    geoCoordinates: {
      latitude: 1.290270,
      longitude: 103.851959
    },
    registeredAt: BigInt(Date.now())
  },
  {
    id: BigInt(2),
    name: "Port of Rotterdam",
    location: "Netherlands",
    portAddress: "0x9876543210abcdef",
    representative: "Maria Jansen",
    portCode: "NLRTM",
    country: "Netherlands",
    geoCoordinates: {
      latitude: 51.948,
      longitude: 4.127
    },
    registeredAt: BigInt(Date.now())
  }
];