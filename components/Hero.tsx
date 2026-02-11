"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center bg-secondary overflow-hidden">
      {/* Background Image Placeholder / Overlay */}
      <div className="absolute inset-0 z-0">
        {/* In a real project, replace this with an <Image /> component */}
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-r from-secondary/90 to-secondary/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
          >
            Restoring Dignity, <br />
            <span className="text-primary italic">One Elder at a Time</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light"
          >
            Ensuring our seniors in Thika and beyond live with honor, health,
            and happiness.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/about#contact"
              className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Join Our Mission
            </Link>
            <Link
              href="/programs"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Our Programs
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
