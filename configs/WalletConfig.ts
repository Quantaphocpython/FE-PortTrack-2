import { getDefaultConfig, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { ledgerWallet, trustWallet } from '@rainbow-me/rainbowkit/wallets';
import { http } from 'wagmi';
import { defineChain } from 'viem';
import { kairos } from 'viem/chains';

const AssetHubWestend = defineChain({
  id: 420420421,
  name: 'AssetHub',
  nativeCurrency: {
    name: 'Westie',
    symbol: 'WST',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://westend-asset-hub-eth-rpc.polkadot.io'],
    },
  },
  testnet: true,
});

const Kitchensink = defineChain({
  id: 420420420,
  name: 'Kitchensink',
  nativeCurrency: {
    name: 'Dev',
    symbol: 'DEV',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['http://localhost:8545'],
    },
  },
  testnet: true,
});

const { wallets } = getDefaultWallets();

const walletConfig = getDefaultConfig({
  appName: process.env.NEXT_PUBLIC_APP_NAME || '',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',
  wallets: [
    ...wallets,
    {
      groupName: 'Other',
      wallets: [trustWallet, ledgerWallet],
    },
  ],
  chains: [AssetHubWestend, Kitchensink, kairos],
  transports: {
    [AssetHubWestend.id]: http(),
    [Kitchensink.id]: http(),
    [kairos.id]: http('https://rpc.ankr.com/klaytn_testnet'),
  },
  ssr: true,
});

export default walletConfig;
export { AssetHubWestend, Kitchensink, kairos };
