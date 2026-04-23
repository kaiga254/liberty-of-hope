"use client";

import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Before Liberty of Hope came into my life, I spent most days alone. Now I have friends, regular health checkups, and I feel like I matter again.",
    name: "Mama Wanjiku",
    role: "Beneficiary, Thika",
    image: "/images/elder-portrait.png",
  },
  {
    quote:
      "Volunteering with Liberty of Hope changed my perspective on aging. Every elder has a story worth hearing and a life worth celebrating.",
    name: "James Mwangi",
    role: "Youth Volunteer",
    image: "/images/hero-community.png",
  },
  {
    quote:
      "The medical camp was a blessing. I got my eyes checked for the first time in years and received free medication. God bless this organization.",
    name: "Mzee Kamau",
    role: "Beneficiary, Kiganjo",
    image: "/images/medical-camp.png",
  },
];

const partners = [
  "Kiambu County Health",
  "Kenya Red Cross",
  "UN Habitat",
  "Safaricom Foundation",
  "World Vision",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-4">
            Stories That <span className="text-primary">Inspire</span> Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the people whose lives we have touched through our
            programs and community support.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-semibold text-secondary">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest font-medium mb-8">
            Trusted by our partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div
                key={partner}
                className="px-6 py-3 bg-gray-50 rounded-xl text-gray-400 font-semibold text-sm hover:text-primary hover:bg-primary/5 transition-colors border border-gray-100"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
