"use client";

import { motion } from "framer-motion";
import { Heart, Users, Smile } from "lucide-react";
import { fadeInUp, stagger } from "@/lib/animations";

const highlights = [
  {
    title: "Healthcare Access",
    description:
      "Providing regular medical checkups, screenings, and health education to ensure physical well-being. We partner with local clinics to bring doctors directly to the elderly, removing the barrier of transportation and cost.",
    icon: Heart,
    colorClass: "bg-teal-100 text-primary",
    image: "/images/medical-camp.png",
  },
  {
    title: "Timeless Connection",
    description:
      "Combating loneliness through peer support groups and community social gatherings. Our weekly meetups provide a safe space for seniors to share stories, play games, and build lasting friendships that enrich their golden years.",
    icon: Users,
    colorClass: "bg-violet-100 text-violet-600",
    image: "/images/community-gathering.jpg",
  },
  {
    title: "Restored Dignity",
    description:
      "Support with personal care, hygiene, and grooming to build confidence and self-worth. We believe that looking good feels good, and our volunteers ensure every elder feels respected and cared for.",
    icon: Smile,
    colorClass: "bg-amber-100 text-accent",
    image: "/images/restoring-dignity.jpg",
  },
];

export default function ImpactHighlights() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-4">
            Our Areas of <span className="text-primary">Focus</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to making a tangible difference in the lives of the
            elderly in our community.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="flex flex-col gap-24"
        >
          {highlights.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12 md:gap-16`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.colorClass} shadow-sm`}
                    >
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div className="h-px flex-grow bg-gray-200 rounded-full" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-5 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
