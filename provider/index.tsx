import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from './theme-provider';
import WalletProvider from './WalletProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <WalletProvider>{children}</WalletProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
