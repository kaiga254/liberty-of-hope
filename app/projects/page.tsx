"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Badge } from "lucide-react"; // Note: Badge is not in lucide, I should check if I have a Badge component. I don't. I'll use a span.
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

const projects = [
  {
    title: "Thika Medical Camp 2024",
    date: "March 15, 2024",
    location: "Thika Stadium",
    description:
      "A comprehensive health drive serving over 200 seniors with free checkups, medication, and optical services.",
    status: "Completed",
    image: "from-primary-gradient", // Placeholder logic
  },
  {
    title: "Grandparents' Social Day",
    date: "Ongoing (Monthly)",
    location: "Liberty Community Hall",
    description:
      "A monthly gathering bringing seniors together for songs, dance, and sharing stories to combat loneliness.",
    status: "Ongoing",
    image: "from-secondary-gradient",
  },
  {
    title: "Home Hygiene Drive",
    date: "June 2024",
    location: "Kiandutu Slums",
    description:
      "Renovating living spaces and providing bedding for 50 vulnerable elderly households.",
    status: "Upcoming",
    image: "from-accent-gradient",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tangible actions making a real difference in the lives of our
            community's elders.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all flex flex-col">
                <div
                  className={`h-48 w-full bg-gradient-to-br ${
                    project.image === "from-primary-gradient"
                      ? "from-orange-400 to-orange-600"
                      : project.image === "from-secondary-gradient"
                        ? "from-indigo-800 to-purple-900"
                        : "from-red-700 to-red-900"
                  } flex items-center justify-center text-white/20`}
                >
                  {/* Placeholder visual */}
                  <span className="text-4xl font-bold opacity-30">
                    Liberty of Hope
                  </span>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : project.status === "Ongoing"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>
                  <p className="text-foreground/80">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
