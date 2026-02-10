"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2">
            <span className="text-2xl font-bold text-secondary tracking-tight font-heading">
              Liberty of Hope
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-600 hover:text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/about#contact"
              className="bg-primary hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-current" />
              Support Our Elders
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-secondary focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-4 rounded-md text-base font-medium ${
                      isActive
                        ? "text-primary bg-orange-50"
                        : "text-gray-600 hover:text-secondary hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 px-3">
                <Link
                  href="/about#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5 fill-current" />
                  Support Our Elders
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
