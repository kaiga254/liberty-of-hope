"use client";
import Link from "next/link";
import { useState } from "react";
import DonationModal from "./Modals/DonationModal";
import { contactInfo } from "@/lib/contact";
import { logoSrc, navLinks, socialLinks, type SocialIconName } from "@/lib/site";
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

const socialIcons: Record<SocialIconName, typeof Facebook> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
};

export default function Footer() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  return (
    <>
      <footer className="bg-secondary text-white">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-5">
              <div className="inline-flex rounded-xl bg-white p-3">
                <img
                  src={logoSrc}
                  alt="Liberty of Hope"
                  className="block object-contain"
                  style={{ height: "6rem", width: "auto" }}
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Restoring dignity to the aged in Thika and beyond. We believe
                aging should be a celebration of life, filled with honor,
                health, and happiness.
              </p>
              <div className="flex space-x-3 pt-1">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold mb-6 flex items-center gap-2">
                Quick Links
                <span className="block h-0.5 w-8 bg-primary rounded" />
              </h4>
              <ul className="space-y-3 text-sm">
                {navLinks.map((link) => (
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
                    {contactInfo.address.line1}
                    <br />
                    {contactInfo.address.line2}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a
                    href={contactInfo.phone.href}
                    className="transition-colors hover:text-primary"
                  >
                    {contactInfo.phone.label}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a
                    href={contactInfo.email.href}
                    className="transition-colors hover:text-primary"
                  >
                    {contactInfo.email.label}
                  </a>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h4 className="text-base font-semibold mb-6 flex items-center gap-2">
                Support an elder
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
                href="/contact"
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
            {/* <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Financial Reports
              </a>
            </div> */}
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
