"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DonationModal from "./Modals/DonationModal";
import { Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center gap-2.5">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="text-xl font-bold text-secondary tracking-tight font-heading">
                Liberty of Hope
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
              <button
                onClick={() => setIsDonateOpen(true)}
                className="bg-accent-rose hover:bg-red-700 cursor-pointer text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-red-200 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 fill-current" />
                Donate Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setIsDonateOpen(true)}
                className="bg-accent-rose text-white p-2.5 rounded-full cursor-pointer shadow-md"
              >
                <Heart className="w-4 h-4 fill-current" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-secondary focus:outline-none p-2 cursor-pointer"
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
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "text-primary bg-teal-50 font-semibold"
                          : "text-gray-600 hover:text-primary hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-4 px-3">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsDonateOpen(true);
                    }}
                    className="w-full bg-accent-rose hover:bg-red-700 cursor-pointer text-white px-6 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    <Heart className="w-5 h-5 fill-current" />
                    Donate Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <DonationModal
        isDonateOpen={isDonateOpen}
        setIsDonateOpen={setIsDonateOpen}
      />
    </>
  );
}
