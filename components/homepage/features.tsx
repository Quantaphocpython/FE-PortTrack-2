"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Search, Anchor, BarChart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Blockchain Technology",
    description:
      "Utilize cutting-edge blockchain for tamper-proof vessel tracking and verification.",
  },
  {
    icon: Search,
    title: "Real-Time Tracking",
    description:
      "Monitor your shipments in real-time with precise location data and estimated arrival times.",
  },
  {
    icon: Anchor,
    title: "Port Management Integration",
    description:
      "Seamless integration with port authorities for efficient documentation and clearance processes.",
  },
  {
    icon: BarChart,
    title: "Analytics and Reporting",
    description:
      "Gain valuable insights with advanced analytics and customizable reports on your logistics operations.",
  },
];

export function Features() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0">
        {/* Base Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://themekar.com/templatebucket/logtra/logtra/assets/img/bg/bg-service.jpg)",
          }}
        />

        {/* Red Wave Pattern */}
        <div className="absolute inset-0 z-1" style={{ top: "-500px" }}>
          <Image
            src="https://themekar.com/templatebucket/logtra/logtra/assets/img/shape/shape%201.png"
            alt="Wave Pattern"
            fill
            className="object-cover opacity-50"
          />
        </div>

        {/* Ship Illustration */}
        <div className="absolute right-0 -bottom-40 h-full w-1/3">
          <Image
            src="https://themekar.com/templatebucket/logtra/logtra/assets/img/vector/jahaj-3.png"
            alt="Ship Illustration"
            fill
            className="object-contain opacity-90"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            4 Reasons why to choose
            <br />
            our services
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-4 gap-8 relative">
          {/* Left Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-8"
          >
            {features.slice(0, 2).map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.05 }}
                className="bg-black rounded-lg p-6 hover:bg-red-600 transition-all duration-300"
              >
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 hover:text-white">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Image
              src="https://media-public.canva.com/eRyto/MAELe2eRyto/1/s2.jpg"
              alt="Container Port"
              width={800}
              height={600}
              className="w-full h-full rounded-lg"
              quality={100}
              priority
            />
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-8"
          >
            {features.slice(2, 4).map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.05 }}
                className="bg-black rounded-lg p-6 hover:bg-red-600 transition-all duration-300"
              >
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white " />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 hover:text-white">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
