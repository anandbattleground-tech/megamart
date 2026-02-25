"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Star, Users } from "lucide-react";
import { FloatingPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";

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

const values = [
  {
    icon: <Star size={22} />,
    title: "Quality First",
    desc: "Every garment is handpicked by our expert buying team considering fit, fabric, finish, and comfort.",
  },
  {
    icon: <Users size={22} />,
    title: "Inclusive Style",
    desc: "From vibrant ethnic wear to sleek casuals — our range caters to all ages, sizes, and tastes.",
  },
  {
    icon: <Heart size={22} />,
    title: "Warm Experience",
    desc: "We strive to build a shopping experience that's warm, inclusive, and rewarding for every customer.",
  },
  {
    icon: <Shield size={22} />,
    title: "Trusted Since Day One",
    desc: "Rooted in reliability, quality, and community — Chunnilal Mega Mart is where fashion and trust meet.",
  },
];

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      {/* ─────────────────────────────────────
          PAGE HERO — with BackgroundPaths animation
      ───────────────────────────────────── */}
      <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
            alt="About Us hero"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/75 to-navy/85" />
        </div>

        {/* Floating paths */}
        <div className="absolute inset-0 opacity-25">
          <FloatingPaths position={1} color="rgba(255,255,255" />
          <FloatingPaths position={-1} color="rgba(240,180,41" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 120, damping: 20 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
          >
            About <span className="text-brand-gold italic">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/65 text-base"
          >
            Bihar&apos;s Premier Fashion Destination Since Inception
          </motion.p>
        </div>
      </section>

      {/* ─────────────────────────────────────
          BRAND STORY — Two column
      ───────────────────────────────────── */}
      <section className="bg-cream py-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          {/* Logo / image */}
          <div className="reveal-left sticky top-24 self-start">
            <div className="rounded-3xl overflow-hidden shadow-2xl img-zoom aspect-[3/4] relative">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80"
                alt="Chunnilal Mega Mart fashion shopping"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Brand badge overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="font-display text-3xl font-bold italic mb-1">ChunniLal</div>
                <div className="text-brand-gold text-sm font-medium tracking-wider uppercase">
                  Mega Mart Pvt Ltd
                </div>
                <div className="text-white/60 text-xs italic mt-1">the fashion gallery</div>
              </div>
            </div>
          </div>

          {/* About text */}
          <div className="reveal-right space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-4">
                Who We Are
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
                Fashion That<br />
                <span className="italic text-brand-red">Belongs to You</span>
              </h2>
            </div>

            <div className="space-y-5 text-gray-600 text-base leading-relaxed">
              <p>
                Established with a vision to redefine fashion retail across Bihar,
                <strong className="text-navy font-semibold"> Chunnilal Mega Mart Pvt. Ltd.</strong> is
                your premier destination for all things stylish, quality-driven, and
                accessible. With multiple outlets across Patna and beyond, our stores
                bring together a curated blend of traditional Indian wear and
                contemporary Western styles — ensuring something for every individual,
                every occasion.
              </p>
              <p>
                At Chunnilal Mega Mart, we believe that fashion should not only look
                good but also feel right. That&apos;s why each garment in our collection is
                handpicked by our expert buying team, considering fit, fabric, finish,
                and comfort. From vibrant ethnic wear to sleek casuals, from everyday
                essentials to festive wear — our range caters to all ages and tastes.
              </p>
              <p>
                Our mission is simple: to offer trend-forward styles without compromising
                on value or service. We strive to build a shopping experience that&apos;s warm,
                inclusive, and rewarding. Whether in-store or online, our team is committed
                to assisting you — with personalized styling, honest advice, and
                hassle-free returns.
              </p>
              <p>
                As we grow and expand our footprint, we remain rooted in reliability,
                quality, and community.{" "}
                <strong className="text-navy font-semibold">
                  Chunnilal Mega Mart is not just a store — it&apos;s where fashion and trust meet.
                </strong>{" "}
                Welcome to fashion that belongs to you.
              </p>
            </div>

            <Link href="/contact">
              <Button variant="navy" size="lg" className="btn-sweep rounded-full px-10 mt-4">
                Find Our Stores <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          OUR VALUES GRID
      ───────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
              What Drives Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
              Our Core Values
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="reveal card-lift bg-cream rounded-2xl p-7 text-center group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-navy/10 text-navy flex items-center justify-center mx-auto mb-4 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          CTA BAND
      ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <FloatingPaths position={-1} color="rgba(240,180,41" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Ready to Explore?
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Visit any of our 5 stores across Bihar and experience fashion like never before.
              Our team is ready to assist you with personalized styling.
            </p>
            <Link href="/contact">
              <Button variant="gold" size="xl" className="btn-sweep rounded-full px-12 shadow-lg shadow-brand-gold/30">
                View All Stores <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
