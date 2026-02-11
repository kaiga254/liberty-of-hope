"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Intro() {
  return (
    <section className="py-20 bg-orange-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold font-heading text-secondary mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Liberty of Hope is a community-based organization rooted in the
            heart of Thika, Kenya. We are dedicated to changing the narrative of
            aging from one of isolation/neglect to one of celebration and care.
            We believe every elder deserves to feel valued, supported, and
            heard.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
