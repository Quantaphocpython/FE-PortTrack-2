import type { Metadata } from 'next';
// import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import './globals.css';
import Providers from '@/provider';
import TopLoader from '@/components/top-loader';
import ScrollProgress from '@/components/ui/scroll-progress';
import Header from '@/components/wrapper/header';
import Footer from '@/components/wrapper/footer';
import { Toaster } from '@/components/ui/toaster';
import localFont from 'next/font/local';
import '@rainbow-me/rainbowkit/styles.css';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Thin.ttf',
      weight: '100',
    },
    {
      path: './fonts/Poppins-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/Poppins-ExtraLight.ttf',
      weight: '200',
    },
    {
      path: './fonts/Poppins-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fonts/Poppins-Light.ttf',
      weight: '300',
    },
    {
      path: './fonts/Poppins-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '400',
    },
    {
      path: './fonts/Poppins-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Poppins-Medium.ttf',
      weight: '500',
    },
    {
      path: './fonts/Poppins-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Poppins-SemiBold.ttf',
      weight: '600',
    },
    {
      path: './fonts/Poppins-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '700',
    },
    {
      path: './fonts/Poppins-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/Poppins-ExtraBold.ttf',
      weight: '800',
    },
    {
      path: './fonts/Poppins-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: './fonts/Poppins-Black.ttf',
      weight: '900',
    },
    {
      path: './fonts/Poppins-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Transocean - Blockchain-Based Ship Tracking Platform',
    template: '%s | Transocean',
  },
  description:
    'Revolutionary maritime logistics with real-time blockchain-based ship tracking and management.',
  keywords: [
    'ship tracking',
    'blockchain',
    'maritime logistics',
    'real-time tracking',
    'supply chain management',
  ],
  authors: [{ name: 'Transocean Team' }],
  creator: 'Transocean',
  publisher: 'Transocean Inc.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>
        <Providers>
          <TopLoader />
          <ScrollProgress />
          <Header />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
