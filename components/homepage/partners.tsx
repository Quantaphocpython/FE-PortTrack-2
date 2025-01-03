"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Static partners that don't rotate
const staticPartners = [
  {
    name: "Henkel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/DSV_Logo.svg/1200px-DSV_Logo.svg.png",
    bg: "bg-[#fff5e6]",
  },
  {
    name: "Bosch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/650px-Bosch-logo.svg.png",
    bg: "bg-[#e6ffe6]",
  },
  {
    name: "Maersk",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maersk_Group_Logo.svg/203px-Maersk_Group_Logo.svg.png",
    bg: "bg-[#e6f3ff]",
  },
  {
    name: "DHL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/216px-DHL_Logo.svg.png",
    bg: "bg-[#ffe6e6]",
  },
  {
    name: "P&G",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/P%26G_logo.png/1199px-P%26G_logo.png",
    bg: "bg-[#f0e6ff]",
  },
];

// Additional partners
const additionalPartners = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    bg: "bg-[#f0f0f0]",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png",
    bg: "bg-[#e6e6e6]",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    bg: "bg-[#ffebcc]",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png",
    bg: "bg-[#e6f2ff]",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png",
    bg: "bg-[#e6f3ff]",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    bg: "bg-[#f0f0f0]",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png",
    bg: "bg-[#e6e6e6]",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    bg: "bg-[#ffebcc]",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png",
    bg: "bg-[#e6f2ff]",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png",
    bg: "bg-[#e6f3ff]",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/793px-Tesla_Motors.svg.png",
    bg: "bg-[#f0f0f0]",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    bg: "bg-[#ffcccc]",
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1005px-Intel_logo_%282006-2020%29.svg.png",
    bg: "bg-[#ccf2ff]",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    bg: "bg-[#e6e6ff]",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
    bg: "bg-[#e6f3ff]",
  },
  {
    name: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/2048px-Toyota_carlogo.svg.png",
    bg: "bg-[#ffe6e6]",
  },
  {
    name: "Coca-Cola",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
    bg: "bg-[#ffcccc]",
  },
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Nike_Logo.svg/1200px-Nike_Logo.svg.png",
    bg: "bg-[#f0f0f0]",
  },
  {
    name: "McDonald's",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png",
    bg: "bg-[#ffebcc]",
  },
  {
    name: "Visa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
    bg: "bg-[#e6f3ff]",
  },
  {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png",
    bg: "bg-[#f0f0f0]",
  },
  {
    name: "Pepsi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/2560px-Pepsi_logo_2014.svg.png",
    bg: "bg-[#e6f3ff]",
  },
  {
    name: "Starbucks",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
    bg: "bg-[#e6ffe6]",
  },
  {
    name: "Sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sony_logo.svg/2560px-Sony_logo.svg.png",
    bg: "bg-[#f0f0f0]",
  },
  {
    name: "HP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png",
    bg: "bg-[#e6f3ff]",
  },
  {
    name: "Shell",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/1200px-Shell_logo.svg.png",
    bg: "bg-[#fff5e6]",
  },
  {
    name: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
    bg: "bg-[#e6f3ff]",
  },
  {
    name: "Mastercard",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png",
    bg: "bg-[#ffebcc]",
  },
  {
    name: "Philips",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Philips_logo.svg/2560px-Philips_logo.svg.png",
    bg: "bg-[#e6f3ff]",
  },
  {
    name: "Siemens",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png",
    bg: "bg-[#ccf2ff]",
  },
  {
    name: "Volkswagen",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2048px-Volkswagen_logo_2019.svg.png",
    bg: "bg-[#e6f3ff]",
  },
  {
    name: "Nestle",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Nestl%C3%A9.svg/1200px-Nestl%C3%A9.svg.png",
    bg: "bg-[#e6ffe6]",
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
    bg: "bg-[#f0f0f0]",
  },
  {
    name: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png",
    bg: "bg-[#e6f3ff]",
  },
  {
    name: "IKEA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/2560px-Ikea_logo.svg.png",
    bg: "bg-[#ffebcc]",
  },
];

