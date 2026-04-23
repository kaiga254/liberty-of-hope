"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/animations";
import { Heart, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-community.png"
          alt="Community care moment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      {/* Floating accent shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight text-white leading-[1.1]"
            >
              Restoring Dignity{" "}
              <span className="text-primary-light">& Joy</span> to Every Senior
              Life
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            >
              We believe aging should be a celebration, not a sentence of
              isolation. Liberty of Hope ensures seniors in Thika and beyond
              live with honor, health, and happiness.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/donate"
                className="group bg-accent-rose hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5 fill-current" />
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                Get Involved
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Mini trust indicator */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex items-center gap-6 text-white/60 text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">500+</span>
                <span>Seniors Reached</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">12+</span>
                <span>Medical Camps</span>
              </div>
              <div className="w-px h-8 bg-white/20 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-2xl font-bold text-white">50+</span>
                <span>Volunteers</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white z-10" />
    </section>
  );
}
