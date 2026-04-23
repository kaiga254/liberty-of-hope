"use client";
import Link from "next/link";
import { useState } from "react";
import DonationModal from "./Modals/DonationModal";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Projects", href: "/projects" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  return (
    <>
      <footer className="bg-secondary text-white">
        {/* Newsletter Strip */}
        <div className="bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold font-heading">
                  Stay Connected With Our Mission
                </h3>
                <p className="text-teal-100 text-sm mt-1">
                  Get updates on our impact, events, and how you can help.
                </p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 flex-1 md:w-64"
                />
                <button className="px-6 py-3 bg-white text-primary rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors shrink-0 cursor-pointer flex items-center gap-2">
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white fill-current" />
                </div>
                <span className="text-xl font-bold font-heading">
                  Liberty of Hope
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Restoring dignity to the aged in Thika and beyond. We believe
                aging should be a celebration of life, filled with honor,
                health, and happiness.
              </p>
              <div className="flex space-x-3 pt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-200"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold mb-6 flex items-center gap-2">
                Quick Links
                <span className="block h-0.5 w-8 bg-primary rounded" />
              </h4>
              <ul className="space-y-3 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:w-2 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base font-semibold mb-6 flex items-center gap-2">
                Contact Us
                <span className="block h-0.5 w-8 bg-primary rounded" />
              </h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Thika Town, Near Main Market
                    <br />
                    Kiambu County, Kenya
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+254 700 123 456</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>info@libertyofhope.org</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h4 className="text-base font-semibold mb-6 flex items-center gap-2">
                Support a Senior
                <span className="block h-0.5 w-8 bg-primary rounded" />
              </h4>
              <p className="text-gray-400 text-sm mb-5">
                Your support brings a smile to an elder&apos;s face and restores
                their dignity.
              </p>
              <button
                onClick={() => setIsDonateOpen(true)}
                className="inline-flex items-center gap-2 bg-accent-rose hover:bg-red-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg w-full justify-center cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-current" />
                Donate Now
              </button>
              <Link
                href="/get-involved"
                className="mt-3 inline-flex items-center gap-2 text-primary-light hover:text-white text-sm font-medium transition-colors w-full justify-center"
              >
                Or become a volunteer <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Liberty of Hope. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Financial Reports
              </a>
            </div>
          </div>
        </div>
      </footer>
      <DonationModal
        isDonateOpen={isDonateOpen}
        setIsDonateOpen={setIsDonateOpen}
      />
    </>
  );
}
