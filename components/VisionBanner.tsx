"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, Handshake, ArrowRight } from "lucide-react";
import { fadeInUp, stagger } from "@/lib/animations";

const actions = [
  {
    title: "Donate",
    description:
      "Your gift directly supports healthcare, food, and shelter for vulnerable elders.",
    icon: Heart,
    href: "/donate",
    color: "bg-rose-500 hover:bg-rose-600 shadow-rose-500/30",
  },
  {
    title: "Volunteer",
    description:
      "Join our team of compassionate volunteers making a difference every day.",
    icon: Users,
    href: "/get-involved",
    color: "bg-primary hover:bg-teal-800 shadow-teal-500/30",
  },
  {
    title: "Partner",
    description:
      "Collaborate with us to scale our impact and reach more seniors in need.",
    icon: Handshake,
    href: "/contact",
    color: "bg-accent hover:bg-amber-600 shadow-amber-500/30",
  },
];

export default function VisionBanner() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-secondary text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/community-gathering.png"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90" />
      </div>

      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block bg-white/10 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-white/10"
          >
            Take Action Today
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold font-heading mb-4"
          >
            Every Senior Deserves{" "}
            <span className="text-primary-light">Dignity</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Whether you donate, volunteer, or partner with us — your support
            transforms the golden years of our elders from isolation to
            celebration.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <motion.div key={action.title} variants={fadeInUp}>
                <Link
                  href={action.href}
                  className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center ${action.color} text-white shadow-lg transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">
                    {action.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                    {action.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary-light font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
