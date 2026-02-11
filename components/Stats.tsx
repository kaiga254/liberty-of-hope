"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";

const stats = [
  {
    label: "Elders Reached",
    value: 500,
    suffix: "+",
  },
  {
    label: "Projects Done",
    value: 20,
    suffix: "+",
  },
  {
    label: "Counties",
    value: 2,
    suffix: "+",
  },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <span
      ref={ref}
      className="text-4xl md:text-6xl font-bold font-heading text-white block mb-2"
    />
  );
};

export default function Stats() {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="py-8 md:py-0 px-4">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-lg md:text-xl text-orange-200 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
