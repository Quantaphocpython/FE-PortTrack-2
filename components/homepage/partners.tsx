"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Static partners that don't rotate
const staticPartners = [
  {
    name: "DSV",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/DSV_Logo.svg/1200px-DSV_Logo.svg.png",
    bg: "bg-[#fff5e6]",
  },
  {
    name: "Bosch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/650px-Bosch-logo.svg.png",
    bg: "bg-[#e6ffe6]",
  },
  {
    name: "Arkas",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/ea/Arkas_Spor.png",
    bg: "bg-[#f0e6ff]",
  },
  {
    name: "DHL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/216px-DHL_Logo.svg.png",
    bg: "bg-[#e6ffff]",
  },
  // {
  //   name: "P&G",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/P%26G_logo.png/1199px-P%26G_logo.png",
  //   bg: "bg-[#e6ffff]",
  // },
  // {
  //   name: "Maersk",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maersk_Group_Logo.svg/203px-Maersk_Group_Logo.svg.png",
  //   bg: "bg-[#fff0e6]",
  // },
  // {
  //   name: "Unilever",
  //   logo: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e4/Unilever.svg/162px-Unilever.svg.png?20100901062604",
  //   bg: "bg-[#f5f5f5]",
  // },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png",
    bg: "bg-[#e6f3ff]",
  },
  {
    name: "Nestlé",
    logo: "https://upload.wikimedia.org/wikipedia/sco/d/d8/Nestl%C3%A9.svg",
    bg: "bg-[#ffe6e6]",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/768px-Microsoft_icon.svg.png",
    bg: "bg-[#e6f3ff]",
  },
  {
    name: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Toyota.svg/1199px-Toyota.svg.png",
    bg: "bg-[#fff5e6]",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    bg: "bg-[#f0e6ff]",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    bg: "bg-[#ffe6e6]",
  },
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    bg: "bg-[#e6ffe6]",
  },
  {
    name: "Coca-Cola",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Coca-Cola_logo.svg",
    bg: "bg-[#fff0e6]",
  },
];

// Rotating partners for each dynamic position
const rotatingPartners = {
  pos1: [
    {
      name: "Merieux",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/M%C3%A9rieux_Logo.png",
      bg: "bg-[#e6f3ff]",
    },
    {
      name: "Cotransa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Cotransa_logo.png",
      bg: "bg-[#ffe6e6]",
    },
    {
      name: "Horoz",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Horoz_Logistics_logo.png",
      bg: "bg-[#fff0e6]",
    },
    {
      name: "Huawei",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Huawei.svg",
      bg: "bg-[#e6ffe6]",
    },
  ],
  pos2: [
    {
      name: "Arcelik",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/02/Ar%C3%A7elik_A.Ş._logo.svg",
      bg: "bg-[#e6f3ff]",
    },
    {
      name: "Socar",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/SOCAR_logo.svg",
      bg: "bg-[#ffe6e6]",
    },
    {
      name: "Vestel",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Vestel_logo.svg",
      bg: "bg-[#e6ffe6]",
    },
    {
      name: "PepsiCo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/PepsiCo_logo.svg",
      bg: "bg-[#fff5e6]",
    },
  ],
  pos3: [
    {
      name: "LeoProex",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/48/LeoProex_logo.png",
      bg: "bg-[#f0e6ff]",
    },
    {
      name: "Globelink",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/e2/Globelink_Logo.png",
      bg: "bg-[#fff5e6]",
    },
    {
      name: "TOBB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/TOBB_logo.png",
      bg: "bg-[#e6f3ff]",
    },
    {
      name: "Ford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
      bg: "bg-[#e6ffe6]",
    },
  ],
};

export function Partners() {
  const [currentIndices, setCurrentIndices] = useState({
    pos1: 0,
    pos2: 0,
    pos3: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices((prev) => ({
        pos1: (prev.pos1 + 1) % rotatingPartners.pos1.length,
        pos2: (prev.pos2 + 1) % rotatingPartners.pos2.length,
        pos3: (prev.pos3 + 1) % rotatingPartners.pos3.length,
      }));
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const renderPartnerCell = (partner: (typeof staticPartners)[0]) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${partner.bg} rounded-lg p-4 flex items-center justify-center h-24 relative overflow-hidden`}
    >
      <div className="relative w-full h-full">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain p-2"
        />
      </div>
    </motion.div>
  );

  const renderRotatingCell = (position: keyof typeof rotatingPartners) => (
    <div className="relative h-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndices[position]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {renderPartnerCell(
            rotatingPartners[position][currentIndices[position]]
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by over{" "}
            <span className="text-orange-500">70,000 users</span> globally
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our proven track record and commitment to excellence has brought us
            the trust of many industry giants.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {/* Static Partners */}
          {renderPartnerCell(staticPartners[0])}
          {renderPartnerCell(staticPartners[1])}
          {/* Rotating Position 1 */}
          {renderRotatingCell("pos1")}
          {renderPartnerCell(staticPartners[2])}
          {/* Rotating Position 2 */}
          {renderRotatingCell("pos2")}
          {renderPartnerCell(staticPartners[3])}
          {renderPartnerCell(staticPartners[4])}

          {/* Second Row */}
          {renderRotatingCell("pos3")}
          {/* Add more static and rotating cells as needed */}
        </div>
      </div>
    </section>
  );
}
