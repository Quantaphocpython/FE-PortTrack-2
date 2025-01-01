"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlotuochc/image/upload/v1735671036/dtjfcwqz6dvlfv17ftju.png')] bg-cover bg-center"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* <video autoPlay muted loop className="video-background">
        <source
          src="https://static.vecteezy.com/system/resources/previews/049/642/819/mp4/two-cargo-ships-in-the-water-at-sunset-free-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-8xl font-bold tracking-wider mb-6"
        >
          Transocean
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-center max-w-2xl mb-8"
        >
          The experts in maritime logistics.
          <br />
          Blockchain-powered vessel tracking and verification.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-300"
        >
          Moving 12 million containers every year with complete transparency.
        </motion.p>
      </div>
    </div>
  );
}
