"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Menu, Anchor, Ship, Box, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const oceanServices = [
  {
    title: "Journey Recording",
    description:
      "Record and monitor vessel journeys with blockchain technology",
    icon: Navigation,
    href: "/journey-recording",
  },
  {
    title: "Journey Tracking",
    description: "Real-time vessel tracking and route optimization",
    icon: Ship,
    href: "/journey-tracking",
  },
  {
    title: "Port Management",
    description: "View details of international container terminals",
    icon: Anchor,
    href: "/port-management",
  },
  {
    title: "Register New Ship",
    description: "Add and manage your vessels in our network",
    icon: Box,
    href: "/register-ship",
  },
];

export default function Header() {
  const pathname = usePathname(); // Get current path
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if the header should use "scrolled" styles
  const shouldShowScrolledStyle = pathname !== "/" || isScrolled;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        shouldShowScrolledStyle
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
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
                  shouldShowScrolledStyle ? "text-blue-600" : "text-white"
                }`}
              >
                Transocean
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about-us"
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                shouldShowScrolledStyle ? "text-gray-600" : "text-white"
              }`}
            >
              About Us
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  shouldShowScrolledStyle ? "text-gray-600" : "text-white"
                }`}
              >
                Services
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[400px] p-6">
                <div className="space-y-4">
                  <div>
                    <DropdownMenuLabel className="text-lg font-semibold text-blue-600">
                      OCEAN
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="my-2" />
                    <div
                      className="
grid gap-4"
                    >
                      {oceanServices.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="block"
                        >
                          <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-all duration-200 group">
                            <div className="mt-1">
                              <service.icon className="w-5 h-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {service.title}
                              </div>
                              <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                                {service.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {["Projects", "Press & News", "Contacts"].map((item) => (
              <Link
                key={item}
                href={`/${item
                  .toLowerCase()
                  .replace(/ & /g, "-")
                  .replace(/ /g, "-")}`}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  shouldShowScrolledStyle ? "text-gray-600" : "text-white"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={
                    shouldShowScrolledStyle ? "text-gray-600" : "text-white"
                  }
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              className={`${
                shouldShowScrolledStyle
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white/10 text-white hover:bg-white/20"
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
              shouldShowScrolledStyle ? "text-gray-600" : "text-white"
            }`}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
