"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Heart, Phone, Building2, Shield, Check } from "lucide-react";

export default function DonationModal({
  isDonateOpen,
  setIsDonateOpen,
}: {
  isDonateOpen: boolean;
  setIsDonateOpen: (value: boolean) => void;
}) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);

  return (
    <AnimatePresence>
      {isDonateOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDonateOpen(false)}
            className="absolute inset-0 bg-secondary/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <button
              onClick={() => setIsDonateOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-secondary bg-gray-50 hover:bg-gray-100 rounded-full transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto p-6 md:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-2xl mb-4 text-accent-rose">
                  <Heart className="w-8 h-8 fill-current" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-secondary mb-3">
                  Support a Senior Today
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
                  Your generous donation directly supports vulnerable elders
                  with healthcare, nutrition, shelter, and dignity programs.
                </p>
              </div>

              {/* Payment Methods */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* M-Pesa */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 transition-colors group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-emerald-100 rounded-lg text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg text-secondary">M-Pesa</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                        Paybill Number
                      </p>
                      <p className="font-mono font-bold text-xl tracking-wider text-secondary">
                        542542
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                        Account Number
                      </p>
                      <p className="font-medium text-secondary">32419</p>
                    </div>
                  </div>
                </div>

                {/* Bank */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 transition-colors group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg text-secondary">
                      Bank Transfer
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                        Bank Name
                      </p>
                      <p className="font-medium text-secondary">Equity Bank</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                        Account Name
                      </p>
                      <p className="font-medium text-secondary">
                        Liberty of Hope
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                        Account Number
                      </p>
                      <p className="font-mono font-bold text-lg tracking-wider text-secondary">
                        01234567890
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Secure & Transparent</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-primary" />
                    <span>100% Goes to Elders</span>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-400 mt-3">
                  Thank you for standing with our elders. Your kindness brings
                  light to their golden years.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
