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
    href: "/contact",
    color: "bg-primary hover:bg-teal-800 shadow-teal-500/30",
  },
  {
    title: "Partner",
    description:
      "Collaborate with us to scale our impact and reach more elders in need.",
    icon: Handshake,
    href: "/contact",
    color: "bg-accent hover:bg-amber-600 shadow-amber-500/30",
  },
];

export default function VisionBanner() {
  return (
    <section className="relative isolate overflow-hidden border-b-[8px] border-accent bg-[#eefaf7] py-24 text-secondary shadow-[inset_0_1px_0_rgba(15,118,110,0.12)] md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/community-gathering.jpg"
          alt=""
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[#eefaf7]/95" />
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-primary/15" />

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
            className="mb-4 inline-block rounded-full border border-primary/20 bg-white px-4 py-1.5 text-sm font-semibold text-primary shadow-sm"
          >
            Take Action Today
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold font-heading mb-4"
          >
            Every Elder Deserves{" "}
            <span className="text-primary-light">Dignity</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-lg text-slate-600"
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
                  className="group block rounded-2xl border border-primary/15 bg-white p-8 text-center shadow-xl shadow-teal-900/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-teal-900/15"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center ${action.color} text-white shadow-lg transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">
                    {action.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-slate-600">
                    {action.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
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
