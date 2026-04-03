"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useComingSoon, ComingSoonToast, TOASTS } from "./ComingSoon";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Dev Experience", href: "#dev-experience" },
  { label: "Docs", href: "/docs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { show, dismiss, toast } = useComingSoon();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-2xl shadow-black/80" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Compact Lab — Home">
            <div
              className="w-7 h-7 rounded-sm flex items-center justify-center"
              style={{ backgroundColor: "#E95144" }}
            >
              <span className="text-white font-black text-xs font-mono">CL</span>
            </div>
            <span className="font-semibold text-white tracking-tight text-sm">
              Compact<span style={{ color: "#E95144" }}>Lab</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => show(TOASTS.auth)}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
            >
              Sign In
            </button>
            <button
              onClick={() => show(TOASTS.playground)}
              className="text-sm font-semibold text-white px-4 py-2 rounded-sm transition-all duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E95144] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              style={{ backgroundColor: "#E95144" }}
            >
              Start Building
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-white/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black border-t border-white/8"
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/8 flex flex-col gap-2">
                <button
                  className="block w-full text-sm text-center text-white/60 hover:text-white py-2 transition-colors"
                  onClick={() => { setMobileOpen(false); show(TOASTS.auth); }}
                >
                  Sign In
                </button>
                <button
                  className="block w-full text-sm text-center font-semibold text-white px-4 py-3 rounded-sm"
                  style={{ backgroundColor: "#E95144" }}
                  onClick={() => { setMobileOpen(false); show(TOASTS.playground); }}
                >
                  Start Building
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ComingSoonToast toast={toast} onDismiss={dismiss} />
    </motion.header>
  );
}
