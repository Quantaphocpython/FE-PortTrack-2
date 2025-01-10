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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-600">
              4 Reasons
            </span>{" "}
            why to choose
            <br />
            our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
              services
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-4"
          />
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-4 gap-6 relative">
          {/* Left Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 grid gap-6"
          >
            {features.slice(0, 2).map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.02 }}
                className="bg-black rounded-lg p-6 hover:bg-red-600 transition-all duration-300 h-[250px] flex flex-col"
              >
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 hover:text-white flex-1">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 h-full"
          >
            <div className="relative h-full rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent z-10" />
              <Image
                src="https://media-public.canva.com/eRyto/MAELe2eRyto/1/s2.jpg"
                alt="Container Port"
                fill
                className="object-cover"
                quality={100}
                priority
              />
            </div>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 grid gap-6"
          >
            {features.slice(2, 4).map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.02 }}
                className="bg-black rounded-lg p-6 hover:bg-red-600 transition-all duration-300 h-[250px] flex flex-col"
              >
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 hover:text-white flex-1">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTR2LTJoLTJ2Mmgyem0tNCAwdi0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnptLTQtOGgtMnYtMmgydjJ6bTAgOGgtMnYtMmgydjJ6bTI0LTI0di0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-center opacity-20" />
      </div>
    </section>
  );
}
