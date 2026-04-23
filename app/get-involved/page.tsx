"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Handshake,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, stagger } from "@/lib/animations";
import Link from "next/link";
import DonationModal from "@/components/Modals/DonationModal";

const volunteerRoles = [
  "Home Visit Companion — visit and spend time with homebound elders",
  "Medical Camp Support — assist during free health checkup events",
  "Community Outreach — identify and register vulnerable seniors",
  "Skills Training — teach digital literacy, gardening, or crafts",
  "Event Coordination — help organize social days and celebrations",
];

const partnerBenefits = [
  "Co-branded impact reports and visibility",
  "Direct involvement in program design",
  "Staff engagement and CSR opportunities",
  "Tax-deductible partnership contributions",
];

export default function GetInvolvedPage() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-primary via-teal-700 to-teal-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/images/community-gathering.png"
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
                Make a Difference
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-teal-100 leading-relaxed"
              >
                Whether you want to volunteer your time, donate resources, or
                partner with us — every contribution transforms an elder&apos;s
                life.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Three Pathways */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: Heart,
                  title: "Donate",
                  desc: "Your financial support provides healthcare, food, and dignity to vulnerable elders.",
                  color: "from-rose-500 to-pink-600",
                  action: () => setIsDonateOpen(true),
                  linkText: "Donate Now",
                  isButton: true,
                },
                {
                  icon: Users,
                  title: "Volunteer",
                  desc: "Join our compassionate team and make a hands-on difference in your community.",
                  color: "from-teal-500 to-emerald-600",
                  href: "#volunteer",
                  linkText: "Sign Up Below",
                  isButton: false,
                },
                {
                  icon: Handshake,
                  title: "Partner",
                  desc: "Collaborate with us as an organization to scale our impact and reach more seniors.",
                  color: "from-amber-500 to-orange-600",
                  href: "#partner",
                  linkText: "Learn More",
                  isButton: false,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center group"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-3 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{item.desc}</p>
                    {item.isButton ? (
                      <button
                        onClick={item.action}
                        className="inline-flex items-center gap-2 text-accent-rose font-semibold cursor-pointer hover:gap-3 transition-all"
                      >
                        {item.linkText} <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                      >
                        {item.linkText} <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="py-24 bg-sage scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
                className="lg:w-1/2"
              >
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  Volunteer With Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-6">
                  Your Time Can Change a{" "}
                  <span className="text-primary">Life</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We welcome volunteers of all ages and backgrounds. Whether you
                  can spare a few hours a week or want to commit to a longer
                  project, there&apos;s a role for you.
                </p>
                <div className="space-y-4">
                  {volunteerRoles.map((role) => (
                    <div key={role} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700">{role}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                className="lg:w-1/2"
              >
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-secondary mb-6 font-heading">
                    Volunteer Registration
                  </h3>
                  <form
                    className="space-y-5"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                          placeholder="+254 700 000 000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Area of Interest
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white">
                        <option>Home Visit Companion</option>
                        <option>Medical Camp Support</option>
                        <option>Community Outreach</option>
                        <option>Skills Training</option>
                        <option>Event Coordination</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Why do you want to volunteer?
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                        placeholder="Tell us a bit about yourself..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-teal-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                      Submit Registration
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnership */}
        <section id="partner" className="py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-secondary rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <span className="inline-block bg-white/10 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-white/10">
                    Partnership Opportunities
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                    Partner With Us to{" "}
                    <span className="text-primary-light">Scale Impact</span>
                  </h2>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    We collaborate with NGOs, healthcare providers, corporates,
                    and government agencies to expand our reach and deepen our
                    impact.
                  </p>
                  <div className="space-y-3">
                    {partnerBenefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <h3 className="text-xl font-bold mb-6">
                      Partnership Inquiry
                    </h3>
                    <form
                      className="space-y-4"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none"
                        placeholder="Organization Name"
                      />
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none"
                        placeholder="Contact Email"
                      />
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none resize-none"
                        placeholder="How would you like to partner?"
                      />
                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-teal-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-5 h-5" /> Send Inquiry
                      </button>
                    </form>
                  </div>
                </div>
              </div>
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
