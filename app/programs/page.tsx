"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Brain,
  Apple,
  HeartHandshake,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { fadeInUp, stagger } from "@/lib/animations";

const programs = [
  {
    title: "Health & Wellness",
    description:
      "Access to healthcare is a fundamental right. We organize medical camps, geriatric screenings, and partner with local hospitals to ensure our seniors receive the care they need.",
    icon: Stethoscope,
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    title: "Mental Health & Connection",
    description:
      "Loneliness is a silent crisis. We combat isolation through peer support groups, social outings, and community visits to keep our elders connected and mentally sharp.",
    icon: Brain,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Nutrition & Lifestyle",
    description:
      "Good nutrition is the foundation of healthy aging. We provide food baskets, nutritional education, and support for sustainable kitchen gardens.",
    icon: Apple,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Dignity & Personal Care",
    description:
      "We restore self-esteem by assisting with personal grooming, hygiene supplies, and home cleanliness, ensuring every elder lives with dignity.",
    icon: HeartHandshake,
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "Advocacy & Outreach",
    description:
      "We are the voice for the voiceless. We advocate for policies that protect the rights of the aged and conduct home visits to identify those most in need.",
    icon: Megaphone,
    gradient: "from-amber-500 to-orange-600",
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-teal-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/medical-camp.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold font-heading mb-6"
            >
              Our Pillars of Impact
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-teal-100 leading-relaxed"
            >
              We hold a holistic approach to restoring dignity. We address the
              physical, emotional, and social needs of our elderly community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 flex flex-col h-full relative overflow-hidden"
                >
                  {/* Accent bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${program.gradient} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />

                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${program.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-secondary mb-4 font-heading group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 grow">
                    {program.description}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href="/get-involved"
                      className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all group/link"
                    >
                      Get Involved{" "}
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 bg-secondary rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-bold font-heading mb-4">
                Have an idea for a program?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                We are always looking for new ways to serve our elders better.
                Reach out to us if you want to partner or volunteer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-secondary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
                >
                  Contact Us
                </Link>
                <Link
                  href="/get-involved"
                  className="bg-primary hover:bg-teal-800 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Become a Volunteer
                </Link>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-20 -mt-20" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mb-20" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
