"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Users, Star } from "lucide-react";

const values = [
  {
    title: "Dignity",
    description: "We honor the life experience of every elder.",
    gradient: "from-orange-400 to-red-500",
    icon: Star,
  },
  {
    title: "Compassion",
    description: "We serve with kindness and empathy.",
    gradient: "from-pink-500 to-rose-500",
    icon: Heart,
  },
  {
    title: "Integrity",
    description: "Transparency and accountability in all we do.",
    gradient: "from-emerald-400 to-teal-600",
    icon: Shield,
  },
  {
    title: "Inclusivity",
    description: "We serve all, regardless of background.",
    gradient: "from-blue-400 to-indigo-600",
    icon: Users,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function CoreValues() {
  return (
    <section className="py-20 md:py-32 bg-orange-50/30 relative overflow-hidden">
      {/* Background Decor Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center bg-orange-100 p-3 rounded-full mb-4">
              <Star className="w-6 h-6 text-primary" fill="currentColor" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-base md:text-lg text-secondary/70 max-w-2xl mx-auto">
              The foundational principles that guide our mission and shape our
              commitment to the community.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-orange-100/50 overflow-hidden flex flex-col h-full"
              >
                {/* Subtle background gradient reveal on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`}
                />

                {/* Top border highlight */}
                <div
                  className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${value.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
                />

                <div className="relative z-10 flex flex-col h-full items-start">
                  <div
                    className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${value.gradient} text-white shadow-lg shadow-black/5 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 ease-out`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold font-heading text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-secondary/70 leading-relaxed font-medium transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
