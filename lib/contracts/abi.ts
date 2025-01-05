export const contractABI = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'journeyId',
        type: 'uint256',
      },
    ],
    name: 'completeJourney',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'journeyId',
        type: 'uint256',
      },
    ],
    name: 'JourneyCompleted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'journeyId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shipId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'startPortId',
        type: 'uint256',
      },
    ],
    name: 'JourneyStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'portId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
    ],
    name: 'PortRegistered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'journeyId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'portId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'arrivalTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'note',
        type: 'string',
      },
    ],
    name: 'PortVisited',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'location',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'portAddress',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'representative',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'country',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'portCode',
        type: 'string',
      },
    ],
    name: 'registerPort',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'owner',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'shipCode',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'registryCountry',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'shipType',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'length',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'width',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'capacity',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'engineType',
        type: 'string',
      },
    ],
    name: 'registerShip',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shipId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
    ],
    name: 'ShipRegistered',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shipId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startPortId',
        type: 'uint256',
      },
    ],
    name: 'startJourney',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'journeyId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'portId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'note',
        type: 'string',
      },
    ],
    name: 'visitPort',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'journeyId',
        type: 'uint256',
      },
    ],
    name: 'getJourney',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shipId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startPortId',
        type: 'uint256',
      },
      {
        internalType: 'uint256[]',
        name: 'portIds',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'arrivalTimes',
        type: 'uint256[]',
      },
      {
        internalType: 'string[]',
        name: 'notes',
        type: 'string[]',
      },
      {
        internalType: 'bool',
        name: 'completed',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'journeys',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'shipId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startPortId',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'completed',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'ports',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'location',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'portAddress',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'representative',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'country',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'portCode',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'registeredAt',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'ships',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'owner',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'shipCode',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'registryCountry',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'shipType',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'length',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'width',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'capacity',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'engineType',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'registeredAt',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
