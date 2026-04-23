"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Check } from "lucide-react";
import { fadeInUp, stagger } from "@/lib/animations";

export default function DonatePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-teal-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/elder-portrait.png"
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
              Your Generosity Restores Dignity
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-rose-100 leading-relaxed"
            >
              Every shilling you give directly supports healthcare, nutrition,
              shelter, and personal care for vulnerable elders in Thika, Kenya.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* M-Pesa */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-secondary mb-6 font-heading flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 text-sm font-bold">
                  M
                </span>
                M-Pesa
              </h3>
              <div className="space-y-5">
                <div className="bg-emerald-50 rounded-xl p-4">
                  <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide mb-1">
                    Paybill Number
                  </p>
                  <p className="font-mono font-bold text-2xl text-secondary tracking-wider">
                    123456
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                    Account Number
                  </p>
                  <p className="font-semibold text-secondary">Liberty</p>
                </div>
                <div className="text-sm text-gray-500 bg-gray-50 rounded-xl p-3">
                  <p className="font-medium mb-1">How to pay:</p>
                  <ol className="list-decimal list-inside space-y-1 text-xs">
                    <li>Go to M-Pesa on your phone</li>
                    <li>Select Lipa na M-Pesa → Pay Bill</li>
                    <li>Enter Business Number: 123456</li>
                    <li>Enter Account: Liberty</li>
                    <li>Enter Amount and confirm</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-secondary mb-6 font-heading flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-sm font-bold">
                  B
                </span>
                Bank Transfer
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                    Bank
                  </p>
                  <p className="font-semibold text-secondary">Equity Bank</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                    Account Name
                  </p>
                  <p className="font-semibold text-secondary">
                    Liberty of Hope
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-1">
                    Account Number
                  </p>
                  <p className="font-mono font-bold text-xl text-secondary tracking-wider">
                    01234567890
                  </p>
                </div>
              </div>
            </div>

            {/* Trust */}
            <div className="flex items-center gap-4 text-sm text-gray-500 justify-center pt-4">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-primary" />
                <span>Transparent</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-accent-rose" />
                <span>100% Impact</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-secondary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How is my donation used?",
                a: "100% of your donation goes directly to elder care programs including healthcare, nutrition, hygiene, and community support.",
              },
              {
                q: "Can I donate from outside Kenya?",
                a: "Yes! You can make an international bank transfer to our Equity Bank account. Contact us for SWIFT/BIC details.",
              },
              {
                q: "Is my donation tax-deductible?",
                a: "Liberty of Hope is a registered community-based organization. We can provide donation receipts for your records.",
              },
              {
                q: "Can I donate items instead of money?",
                a: "Absolutely! We accept food, clothing, bedding, hygiene products, and medical supplies. Contact us to arrange drop-off.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="font-bold text-secondary mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
