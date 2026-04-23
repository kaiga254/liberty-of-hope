"use client";

import { motion } from "framer-motion";
import DonationModal from "./Modals/DonationModal";
import { MapPin, Calendar, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import { fadeInUp, stagger } from "@/lib/animations";
import { useState } from "react";

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
    image: "/images/medical-camp.png",
    venue: "Thika Stadium",
    date: "August 12, 2025",
    status: "completed",
  },
  {
    id: 2,
    title: "Community Garden Initiative",
    description:
      "Establishing a communal garden where elders can engage in light farming, socialize, and grow their own fresh produce.",
    image: "/images/community-gathering.jpg",
    venue: "Section 9 Community Hall",
    date: "October 5, 2025",
    status: "ongoing",
  },
  {
    id: 3,
    title: "Digital Literacy for Seniors",
    description:
      "A workshop series teaching elders how to use smartphones to stay connected with family and access mobile banking.",
    image: "/images/hero-community.png",
    venue: "Liberty Hub",
    date: "November 2025",
    status: "ongoing",
  },
  {
    id: 4,
    title: "Annual Grandparents Day",
    description:
      "A grand celebration honoring our elders with entertainment, gifts, and a feast for the entire community.",
    image: "/images/elder-portrait.png",
    venue: "Blue Post Hotel",
    date: "December 20, 2025",
    status: "upcoming",
  },
];

const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  const styles = {
    completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
    ongoing: "bg-blue-100 text-blue-700 border-blue-200",
    upcoming: "bg-amber-100 text-amber-700 border-amber-200",
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
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Impact in Action
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-4">
              Our Recent <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we are making a tangible difference in the lives of our
              elders through dedicated action.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-secondary mb-3 font-heading line-clamp-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{project.venue}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{project.date}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    {project.status === "completed" ? (
                      <Link
                        href={`/projects/${project.id}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-colors duration-300 text-sm font-semibold"
                      >
                        Read Story <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <button
                        onClick={() => setIsDonateOpen(true)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent-rose text-white rounded-xl hover:bg-red-700 transition-colors duration-300 text-sm font-semibold shadow-sm cursor-pointer"
                      >
                        Support Project{" "}
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View all link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
            >
              View All Projects{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
      <DonationModal
        isDonateOpen={isDonateOpen}
        setIsDonateOpen={setIsDonateOpen}
      />
    </>
  );
}
