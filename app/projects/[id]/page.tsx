"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowLeft, Heart, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import DonationModal from "@/components/Modals/DonationModal";

const projectsData = [
  {
    id: "1",
    title: "Thika Elders Medical Camp 2024",
    category: "Health",
    date: "March 15, 2024",
    location: "Makongeni, Thika",
    description:
      "A comprehensive medical checkup camp providing free screenings, medicine, vision screening, and diabetes management education for over 200 seniors.",
    details:
      "Our annual medical camp addressed the glaring health gaps faced by elders in Thika. Many seniors lack access to basic healthcare due to mobility issues and financial constraints. During this camp, we partnered with local doctors, nurses, and ophthalmologists to offer comprehensive health assessments. Beyond just checkups, we distributed essential medications and provided educational workshops on managing chronic conditions like diabetes and hypertension.",
    goals: [
      "Screen over 200 elders for eye defects",
      "Provide free essential medicine",
      "Offer education on diabetes dietary management",
    ],
    status: "Completed",
    image: "/images/medical-camp.png",
  },
  {
    id: "2",
    title: "Grandparents' Social Day",
    category: "Community",
    date: "Ongoing (Monthly)",
    location: "Liberty Hub",
    description:
      "A monthly gathering bringing together seniors for tea, games, and storytelling sessions to combat loneliness and isolation.",
    details:
      "Loneliness is one of the silent killers among the elderly. Grandparents' Social Day is our ongoing initiative to provide a safe, warm, and engaging environment where elders can connect. Through board games, traditional storytelling, and shared meals, we breathe life and joy back into their routines. It also serves as a platform for them to share their vast wisdom with younger volunteers.",
    goals: [
      "Foster community and belonging",
      "Reduce isolation and depression rates",
      "Provide nutritional support through shared meals",
    ],
    status: "Ongoing",
    image: "/images/community-gathering.png",
  },
  {
    id: "3",
    title: "Home Hygiene Drive",
    category: "Dignity",
    date: "February 2024",
    location: "Kiganjo Estate",
    description:
      "Renovated living spaces and provided bedding and hygiene kits for vulnerable elders living in squalid conditions.",
    details:
      "Dignity begins at home. Our Home Hygiene Drive targeted elders living in extremely poor conditions, often without basic sanitation or comfortable bedding. Our team of volunteers spent the month deep-cleaning homes, repairing leaking roofs, and replacing tattered mattresses with new, comfortable ones. We also distributed hygiene kits containing soap, sanitizers, adult diapers, and fresh clothing.",
    goals: [
      "Deep clean and sanitize 15 homes",
      "Distribute sanitary kits and proper bedding",
      "Improve overall living standards",
    ],
    status: "Completed",
    image: "/images/hero-community.png",
  },
  {
    id: "4",
    title: "Urban Farming Initiative",
    category: "Nutrition",
    date: "Upcoming",
    location: "Community Gardens",
    description:
      "Launching a program to teach and equip seniors with vertical sack gardens for sustainable vegetables.",
    details:
      "Nutrition is a critical aspect of elder care. The Urban Farming Initiative empowers seniors to grow their own fresh, organic produce right in their backyards, regardless of space constraints. Using vertical sack farming techniques, elders can cultivate leafy greens, tomatoes, and herbs with minimal physical strain. This not only supplements their diet but also provides therapeutic agricultural engagement.",
    goals: [
      "Install 50 vertical sack gardens",
      "Provide seeds and organic fertilizers",
      "Conduct specialized training for elders",
    ],
    status: "Upcoming",
    image: "/images/elder-portrait.png",
  },
];

export default function ProjectDetail() {
  const params = useParams();
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const projectId = params?.id as string;
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-gray-50 pb-20">
        {/* Project Hero */}
        <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent z-10" />

          {/* Back Button */}
          <Link
            href="/projects"
            className="absolute top-24 left-4 md:left-8 z-20 flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {project.category}
                </span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full border shadow-sm ${
                    project.status === "Ongoing"
                      ? "bg-emerald-500 border-emerald-400 text-white"
                      : project.status === "Upcoming"
                        ? "bg-amber-500 border-amber-400 text-white"
                        : "bg-gray-100 border-gray-200 text-gray-600"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-2">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold font-heading text-secondary mb-6">
                  About the Project
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {project.description}
                </p>

                <h3 className="text-xl font-bold font-heading text-secondary mb-4">
                  Project Overview
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  {project.details}
                </p>

                <div className="bg-sage rounded-2xl p-6 md:p-8 border border-teal-100">
                  <h3 className="text-xl font-bold font-heading text-secondary mb-4">
                    Key Objectives
                  </h3>
                  <ul className="space-y-4">
                    {project.goals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <span className="text-gray-700 font-medium">
                          {goal}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="sticky top-28 space-y-6"
              >
                {/* Info Card */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold font-heading text-secondary mb-6 border-b pb-4">
                    Project Details
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-50 p-3 rounded-xl text-primary">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">
                          Date / Duration
                        </p>
                        <p className="text-secondary font-semibold">
                          {project.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-50 p-3 rounded-xl text-primary">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">
                          Location
                        </p>
                        <p className="text-secondary font-semibold">
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-secondary to-gray-900 rounded-3xl p-8 shadow-xl text-white">
                  <h3 className="text-2xl font-bold font-heading mb-3">
                    Support This Cause
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Your contribution helps us continue this project and touch
                    more lives. Stand with us to bring dignity back to our
                    elders.
                  </p>
                  <button
                    onClick={() => setIsDonateOpen(true)}
                    className="w-full bg-accent-rose hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:-translate-y-1 cursor-pointer"
                  >
                    <Heart className="w-5 h-5 fill-current" /> Donate Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <DonationModal
        isDonateOpen={isDonateOpen}
        setIsDonateOpen={setIsDonateOpen}
      />
    </>
  );
}
