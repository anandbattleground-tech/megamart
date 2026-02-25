"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Facebook, Instagram, Youtube, Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-gray-900 text-white text-xs py-2 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="tel:+918102234707" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
            <Phone size={12} />
            <span>+91 8102234707</span>
          </a>
          <a href="mailto:info@chunnilalmegamart.com" className="hidden sm:flex items-center gap-1.5 hover:text-brand-gold transition-colors">
            <Mail size={12} />
            <span>info@chunnilalmegamart.com</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
            <Facebook size={13} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
            <Instagram size={13} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
            <Youtube size={13} />
          </a>
          <a href="https://wa.me/918102234707" target="_blank" rel="noreferrer" aria-label="WhatsApp"
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
            <MessageCircle size={13} />
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-navy"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/assets/images/chunilal-logo.jpg"
              alt="ChunniLal Mega Mart"
              width={160}
              height={56}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 group ${
                      scrolled
                        ? isActive
                          ? "text-navy"
                          : "text-gray-700 hover:text-navy"
                        : isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-brand-gold scale-x-100"
                          : "bg-brand-gold scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-navy hover:bg-navy/10" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
            >
              <ul className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-navy text-white"
                            : "text-gray-700 hover:bg-gray-50 hover:text-navy"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
