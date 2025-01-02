'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Globe, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import ModeToggle from '../mode-toggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className={`text-2xl font-bold ${
                  isScrolled ? 'text-blue-600' : 'text-white'
                }`}
              >
                Transocean
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              'About Us',
              'Services',
              'Projects',
              'Press & News',
              'Contacts',
            ].map((item) => (
              <Link
                key={item}
                href={`/${item
                  .toLowerCase()
                  .replace(/ & /g, '-')
                  .replace(/ /g, '-')}`}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={isScrolled ? 'text-gray-600' : 'text-white'}
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div
              className={`flex items-center space-x-2 ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              {/* <ModeToggle /> */}
            </div>

            <Button
              className={`${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/10 text-white hover:bg-white/20'
              } backdrop-blur-sm transition-all duration-300`}
            >
              Schedule Transport
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
