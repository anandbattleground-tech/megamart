"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { FloatingPaths } from "@/components/ui/background-paths";

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 80);
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const stores = [
  {
    name: "Head Office",
    tag: "Main Branch",
    address: "Main Road, Near Gardania Mall, Kankarbagh, Patna - 800020",
    tel: ["8102234706", "8102234707"],
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    accent: "#f4e4d4",
    isHO: true,
  },
  {
    name: "Raja Bazar",
    tag: "Patna Branch",
    address: "Pillar No. 36, Bailey Road, Patna",
    tel: ["7779832832", "7779824824"],
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80",
    accent: "#fce4ec",
  },
  {
    name: "Hajipur",
    tag: "Vaishali Branch",
    address: "Cinekrishna Mall, Cinema Road, Hajipur, Vaishali",
    tel: ["8102234705"],
    img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
    accent: "#e3f2fd",
  },
  {
    name: "Buxer",
    tag: "Buxer Branch",
    address: "Chahat Complex, Turha Toli, Buxer",
    tel: ["9155996676"],
    img: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&q=80",
    accent: "#e8f5e9",
  },
  {
    name: "Biharsharif",
    tag: "Nalanda Branch",
    address: "West of Gandhi Park, Mahatma Gandhi Road, Biharsharif",
    tel: ["8102234708"],
    img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
    accent: "#fff8e1",
  },
];

export default function ContactPage() {
  useScrollReveal();

  return (
    <>
      {/* ─────────────────────────────────────
          PAGE HERO
      ───────────────────────────────────── */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
            alt="Contact Us hero"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/75 to-navy/85" />
        </div>

        <div className="absolute inset-0 opacity-20">
          <FloatingPaths position={1} color="rgba(255,255,255" />
          <FloatingPaths position={-1} color="rgba(240,180,41" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4"
          >
            Find Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 120, damping: 20 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
          >
            Contact <span className="text-brand-gold italic">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/65 text-base"
          >
            5 Stores Across Bihar — We&apos;re Always Near You
          </motion.p>
        </div>
      </section>

      {/* ─────────────────────────────────────
          CONTACT INFO STRIP
      ───────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: <Phone size={20} className="text-brand-gold" />,
              label: "Call Us",
              value: "+91 8102234707",
              href: "tel:+918102234707",
            },
            {
              icon: <Mail size={20} className="text-brand-gold" />,
              label: "Email",
              value: "info@chunnilalmegamart.com",
              href: "mailto:info@chunnilalmegamart.com",
            },
            {
              icon: <MapPin size={20} className="text-brand-gold" />,
              label: "Locations",
              value: "5 Stores in Bihar",
              href: "#stores",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-cream transition-colors group"
            >
              <div className="w-11 h-11 rounded-full bg-navy/8 flex items-center justify-center group-hover:bg-navy transition-colors">
                <span className="group-hover:[&_svg]:text-white transition-colors">{item.icon}</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                {item.label}
              </p>
              <p className="text-sm font-semibold text-navy">{item.value}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────
          STORE LOCATIONS GRID
      ───────────────────────────────────── */}
      <section id="stores" className="bg-cream py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
              Our Locations
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
              Find a Store Near You
            </h2>
            <div className="section-divider" />
          </div>

          {/* Head Office — full width featured */}
          {stores.filter((s) => s.isHO).map((store) => (
            <div
              key={store.name}
              className="reveal mb-6 rounded-3xl overflow-hidden shadow-md card-lift bg-white grid md:grid-cols-2"
            >
              <div className="img-zoom h-64 md:h-auto relative">
                <Image
                  src={store.img}
                  alt={`${store.name} store`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Accent overlay */}
                <div className="absolute inset-0 bg-navy/20" />
                <div className="absolute top-5 left-5">
                  <span className="bg-brand-gold text-navy text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    Head Office
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center" style={{ background: store.accent }}>
                <p className="text-xs uppercase tracking-[0.2em] text-navy/50 font-semibold mb-2">
                  {store.tag}
                </p>
                <h3 className="font-display text-4xl font-bold text-navy mb-5">
                  {store.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-navy mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700 leading-snug">{store.address}</p>
                  </div>
                  {store.tel.map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <Phone size={15} className="text-navy flex-shrink-0" />
                      <a
                        href={`tel:${t}`}
                        className="text-sm font-semibold text-navy hover:text-brand-red transition-colors"
                      >
                        {t}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Other stores — 2-column grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {stores.filter((s) => !s.isHO).map((store, i) => (
              <div
                key={store.name}
                className="reveal card-lift bg-white rounded-3xl overflow-hidden shadow-sm"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Store image */}
                <div className="img-zoom h-48 relative">
                  <Image
                    src={store.img}
                    alt={`${store.name} store`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full text-navy"
                      style={{ background: store.accent }}
                    >
                      {store.tag}
                    </span>
                  </div>
                </div>

                {/* Store details */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-navy mb-4">
                    {store.name}
                  </h3>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <MapPin size={14} className="text-navy/50 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600 leading-snug">{store.address}</p>
                    </div>
                    {store.tel.map((t) => (
                      <div key={t} className="flex items-center gap-2.5">
                        <Phone size={13} className="text-navy/50 flex-shrink-0" />
                        <a
                          href={`tel:${t}`}
                          className="text-sm font-semibold text-navy hover:text-brand-red transition-colors"
                        >
                          {t}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          SOCIAL / CONNECT BAND
      ───────────────────────────────────── */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4">
              Stay Connected
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
              Follow Us on Social Media
            </h2>
            <p className="text-white/55 text-sm mb-8">
              Stay updated with new arrivals, festive collections, and store events.
            </p>
            <div className="flex items-center justify-center gap-4">
              {[
                { icon: <Facebook size={20} />, label: "Facebook", href: "https://facebook.com", color: "#1877F2" },
                { icon: <Instagram size={20} />, label: "Instagram", href: "https://instagram.com", color: "#E1306C" },
                { icon: <Youtube size={20} />, label: "YouTube", href: "https://youtube.com", color: "#FF0000" },
                { icon: <MessageCircle size={20} />, label: "WhatsApp", href: "https://wa.me/918102234707", color: "#25D366" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white hover:scale-110 flex items-center justify-center transition-all duration-300 group"
                >
                  <span className="text-white group-hover:text-navy transition-colors">
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
