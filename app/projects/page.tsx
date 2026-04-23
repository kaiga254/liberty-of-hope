"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import { fadeInUp, stagger } from "@/lib/animations";
import { useState } from "react";
import DonationModal from "@/components/Modals/DonationModal";

const projects = [
  {
    id: 1,
    title: "Thika Medical Camp 2024",
    category: "Health",
    date: "March 15, 2024",
    location: "Makongeni, Thika",
    description:
      "Served over 200 seniors with free medical checkups, vision screening, and diabetes management education.",
    status: "Completed",
    image: "/images/medical-camp.png",
  },
  {
    id: 2,
    title: "Grandparents' Social Day",
    category: "Community",
    date: "Ongoing (Monthly)",
    location: "Liberty Hub",
    description:
      "A monthly gathering bringing together 50+ seniors for tea, games, and storytelling sessions to combat loneliness.",
    status: "Ongoing",
    image: "/images/community-gathering.jpg",
  },
  {
    id: 3,
    title: "Home Hygiene Drive",
    category: "Dignity",
    date: "Feb 2024",
    location: "Kiganjo Estate",
    description:
      "Renovated living spaces and provided bedding and hygiene kits for 15 vulnerable elders living in squalid conditions.",
    status: "Completed",
    image: "/images/hero-community.png",
  },
  {
    id: 4,
    title: "Urban Farming Initiative",
    category: "Nutrition",
    date: "Upcoming",
    location: "Community Gardens",
    description:
      "Launching a program to teach and equip seniors with vertical sack gardens for sustainable vegetables.",
    status: "Upcoming",
    image: "/images/elder-portrait.png",
  },
];

export default function ProjectsPage() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Hero */}
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
                className="text-4xl md:text-6xl font-bold font-heading mb-6"
              >
                Impact in Action
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-teal-100 leading-relaxed"
              >
                Real stories of restored dignity. See how we are making a
                difference in the lives of our elders.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row"
                >
                  {/* Image */}
                  <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="p-8 sm:w-3/5 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          project.status === "Ongoing"
                            ? "text-emerald-600 bg-emerald-50"
                            : project.status === "Upcoming"
                              ? "text-amber-600 bg-amber-50"
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
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-6 grow">
                      {project.description}
                    </p>

                    <div className="mt-auto flex gap-3">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center text-primary text-sm font-semibold hover:gap-2 transition-all"
                      >
                        Read Story <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      {project.status !== "Completed" && (
                        <button
                          onClick={() => setIsDonateOpen(true)}
                          className="inline-flex items-center gap-1.5 text-accent-rose text-sm font-semibold cursor-pointer"
                        >
                          <Heart className="w-4 h-4 fill-current" /> Support
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <DonationModal
        isDonateOpen={isDonateOpen}
        setIsDonateOpen={setIsDonateOpen}
      />
    </>
  );
}
