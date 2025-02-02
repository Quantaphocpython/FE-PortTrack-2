"use client";

import { motion } from "framer-motion";
import { Globe2, Database, Ship, ShieldCheck } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Database,
    title: "Blockchain Transparency",
    description: "Immutable records for vessel and port interactions.",
  },
  {
    icon: ShieldCheck,
    title: "Data Security",
    description: "Secure data storage for trusted maritime operations.",
  },
  {
    icon: Ship,
    title: "Vessel Identity Management",
    description: "Unique IDs for vessels registered on the platform.",
  },
  {
    icon: Globe2,
    title: "Global Accessibility",
    description: "Connect ports and vessels worldwide seamlessly.",
  },
];

export function Expertise() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-500 uppercase tracking-wider">
                OUR PLATFORM
              </span>
              <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-gray-800">
                Transparency & Trust in{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
                  MARITIME JOURNEYS
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-600 mb-8 max-w-xl"
            >
              Our platform leverages blockchain to create a transparent and
              secure ecosystem for maritime operations, ensuring trust between
              ports, vessels, and stakeholders.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-6"
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 dark:border-gray-300 dark:hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <service.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700 dark:text-gray-600">
                  Have any questions?
                </span>
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 dark:text-blue-700 font-semibold hover:text-blue-700 dark:hover:text-blue-800 transition-colors"
                >
                  +123 456 7890
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <div className="absolute right-0 top-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://app.all-forward.com/upload/BlogsImages/00000/00000023_tk2cwvz66vjou.jpg"
                alt="Blockchain Maritime"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="absolute left-0 bottom-0 w-3/5 h-3/5 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://img.freepik.com/premium-photo/big-transport-ship-with-containers-with-goods-open-sea_605905-10901.jpg?w=1060"
                alt="Maritime Transparency"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
