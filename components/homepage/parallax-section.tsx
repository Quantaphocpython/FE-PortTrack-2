"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="relative h-[60vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 object-contain bg-no-repeat bg-[url('https://media-private.canva.com/w--q8/MAFK39w--q8/1/s2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250101%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250101T022554Z&X-Amz-Expires=31765&X-Amz-Signature=f7d821cfbd4b6c1cbf2c8c524ecbec4a5cba336552b2736d093022bef8fb0235&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2001%20Jan%202025%2011%3A15%3A19%20GMT')] bg-center"
        style={{ y }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity, scale }}
      >
        <div className="text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionize Maritime Identity & Tracking
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empower your operations with a blockchain-powered platform for
            vessel identity registration and transparent port traceability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Register Your Vessel
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Explore Platform Features
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
