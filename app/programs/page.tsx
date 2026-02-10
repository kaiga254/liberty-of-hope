"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Users,
  Apple,
  HeartHandshake,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Health & Wellness",
    description:
      "Access to healthcare is a fundamental right. We organize medical camps, geriatric screenings, and partner with local hospitals to ensure our seniors receive the care they need.",
    icon: Stethoscope,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Mental Health & Connection",
    description:
      "Loneliness is a silent crisis. We combat isolation through peer support groups, social outings, and community visits to keep our elders connected and mentally sharp.",
    icon: Users,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Nutrition & Lifestyle",
    description:
      "Good nutrition is the foundation of healthy aging. We provide food baskets, nutritional education, and support for sustainable kitchen gardens.",
    icon: Apple,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Dignity & Personal Care",
    description:
      "We restore self-esteem by assisting with personal grooming, hygiene supplies, and home cleanliness, ensuring every elder lives with dignity.",
    icon: HeartHandshake,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Advocacy & Outreach",
    description:
      "We are the voice for the voiceless. We advocate for policies that protect the rights of the aged and conduct home visits to identify those most in need.",
    icon: Megaphone,
    color: "bg-orange-50 text-orange-600",
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading text-secondary mb-6"
          >
            Our Pillars of Impact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            A holistic approach to restoring dignity. We address the physical,
            emotional, and social needs of our elderly community.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 flex flex-col h-full"
            >
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${program.color} transition-transform duration-300 group-hover:scale-110`}
              >
                <program.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">
                {program.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8 grow">
                {program.description}
              </p>

              <div className="mt-auto">
                <Link
                  href="/about#contact"
                  className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all group"
                >
                  Get Involved{" "}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-secondary rounded-2xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold font-heading mb-4">
              Have an idea for a program?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We are always looking for new ways to serve our elders better.
              Reach out to us if you want to partner or volunteer.
            </p>
            <Link
              href="/about#contact"
              className="bg-white text-secondary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </div>
          {/* abstract shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-20 -mt-20"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mb-20"></div>
        </motion.div>
      </div>
    </div>
  );
}
