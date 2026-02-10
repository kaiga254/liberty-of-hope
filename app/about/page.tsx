"use client";

import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Shield,
  Globe,
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Story Section */}
      <section className="py-20 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold font-heading text-secondary mb-8"
            >
              Our Story
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700 leading-relaxed space-y-6"
            >
              <p>
                Liberty of Hope was founded in Thika, Kenya, with a simple yet
                powerful belief:
                <strong>
                  {" "}
                  aging should be a celebration, not a sentence of isolation.
                </strong>
              </p>
              <p>
                Witnessing the neglect and loneliness faced by many seniors in
                our community, we gathered a team of passionate volunteers to
                create a sanctuary of care. What started as weekly home visits
                has grown into a movement restoring dignity, health, and joy to
                hundreds of elders.
              </p>
              <p>
                Today, we stand as a beacon of hope, bridging the gap between
                generations and ensuring that every senior knows they are
                valued, loved, and never forgotten.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-secondary text-center mb-16">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Dignity",
                icon: Users,
                desc: "We honor the life experience of every elder.",
              },
              {
                title: "Compassion",
                icon: Heart,
                desc: "We serve with kindness and empathy.",
              },
              {
                title: "Integrity",
                icon: Shield,
                desc: "We are transparent and accountable in all we do.",
              },
              {
                title: "Inclusivity",
                icon: Globe,
                desc: "We serve all, regardless of background or status.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-secondary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2 font-heading">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-secondary text-center mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-secondary">
                    Team Member Name
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    Position / Role
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* Contact Info (Left) */}
            <div className="bg-secondary p-10 md:p-16 md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold font-heading mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-300 mb-12">
                  Whether you want to volunteer, donate, or know an elder in
                  need, we'd love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Visit Us</h4>
                      <p className="text-gray-300">
                        Thika Town, Near Main Market
                        <br />
                        Kiambu County, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email Us</h4>
                      <p className="text-gray-300">info@libertyofhope.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Call Us</h4>
                      <p className="text-gray-300">+254 700 123 456</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            </div>

            {/* Contact Form (Right) */}
            <div className="bg-white p-10 md:p-16 md:w-3/5">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Volunteering</option>
                    <option>Donation Support</option>
                    <option>Report an Elder in Need</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
