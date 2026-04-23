"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { Users, Stethoscope, HandHeart, MapPin } from "lucide-react";

const stats = [
  {
    label: "Seniors Reached",
    value: 500,
    suffix: "+",
    icon: Users,
    color: "text-teal-400",
  },
  {
    label: "Medical Camps",
    value: 12,
    suffix: "+",
    icon: Stethoscope,
    color: "text-emerald-400",
  },
  {
    label: "Active Volunteers",
    value: 20,
    suffix: "+",
    icon: HandHeart,
    color: "text-amber-400",
  },
  {
    label: "Counties Reached",
    value: 2,
    suffix: "+",
    icon: MapPin,
    color: "text-rose-400",
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
      className="text-4xl md:text-5xl font-bold font-heading text-white block mb-2"
    />
  );
};

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-teal-700 to-teal-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
            Our Impact
          </h2>
          <p className="text-teal-200 text-lg max-w-xl mx-auto">
            We are committed to making a tangible difference in the lives of the
            elderly in our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-sm md:text-base text-teal-200 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
