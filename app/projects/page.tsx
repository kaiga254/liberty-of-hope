"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Thika Medical Camp 2024",
    category: "Health",
    date: "March 15, 2024",
    location: "Makongeni, Thika",
    description:
      "Served over 200 seniors with free medical checkups, vision screening, and diabetes management education.",
    status: "Completed",
    imageColor: "bg-blue-100",
  },
  {
    title: "Grandparents' Social Day",
    category: "Community",
    date: "Ongoing (Monthly)",
    location: "Liberty Hall",
    description:
      "A monthly gathering bringing together 50+ seniors for tea, games, and storytelling sessions to combat loneliness.",
    status: "Ongoing",
    imageColor: "bg-purple-100",
  },
  {
    title: "Home Hygiene Drive",
    category: "Dignity",
    date: "Feb 2024",
    location: "Kiganjo Estate",
    description:
      "Renovated living spaces and provided bedding and hygiene kits for 15 vulnerable elders living in squalid conditions.",
    status: "Completed",
    imageColor: "bg-orange-100",
  },
  {
    title: "Urban Farming Initiative",
    category: "Nutrition",
    date: "Upcoming",
    location: "Community Gardens",
    description:
      "Launching a program to teach and equip seniors with vertical sack gardens for sustainable vegetables.",
    status: "Upcoming",
    imageColor: "bg-green-100",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading text-secondary mb-6"
          >
            Our Impact in Action
          </motion.h1>
          <p className="text-xl text-gray-600">
            Real stories of restored dignity. See how we are making a difference
            in the lives of our elders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row"
            >
              {/* Image Placeholder */}
              <div
                className={`sm:w-2/5 h-48 sm:h-auto ${project.imageColor} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-10 bg-linear-to-br from-black/20 to-transparent"></div>
                <span className="text-gray-500 font-medium relative z-10">
                  Project Image
                </span>
              </div>

              {/* Content */}
              <div className="p-8 sm:w-3/5 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded ${
                      project.status === "Ongoing"
                        ? "text-green-600 bg-green-50"
                        : project.status === "Upcoming"
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-500 bg-gray-100"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-secondary mb-2 font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 grow">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <Link
                    href="/about"
                    className="inline-flex items-center text-primary text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Read Story <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
