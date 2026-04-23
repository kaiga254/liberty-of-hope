"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, Heart } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, stagger } from "@/lib/animations";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-teal-700 to-teal-800 text-white overflow-hidden">
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
              Contact Us
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-teal-100 leading-relaxed"
            >
              Whether you want to volunteer, donate, or know an elder in need —
              we&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:w-2/5"
            >
              <h2 className="text-3xl font-bold font-heading text-secondary mb-6">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                We&apos;re here to answer your questions and hear your stories.
                Reach out through any of the channels below, or fill out the
                form.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-lg">
                      Visit Us
                    </h4>
                    <p className="text-gray-600">
                      Thika Town, Near Main Market
                      <br />
                      Kiambu County, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-lg">
                      Email Us
                    </h4>
                    <p className="text-gray-600">info@libertyofhope.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-lg">
                      Call Us
                    </h4>
                    <p className="text-gray-600">+254 700 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-lg">
                      Office Hours
                    </h4>
                    <p className="text-gray-600">
                      Monday – Friday: 8:00 AM – 5:00 PM
                      <br />
                      Saturday: 9:00 AM – 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 bg-gray-100 rounded-2xl h-48 flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-400">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Thika, Kenya</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:w-3/5"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-secondary mb-8 font-heading">
                  Send Us a Message
                </h3>
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="c-name"
                        className="text-sm font-medium text-gray-700 mb-1.5 block"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="c-name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="c-email"
                        className="text-sm font-medium text-gray-700 mb-1.5 block"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="c-email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="c-subject"
                      className="text-sm font-medium text-gray-700 mb-1.5 block"
                    >
                      Subject
                    </label>
                    <select
                      id="c-subject"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option>General Inquiry</option>
                      <option>Volunteering</option>
                      <option>Donation Support</option>
                      <option>Partnership</option>
                      <option>Report an Elder in Need</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="c-phone"
                      className="text-sm font-medium text-gray-700 mb-1.5 block"
                    >
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="c-phone"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="c-message"
                      className="text-sm font-medium text-gray-700 mb-1.5 block"
                    >
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-teal-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Urgent CTA */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-secondary mb-4">
            Know an Elder in Need?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you know a senior citizen who needs urgent support — healthcare,
            food, or shelter — please call us immediately or submit a report.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254700123456"
              className="inline-flex items-center gap-2 bg-accent-rose hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now: +254 700 123 456
            </a>
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 bg-primary hover:bg-teal-800 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              <Heart className="w-5 h-5" />
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
