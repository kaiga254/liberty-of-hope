"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import {
  Stethoscope,
  Users,
  Apple,
  HeartHandshake,
  Megaphone,
} from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Health & Wellness",
    description:
      "Regular medical camps, health screenings, and partnerships with local healthcare providers to ensure our seniors receive the medical attention they need.",
    icon: Stethoscope,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Mental Health & Connection",
    description:
      "Combating loneliness and isolation through peer support groups, social gatherings, and counseling services tailored for the elderly.",
    icon: Users,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Nutrition & Lifestyle",
    description:
      "Food security programs and education on healthy aging, ensuring seniors have access to nutritious meals and knowledge to live well.",
    icon: Apple,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Dignity & Personal Care",
    description:
      "Restoring self-worth through grooming services, hygiene support, and providing essential personal care items to those in need.",
    icon: HeartHandshake,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Advocacy & Outreach",
    description:
      "Championing the rights of the elderly through policy advocacy, legal aid, and home visits to assess and address living conditions.",
    icon: Megaphone,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Pillars of Impact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Comprehensive programs designed to restore dignity and improve the
            quality of life for our elders.
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <Section>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className="h-full hover:shadow-lg transition-all border-none shadow-md">
                <CardHeader className="flex flex-col items-start pb-2">
                  <div
                    className={`p-3 rounded-xl mb-4 ${program.bgColor} ${program.color}`}
                  >
                    <program.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </div>
  );
}
