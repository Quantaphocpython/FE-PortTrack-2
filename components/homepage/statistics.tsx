'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Globe2, HeadphonesIcon, Ship } from 'lucide-react';
import { useRef } from 'react';

const stats = [
  {
    icon: Ship,
    value: 12,
    unit: 'Million',
    label: 'Containers Shipped Annually',
    color: 'bg-blue-500',
  },
  {
    icon: Globe2,
    value: 150,
    unit: '+',
    label: 'Countries Served',
    color: 'bg-green-500',
  },
  {
    icon: Clock,
    value: 99.9,
    unit: '%',
    label: 'On-Time Delivery Rate',
    color: 'bg-orange-500',
  },
  {
    icon: HeadphonesIcon,
    value: 24,
    unit: '/7',
    label: 'Customer Support',
    color: 'bg-purple-500',
  },
];

export function Statistics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={containerRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Our Global Impact</h2>
          <p className="text-gray-600 mt-2">
            Delivering excellence across the world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div
                  className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  className="text-4xl font-bold mb-2 tabular-nums"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <CounterAnimation
                    from={0}
                    to={stat.value}
                    scrollYProgress={scrollYProgress}
                  />
                  <span className="text-3xl ml-1">{stat.unit}</span>
                </motion.div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterAnimation({
  from,
  to,
  scrollYProgress,
}: {
  from: number;
  to: number;
  scrollYProgress: any;
}) {
  const value = useTransform(scrollYProgress, [0, 0.5, 1], [from, to, to]);

  return (
    <motion.span>
      {useTransform(value, (latest) => Math.round(latest * 10) / 10)}
    </motion.span>
  );
}
