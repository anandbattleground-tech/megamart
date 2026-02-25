"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Tag, MapPin, ChevronDown } from "lucide-react";
import { FloatingPaths } from "@/components/ui/background-paths";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { BrandCarousel } from "@/components/BrandCarousel";
import { Button } from "@/components/ui/button";

/* ─── SCROLL REVEAL HOOK ─── */
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

/* ─── CATEGORY CARDS DATA ─── */
const categories = [
  {
    label: "Men's Fashion",
    sublabel: "Suits, Casuals & Ethnic",
    bg: "#f4e4d4",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    span: "col-span-1",
  },
  {
    label: "Women's Fashion",
    sublabel: "Sarees, Salwar & Western",
    bg: "#fce4ec",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    span: "col-span-1",
  },
  {
    label: "Kid's Fashion",
    sublabel: "Ethnic, Casuals & Festive",
    bg: "#e8f5e9",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    span: "col-span-1",
  },
  {
    label: "Home Furnishing",
    sublabel: "Make Your Home Look Exclusive",
    bg: "#e3f2fd",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    span: "col-span-1",
  },
];

/* ─── FURNISHING GALLERY ─── */
const furnishingImages = [
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    alt: "Designer curtains and drapes",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    alt: "Elegant bedroom interior",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    alt: "Modern living room",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Cozy bedroom setup",
  },
];

/* ══════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════ */
export default function HomePage() {
  useScrollReveal();

  return (
    <>
      {/* ─────────────────────────────────────
          HERO SECTION
      ───────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
            alt="Chunnilal Mega Mart — colorful fashion fabrics"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
        </div>

        {/* Floating paths animation over image */}
        <div className="absolute inset-0 opacity-30">
          <FloatingPaths position={1} color="rgba(255,255,255" />
          <FloatingPaths position={-1} color="rgba(240,180,41" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Star size={12} fill="currentColor" />
            Bihar&apos;s Premier Fashion Destination
            <Star size={12} fill="currentColor" />
          </motion.div>

          {/* Headline — letter-by-letter animation */}
          <div className="mb-2">
            {["Welcome", "to", "the", "World"].map((word, wi) => (
              <span key={wi} className="inline-block mr-[0.3em] last:mr-0">
                {word.split("").map((letter, li) => (
                  <motion.span
                    key={`${wi}-${li}`}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.4 + wi * 0.12 + li * 0.03,
                      type: "spring",
                      stiffness: 180,
                      damping: 22,
                    }}
                    className="inline-block text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>
          <div className="mb-6">
            {["of", "Fashion"].map((word, wi) => (
              <span key={wi} className="inline-block mr-[0.3em] last:mr-0">
                {word.split("").map((letter, li) => (
                  <motion.span
                    key={`${wi}-${li}`}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.8 + wi * 0.12 + li * 0.04,
                      type: "spring",
                      stiffness: 180,
                      damping: 22,
                    }}
                    className="inline-block text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-brand-gold"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-white/75 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed"
          >
            Chunnilal Mega Mart Pvt. Ltd. &mdash; where traditional Indian elegance
            meets contemporary style. 5 stores across Bihar.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button
                variant="gold"
                size="lg"
                className="btn-sweep rounded-full px-8 font-semibold shadow-lg shadow-brand-gold/30"
              >
                Visit Our Stores
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full px-8 text-white border border-white/40 hover:bg-white/10 backdrop-blur-sm"
              >
                Our Story
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-xs"
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────
          TRUST STATS BAR
      ───────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100 py-14">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <AnimatedCounter
            target={10000}
            suffix="+"
            label="Satisfied Customers"
            icon={<Star size={24} />}
          />
          <AnimatedCounter
            target={30}
            suffix="+"
            label="Major Brands"
            icon={<Tag size={24} />}
          />
          <AnimatedCounter
            target={5}
            label="Stores in Bihar"
            icon={<MapPin size={24} />}
          />
        </div>
      </section>

      {/* ─────────────────────────────────────
          CATEGORY GRID — "Something for Everyone"
      ───────────────────────────────────── */}
      <section className="bg-cream py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
              Collections
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
              Something for Everyone
            </h2>
            <div className="section-divider" />
          </div>

          {/* 2×2 category grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {categories.map((cat, i) => (
              <div
                key={cat.label}
                className="reveal card-lift img-zoom rounded-3xl overflow-hidden relative h-[380px] md:h-[440px] shadow-sm cursor-pointer group"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Background color */}
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: cat.bg }}
                />
                {/* Photo */}
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Gradient overlay — bottom text area */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category label */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-white/70 text-xs uppercase tracking-widest mb-1">
                    {cat.sublabel}
                  </p>
                  <h3 className="font-display text-3xl font-bold text-white leading-tight mb-3">
                    {cat.label}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-brand-gold text-sm font-semibold group-hover:gap-4 transition-all duration-300">
                    Shop Now <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          WELCOME FEATURE BAND
      ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <FloatingPaths position={1} color="rgba(240,180,41" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4">
              Est. Bihar
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
              Where Fashion &amp; Trust Meet
            </h2>
            <p className="text-white/65 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              From vibrant ethnic wear to sleek casuals, from everyday essentials
              to festive wear — our range caters to all ages and tastes. Every
              garment handpicked by our expert buying team.
            </p>
            <Link href="/about">
              <Button variant="gold" size="lg" className="btn-sweep rounded-full px-10 shadow-lg">
                Discover Our Story <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          HOME FURNISHING GALLERY
      ───────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
              Home Collection
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-3">
              Home Furnishing
            </h2>
            <p className="text-gray-500 text-sm italic">Make Your Home Look Exclusive</p>
            <div className="section-divider mt-4" />
          </div>

          {/* 2×2 gallery grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-5 reveal">
            {furnishingImages.map((img, i) => (
              <div
                key={i}
                className="img-zoom rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] shadow-sm"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link href="/contact">
              <Button variant="navy-outline" size="lg" className="rounded-full px-10 btn-sweep">
                Visit Our Stores <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          BRAND PARTNERS CAROUSEL
      ───────────────────────────────────── */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
              Trusted Partners
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Brands We Carry
            </h2>
            <div className="section-divider mt-4" />
          </div>
          <BrandCarousel />
        </div>
      </section>

      {/* ─────────────────────────────────────
          ABOUT SNIPPET
      ───────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="reveal-left order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl img-zoom aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=900&q=80"
                alt="Chunnilal Mega Mart store interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center">
                  <Star size={18} className="text-navy" fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Rated</p>
                  <p className="text-navy font-bold text-sm">Top Fashion Store in Bihar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal-right order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-4">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              Redefining Fashion<br />
              <span className="text-brand-red italic">across Bihar</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5">
              Established with a vision to redefine fashion retail across Bihar,
              Chunnilal Mega Mart Pvt. Ltd. is your premier destination for all
              things stylish, quality-driven, and accessible.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              With multiple outlets across Patna and beyond, our stores bring
              together a curated blend of traditional Indian wear and contemporary
              Western styles — ensuring something for every individual, every occasion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <Button variant="navy" size="lg" className="btn-sweep rounded-full px-8">
                  Our Story <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="navy-outline" size="lg" className="rounded-full px-8">
                  Find a Store
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
