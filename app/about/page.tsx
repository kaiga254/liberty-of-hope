"use client";

import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Shield,
  Globe,
  Award,
} from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, stagger } from "@/lib/animations";

const missionVision = [
  {
    title: "Who We Are",
    icon: Users,
    eyebrow: "Community-based care",
    desc: "Liberty of Hope is a community-based organization headquartered in Thika, Kenya, dedicated to transforming the lives of senior citizens and vulnerable populations.",
    color: "from-teal-500 to-emerald-600",
  },
  {
    title: "Our Mission",
    icon: Heart,
    eyebrow: "Restoring dignity",
    desc: "Our mission is to restore dignity to the elderly through holistic support that addresses their physical, emotional, and social needs, ensuring no one is left behind as they age.",
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Our Vision",
    icon: Globe,
    eyebrow: "Regional leadership",
    desc: "Rooted in Thika, our vision is to become a leader in elderly care across East Africa by using innovation, youth energy, and strategic partnerships to influence policy and change lives.",
    color: "from-amber-500 to-orange-600",
  },
];

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

const team = [
  {
    name: "Grace Wanjiru",
    role: "Founder & Director",
    image: "/images/profiles/pasport.webp",
  },
  {
    name: "Peter Njoroge",
    role: "Programs Manager",
    image: "/images/profiles/pasport.webp",
  },
  {
    name: "Sarah Muthoni",
    role: "Volunteer Coordinator",
    image: "/images/profiles/pasport.webp",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-teal-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/hero-community.png"
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
                  Witnessing the neglect and loneliness faced by many elders in
                  our community, we gathered a team of passionate volunteers to
                  create a sanctuary of care. What started as weekly home visits
                  has grown into a movement restoring dignity, health, and joy
                  to hundreds of elders.
                </p>
                <p>
                  Today, we stand as a beacon of hope, bridging the gap between
                  generations and ensuring that every elder knows they are
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

      {/* Mission & Vision */}
      <section className="py-24 bg-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-primary font-semibold uppercase tracking-wide mb-3"
            >
              Our Purpose
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-5"
            >
              Mission & <span className="text-primary">Vision</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Founded on the belief that aging should be met with celebration
              rather than isolation, we work to ensure elders live with the
              honor, health, and happiness they deserve.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {missionVision.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all h-full"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-lg`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
                    {item.eyebrow}
                  </p>
                  <h3 className="text-2xl font-bold font-heading text-secondary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
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
