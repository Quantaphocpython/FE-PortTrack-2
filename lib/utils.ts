import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Truncates an Ethereum/blockchain wallet address
 * @param address Full wallet address
 * @param firstCharCount Number of characters to show at the start (default: 6)
 * @param lastCharCount Number of characters to show at the end (default: 4)
 * @returns Truncated address (e.g., 0x1234...5678)
 */
export function truncateAddress(
  address: string,
  firstCharCount: number = 6,
  lastCharCount: number = 4
): string {
  // Check if address is valid and long enough to truncate
  if (!address || address.length <= firstCharCount + lastCharCount) {
    return address;
  }

  // Truncate the address
  return `${address.slice(0, firstCharCount)}...${address.slice(
    -lastCharCount
  )}`;
}

export function truncateText(
  text: string,
  options: {
    maxLength?: number;
    ellipsis?: string;
    side?: 'end' | 'middle' | 'start';
  } = {}
): string {
  const { maxLength = 20, ellipsis = '...', side = 'end' } = options;

  if (text.length <= maxLength) return text;

  switch (side) {
    case 'end':
      return `${text.slice(0, maxLength)}${ellipsis}`;

    case 'middle':
      const midPoint = Math.floor(maxLength / 2);
      return `${text.slice(0, midPoint)}${ellipsis}${text.slice(-midPoint)}`;

    case 'start':
      return `${ellipsis}${text.slice(-maxLength)}`;

    default:
      return text;
  }
}

// Optional: Address validation utility
export function isValidAddress(address: string): boolean {
  // Basic Ethereum address validation
  const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
  return ethAddressRegex.test(address);
}