// Rotating partners for each dynamic position
const rotatingPartners = {
  pos1: [
    {
      name: "Cotransa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Coteccons_Logo.png/799px-Coteccons_Logo.png",
      bg: "bg-[#ffe6e6]",
    },
    {
      name: "Horoz",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Chicken_icon_05.svg/181px-Chicken_icon_05.svg.png?20101129093303",
      bg: "bg-[#fff0e6]",
    },
    {
      name: "Huawei",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/126px-Huawei_Standard_logo.svg.png?20190815073546",
      bg: "bg-[#e6ffe6]",
    },
  ],
  pos2: [
    {
      name: "Arcelik",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ar%C3%A7elik_logo.svg/120px-Ar%C3%A7elik_logo.svg.png?20170314081010",
      bg: "bg-[#e6f3ff]",
    },
    {
      name: "Socar",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Logo_of_SOCAR.svg/504px-Logo_of_SOCAR.svg.png?20240312081230",
      bg: "bg-[#ffe6e6]",
    },
    {
      name: "Vestel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Vestel_logo.svg/512px-Vestel_logo.svg.png?20210701135626",
      bg: "bg-[#e6ffe6]",
    },
  ],
  pos3: [
    {
      name: "LeoProex",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Leocad-icon-512.png",
      bg: "bg-[#f0e6ff]",
    },
    {
      name: "Globelink",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/420px-Globe_icon.svg.png",
      bg: "bg-[#fff5e6]",
    },
    {
      name: "Ford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ford_Motor_Company_Logo.svg/512px-Ford_Motor_Company_Logo.svg.png",
      bg: "bg-[#e6ffe6]",
    },
  ],
  pos4: [additionalPartners[0], additionalPartners[1], additionalPartners[2]],
  pos5: [additionalPartners[3], additionalPartners[4], additionalPartners[5]],
  pos6: [additionalPartners[6], additionalPartners[7], additionalPartners[8]],
  pos7: [additionalPartners[9], additionalPartners[10], additionalPartners[11]],
};

export function Partners() {
  const [currentIndices, setCurrentIndices] = useState({
    pos1: 0,
    pos2: 0,
    pos3: 0,
    pos4: 0,
    pos5: 0,
    pos6: 0,
    pos7: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices((prev) => ({
        pos1: (prev.pos1 + 1) % rotatingPartners.pos1.length,
        pos2: (prev.pos2 + 1) % rotatingPartners.pos2.length,
        pos3: (prev.pos3 + 1) % rotatingPartners.pos3.length,
        pos4: (prev.pos4 + 1) % rotatingPartners.pos4.length,
        pos5: (prev.pos5 + 1) % rotatingPartners.pos5.length,
        pos6: (prev.pos6 + 1) % rotatingPartners.pos6.length,
        pos7: (prev.pos7 + 1) % rotatingPartners.pos7.length,
      }));
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const renderPartnerCell = (partner: (typeof staticPartners)[0]) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${partner.bg} rounded-lg p-4 flex items-center justify-center h-20 relative overflow-hidden`}
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
    <div className="relative h-20">
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
            <span className="bg-gradient-to-r from-[#FF4D4D] to-[#F7B733] bg-clip-text text-transparent">
              70,000 users
            </span>{" "}
            globally
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our proven track record and commitment to excellence has brought us
            the trust of many industry giants.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {/* Static Partners */}
          {renderPartnerCell(staticPartners[0])}
          {renderPartnerCell(staticPartners[1])}
          {/* Rotating Positions */}
          {renderRotatingCell("pos1")}
          {renderPartnerCell(staticPartners[2])}
          {renderRotatingCell("pos2")}
          {renderPartnerCell(staticPartners[3])}
          {renderRotatingCell("pos3")}

          {/* Second Row */}
          {renderPartnerCell(staticPartners[1])}
          {renderRotatingCell("pos4")}
          {renderRotatingCell("pos5")}
          {renderPartnerCell(staticPartners[3])}
          {renderRotatingCell("pos6")}
          {renderRotatingCell("pos7")}
          {renderPartnerCell(staticPartners[4])}
          {/* Add more static and rotating cells as needed */}
        </div>
      </div>
    </section>
  );
}
