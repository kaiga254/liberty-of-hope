"use client";
import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-background/80 sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-secondary text-xl font-bold tracking-tight">
              Liberty of Hope
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6">
            Support Our Elders
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="text-foreground hover:text-primary -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="bg-background space-y-1 px-4 py-6 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:bg-muted hover:text-primary block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4">
              <Button className="bg-primary hover:bg-primary/90 text-white w-full rounded-lg">
                Support Our Elders
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
