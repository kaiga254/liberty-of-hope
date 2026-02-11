"use client";

import { motion } from "framer-motion";
import { Heart, Users, Smile } from "lucide-react";
import { fadeInUp, stagger } from "@/lib/animations";

const highlights = [
  {
    title: "Healthcare Access",
    description: `Providing regular medical checkups, screenings, and health education to ensure physical well-being. We partner with local clinics to bring doctors directly to the elderly, removing the barrier of transportation and cost.
      Providing regular medical checkups, screenings, and health education to ensure physical well-being. We partner with local clinics to bring doctors directly to the elderly, removing the barrier of transportation and cost.
      Providing regular medical checkups, screenings, and health education to ensure physical well-being. We partner with local clinics to bring doctors directly to the elderly, removing the barrier of transportation and cost.
      Providing regular medical checkups, screenings, and health education to ensure physical well-being. We partner with local clinics to bring doctors directly to the elderly, removing the barrier of transportation and cost.
      Providing regular medical checkups, screenings, and health education to ensure physical well-being. We partner with local clinics to bring doctors directly to the elderly, removing the barrier of transportation and cost.Providing regular medical checkups, screenings, and health education to ensure physical well-being. We partner with local clinics to bring doctors directly to the elderly, removing the barrier of transportation and cost.`,
    icon: Heart,
    colorClass: "bg-orange-100 text-primary",
    image: "/images/hero.png",
  },
  {
    title: "Timeless Connection",
    description: `Combating loneliness through peer support groups and community social gatherings. Our weekly meetups provide a safe space for seniors to share stories, play games, and build lasting friendships that enrich their golden years.
      Combating loneliness through peer support groups and community social gatherings. Our weekly meetups provide a safe space for seniors to share stories, play games, and build lasting friendships that enrich their golden years.
      Combating loneliness through peer support groups and community social gatherings. Our weekly meetups provide a safe space for seniors to share stories, play games, and build lasting friendships that enrich their golden years.
      Combating loneliness through peer support groups and community social gatherings. Our weekly meetups provide a safe space for seniors to share stories, play games, and build lasting friendships that enrich their golden years.
      Combating loneliness through peer support groups and community social gatherings. Our weekly meetups provide a safe space for seniors to share stories, play games, and build lasting friendships that enrich their golden years.`,
    icon: Users,
    colorClass: "bg-purple-100 text-secondary",
    image: "/images/hero.png",
  },
  {
    title: "Restored Dignity",
    description: `Support with personal care, hygiene, and grooming to build confidence and self-worth. We believe that looking good feels good, and our volunteers are dedicated to ensuring every elder feels respected and cared for.
      Support with personal care, hygiene, and grooming to build confidence and self-worth. We believe that looking good feels good, and our volunteers are dedicated to ensuring every elder feels respected and cared for.
      Support with personal care, hygiene, and grooming to build confidence and self-worth. We believe that looking good feels good, and our volunteers are dedicated to ensuring every elder feels respected and cared for.
      Support with personal care, hygiene, and grooming to build confidence and self-worth. We believe that looking good feels good, and our volunteers are dedicated to ensuring every elder feels respected and cared for.
      Support with personal care, hygiene, and grooming to build confidence and self-worth. We believe that looking good feels good, and our volunteers are dedicated to ensuring every elder feels respected and cared for.`,
    icon: Smile,
    colorClass: "bg-red-50 text-accent",
    image: "/images/hero.png",
  },
];

export default function ImpactHighlights() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12 md:gap-20`}
              >
                {/* Content Section */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center ${item.colorClass} shadow-sm`}
                    >
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div className="h-0.5 flex-grow bg-gray-100 rounded-full"></div>
                  </div>

                  <h3 className="text-3xl font-bold text-secondary mb-6 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute inset-0 bg-secondary/10 hover:bg-transparent transition-colors duration-300 z-10"></div>
                    {/* Placeholder for Image component - using standard img for now as per instructions to not break things if Image not configured */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover"
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
