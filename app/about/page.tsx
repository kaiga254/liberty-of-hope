"use client";

import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Shield,
  Globe,
  MapPin,
  Phone,
  Mail,
  Send,
  Award,
  Calendar,
} from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, stagger } from "@/lib/animations";

const values = [
  {
    title: "Dignity",
    icon: Award,
    desc: "We honor the life experience of every elder.",
    color: "from-teal-500 to-emerald-600",
  },
  {
    title: "Compassion",
    icon: Heart,
    desc: "We serve with kindness and empathy.",
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Integrity",
    icon: Shield,
    desc: "We are transparent and accountable in all we do.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Inclusivity",
    icon: Globe,
    desc: "We serve all, regardless of background or status.",
    color: "from-amber-500 to-orange-600",
  },
];

const milestones = [
  {
    year: "2020",
    event: "Founded in Thika, Kenya with a team of 5 volunteers",
  },
  { year: "2021", event: "First medical camp serving 50 seniors" },
  { year: "2022", event: "Expanded to 2 counties, launched nutrition program" },
  { year: "2023", event: "Reached 300+ seniors, partnered with county health" },
  { year: "2024", event: "500+ seniors reached, 12 medical camps conducted" },
];

const team = [
  {
    name: "Grace Wanjiru",
    role: "Founder & Director",
    image: "/images/hero-community.png",
  },
  {
    name: "Peter Njoroge",
    role: "Programs Manager",
    image: "/images/medical-camp.png",
  },
  {
    name: "Sarah Muthoni",
    role: "Volunteer Coordinator",
    image: "/images/community-gathering.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-teal-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/community-gathering.png"
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
              className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight"
            >
              Our Story
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-teal-100 leading-relaxed"
            >
              Born from a simple belief that aging should be a celebration, not
              a sentence of isolation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-6">
                How It All <span className="text-primary">Began</span>
              </h2>
              <div className="text-lg text-gray-600 leading-relaxed space-y-5">
                <p>
                  Liberty of Hope was founded in Thika, Kenya, with a powerful
                  belief:
                  <strong className="text-secondary">
                    {" "}
                    aging should be a celebration, not a sentence of isolation.
                  </strong>
                </p>
                <p>
                  Witnessing the neglect and loneliness faced by many seniors in
                  our community, we gathered a team of passionate volunteers to
                  create a sanctuary of care. What started as weekly home visits
                  has grown into a movement restoring dignity, health, and joy
                  to hundreds of elders.
                </p>
                <p>
                  Today, we stand as a beacon of hope, bridging the gap between
                  generations and ensuring that every senior knows they are
                  valued, loved, and never forgotten.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <img
                  src="/images/hero-community.png"
                  alt="Community care"
                  className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-sage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary">
              Our Milestones
            </h2>
          </motion.div>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <Calendar className="w-5 h-5" />
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-8 bg-primary/20 mt-2" />
                  )}
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-1 group-hover:shadow-md transition-shadow">
                  <span className="text-primary font-bold text-lg">
                    {m.year}
                  </span>
                  <p className="text-gray-600 mt-1">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group text-center p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all bg-white"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center bg-gradient-to-br ${value.color} text-white shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2 font-heading">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary">
              Meet Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-secondary">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
