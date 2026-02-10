import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading">Liberty of Hope</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Restoring dignity to the aged in Thika and beyond. We believe
              aging should be a celebration of life, filled with honor, health,
              and happiness.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              Quick Links
              <span className="block h-0.5 w-8 bg-primary"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  Projects & Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              Contact Us
              <span className="block h-0.5 w-8 bg-primary"></span>
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Thika, Kenya
                  <br />
                  P.O. Box 1234-01000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@libertyofhope.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              Join Our Mission
              <span className="block h-0.5 w-8 bg-primary"></span>
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Your support brings a smile to an elder's face.
            </p>
            <Link
              href="/about#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg w-full justify-center"
            >
              <Heart className="w-4 h-4 fill-current" />
              Donate / Volunteer
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Liberty of Hope. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
