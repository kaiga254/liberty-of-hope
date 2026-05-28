"use client";

import { motion } from "framer-motion";
import { Heart, Users, Smile, type LucideIcon } from "lucide-react";
import { fadeInUp, stagger } from "@/lib/animations";
import {
  impactHighlights as highlights,
  type ImpactIconName,
} from "@/lib/home";

const impactIcons: Record<ImpactIconName, LucideIcon> = {
  heart: Heart,
  users: Users,
  smile: Smile,
};

export default function ImpactHighlights() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-4">
            Our Areas of <span className="text-primary">Focus</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to making a tangible difference in the lives of the
            elderly in our community.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="flex flex-col gap-24"
        >
          {highlights.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = impactIcons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12 md:gap-16`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.colorClass} shadow-sm`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="h-px flex-grow bg-gray-200 rounded-full" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-5 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
