"use client";

import { motion } from "framer-motion";
import { Heart, Users, Smile } from "lucide-react";
import { fadeInUp, stagger } from "@/lib/animations";

export default function ImpactHighlights() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Highlight 1 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3 font-heading">
              Healthcare Access
            </h3>
            <p className="text-gray-600">
              Providing regular medical checkups, screenings, and health
              education to ensure physical well-being.
            </p>
          </motion.div>

          {/* Highlight 2 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3 font-heading">
              Timeless Connection
            </h3>
            <p className="text-gray-600">
              Combating loneliness through peer support groups and community
              social gatherings.
            </p>
          </motion.div>

          {/* Highlight 3 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
              <Smile className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3 font-heading">
              Restored Dignity
            </h3>
            <p className="text-gray-600">
              Support with personal care, hygiene, and grooming to build
              confidence and self-worth.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
