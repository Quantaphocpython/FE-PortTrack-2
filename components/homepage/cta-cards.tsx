"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Anchor, Database } from "lucide-react";
import { CustomMagicCard } from "../custom-card";

export function CTACards() {
  const cards = [
    {
      title: "Blockchain-Based Port Registry",
      description:
        "Secure and transparent registration of vessels at ports using blockchain.",
      icon: Database,
      image: "https://media-public.canva.com/eRyto/MAELe2eRyto/1/s2.jpg",
      href: "/port-registry",
    },
    {
      title: "Journey Tracking",
      description:
        "Real-time traceability of vessels' journeys through multiple ports.",
      icon: Anchor,
      image:
        "https://img.freepik.com/premium-photo/big-transport-ship-with-containers-with-goods-open-sea_605905-10901.jpg?w=1060",
      href: "/journey-tracking",
    },
  ];

  return (
    <div className="container mx-auto relative z-10 -mt-8">
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <Link key={card.title} href={card.href}>
            <CustomMagicCard className="h-[400px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative w-full h-full rounded-2xl overflow-hidden group"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.image})` }}
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <card.icon className="w-12 h-12 text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                    {card.description}
                  </p>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            </CustomMagicCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
