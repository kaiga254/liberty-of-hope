"use client";

import { motion, Variants } from "framer-motion";
import {
  Stethoscope,
  Brain,
  Apple,
  HeartHandshake,
  Megaphone,
} from "lucide-react";

const pillars = [
  {
    title: "Health & Wellness",
    description:
      "Organizing medical camps, geriatric screenings, and partnerships with local hospitals for accessible healthcare.",
    outcome: "200+ seniors screened in our latest medical camp",
    icon: Stethoscope,
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    title: "Mental Health & Connection",
    description:
      "Combating isolation through peer support groups, social gatherings, and community visits for mental wellness.",
    outcome: "Weekly social meetups reducing loneliness by 70%",
    icon: Brain,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Nutrition & Lifestyle",
    description:
      "Providing food baskets, nutritional education, and supporting sustainable kitchen gardens for healthy aging.",
    outcome: "50+ elders receiving monthly food baskets",
    icon: Apple,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Dignity & Personal Care",
    description:
      "Restoring self-esteem through personal grooming, hygiene supplies, and home cleanliness for dignified living.",
    outcome: "15 homes renovated in our latest hygiene drive",
    icon: HeartHandshake,
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "Advocacy & Outreach",
    description:
      "Advocating for elder-friendly policies and conducting home visits to identify and support the most vulnerable.",
    outcome: "Partnered with 2 county governments for policy change",
    icon: Megaphone,
    gradient: "from-amber-500 to-orange-600",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function CoreValues() {
  return (
    <section className="py-24 md:py-32 bg-sage relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-4">
              Our Pillars of <span className="text-primary">Care</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              A holistic approach addressing the physical, emotional, and social
              needs of our elderly community.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pillar.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div
                    className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${pillar.gradient} text-white shadow-lg shadow-black/5 transform group-hover:rotate-3 group-hover:scale-110 transition-all duration-300`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 grow">
                    {pillar.description}
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
