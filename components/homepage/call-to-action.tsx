"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Anchor, ArrowRight } from "lucide-react";

export function CallToAction() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-[#003366]"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTR2LTJoLTJ2Mmgyem0tNCAwdi0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnptLTQtOGgtMnYtMmgydjJ6bTAgOGgtMnYtMmgydjJ6bTI0LTI0di0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnptMCA0di0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-center opacity-20 animate-pulse"></div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-400 opacity-10"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-blue-300 opacity-10"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          rotate: [0, -60, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Anchor className="w-20 h-20 text-blue-300 mx-auto mb-6" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
          >
            Ready to Revolutionize Your Maritime Logistics?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-blue-200"
          >
            Join Transocean today and experience the future of shipping with
            blockchain technology. Streamline your operations, increase
            transparency, and boost efficiency across your entire supply chain.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-100 transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Link href="/register-ship">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div
          animate={{
            x: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-[200%] h-auto"
          >
            <path
              fill="#fff"
              fillOpacity="0.3"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
