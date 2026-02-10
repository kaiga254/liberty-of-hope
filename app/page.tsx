"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, Smile, ArrowRight, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-secondary overflow-hidden">
        {/* Background Image Placeholder / Overlay */}
        <div className="absolute inset-0 z-0">
          {/* In a real project, replace this with an <Image /> component */}
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-linear-to-r from-secondary/90 to-secondary/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
              Restoring Dignity, <br />
              <span className="text-primary italic">One Elder at a Time</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
              Ensuring our seniors in Thika and beyond live with honor, health,
              and happiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about#contact"
                className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Join Our Mission
              </Link>
              <Link
                href="/programs"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Our Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - Who We Are */}
      <section className="py-20 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-heading text-secondary mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Liberty of Hope is a community-based organization rooted in the
              heart of Thika, Kenya. We are dedicated to changing the narrative
              of aging from one of isolation/neglect to one of celebration and
              care. We believe every elder deserves to feel valued, supported,
              and heard.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Highlight 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 font-heading">
                Healthcare Access
              </h3>
              <p className="text-gray-600">
                Providing regular medical checkups, screenings, and health
                education to ensure physical well-being.
              </p>
            </motion.div>

            {/* Highlight 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 font-heading">
                Timeless Connection
              </h3>
              <p className="text-gray-600">
                Combating loneliness through peer support groups and community
                social gatherings.
              </p>
            </motion.div>

            {/* Highlight 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                <Smile className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 font-heading">
                Restored Dignity
              </h3>
              <p className="text-gray-600">
                Support with personal care, hygiene, and grooming to build
                confidence and self-worth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Banner */}
      <section className="py-24 relative overflow-hidden bg-secondary text-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
          <Globe className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Our Global Vision
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Starting in Thika, our vision extends across East Africa. We aim
              to create a replicable model of elderly care that respects African
              traditions while integrating modern health and social support
              systems.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors"
            >
              Read more about our journey <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-full border border-white/20">
              <Globe className="w-32 h-32 text-primary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
