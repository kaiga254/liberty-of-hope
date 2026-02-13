"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import { fadeInUp, stagger } from "@/lib/animations";

type ProjectStatus = "completed" | "ongoing" | "upcoming";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  venue: string;
  date: string;
  status: ProjectStatus;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Thika Elders Medical Camp",
    description:
      "A comprehensive medical checkup camp providing free screenings, medicine, and health education for over 200 seniors.",
    image: "/images/hero.png", // Using placeholder image as per context
    venue: "Thika Stadium",
    date: "August 12, 2025",
    status: "completed",
  },
  {
    id: 2,
    title: "Community Garden Initiative",
    description:
      "Establishing a communal garden where elders can engage in light farming, socialize, and grow their own fresh produce.",
    image: "/images/hero.png",
    venue: "Section 9 Community Hall",
    date: "October 5, 2025",
    status: "ongoing",
  },
  {
    id: 3,
    title: "Digital Literacy for Seniors",
    description:
      "A workshop series teaching elders how to use smartphones to stay connected with family and access mobile banking.",
    image: "/images/hero.png",
    venue: "Liberty Hub",
    date: "November 2025",
    status: "ongoing",
  },
  {
    id: 4,
    title: "Annual Grandparents Day",
    description:
      "A grand celebration honoring our elders with entertainment, gifts, and a feast for the entire community.",
    image: "/images/hero.png",
    venue: "Blue Post Hotel",
    date: "December 20, 2025",
    status: "upcoming",
  },
];

const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  const styles = {
    completed: "bg-green-100 text-green-700 border-green-200",
    ongoing: "bg-blue-100 text-blue-700 border-blue-200",
    upcoming: "bg-orange-100 text-orange-700 border-orange-200",
  };

  return (
    <span
      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default function RecentProjects() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we are making a tangible difference in the lives of our
            elders through dedicated action.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                {/* Loading state placeholder logic visually */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <StatusBadge status={project.status} />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-secondary mb-3 font-heading line-clamp-2">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{project.venue}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{project.date}</span>
                </div>

                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto">
                  {project.status === "completed" ? (
                    <Link
                      href="#"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-colors duration-300 text-sm font-semibold"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link
                      href="#"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 text-sm font-semibold shadow-md hover:shadow-lg"
                    >
                      Support Project <Heart className="w-4 h-4 fill-current" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
