"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { fadeInUp, stagger } from "@/lib/animations";

export default function VisionBanner() {
  return (
    <section className="py-32 relative overflow-hidden bg-secondary text-white">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
        <Globe className="w-96 h-96" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <motion.div variants={fadeInUp} className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Our Global Vision
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Starting in Thika, our vision extends across East Africa. We aim
              to create a replicable model of elderly care that respects African
              traditions while integrating modern health and social support
              systems.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors"
            >
              Read more about our journey <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="md:w-1/3 flex justify-center"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-full border border-white/20">
              <Globe className="w-32 h-32 text-primary" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
