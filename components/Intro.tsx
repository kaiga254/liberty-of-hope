"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

export default function Intro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-6 leading-tight">
              Millions of Seniors Face{" "}
              <span className="text-primary">Isolation & Neglect</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              In Kenya, many elderly individuals live in extreme poverty,
              forgotten by society and separated from their families. They lack
              access to basic healthcare, proper nutrition, and the simple
              dignity of a clean home.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              <strong className="text-secondary">Liberty of Hope</strong> was
              founded to change this narrative — turning aging from a sentence
              of isolation into a celebration of life, filled with honor,
              health, and genuine human connection.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src="/images/elder-portrait.png"
                alt="An elderly Kenyan grandmother smiling warmly"
                className="relative w-full h-[450px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
