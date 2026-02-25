import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const storeLocations = [
  { name: "Head Office", address: "Main Road, Near Gardania Mall, Kankarbagh, Patna - 800020", tel: "8102234706/7" },
  { name: "Raja Bazar", address: "Pillar No. 36, Bailey Road, Patna", tel: "7779832832, 7779824824" },
  { name: "Buxer", address: "Chahat Complex, Turha Toli, Buxer", tel: "9155996676" },
  { name: "Biharsharif", address: "West of Gandhi Park, Mahatma Gandhi Road, Biharsharif", tel: "8102234708" },
  { name: "Hajipur", address: "Cinekrishna Mall, Cinema Road, Hajipur, Vaishali", tel: "8102234705" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="mb-5">
            <Image
              src="/assets/images/chunilal-logo.jpg"
              alt="ChunniLal Mega Mart"
              width={140}
              height={50}
              className="h-12 w-auto object-contain brightness-110"
            />
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            Bihar&apos;s premier fashion destination — blending traditional Indian wear
            with contemporary styles since inception.
          </p>
          {/* Social icons */}
          <div className="flex gap-3">
            {[
              { icon: <Facebook size={16} />, label: "Facebook", href: "https://facebook.com" },
              { icon: <Instagram size={16} />, label: "Instagram", href: "https://instagram.com" },
              { icon: <Youtube size={16} />, label: "YouTube", href: "https://youtube.com" },
              { icon: <MessageCircle size={16} />, label: "WhatsApp", href: "https://wa.me/918102234707" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold hover:text-navy flex items-center justify-center transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest mb-5 text-brand-gold">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 hover:text-brand-gold transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-brand-gold transition-all duration-300 inline-block" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest mb-5 text-brand-gold">
            Get In Touch
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:+918102234707"
                className="flex items-start gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-brand-gold" />
                +91 8102234707
              </a>
            </li>
            <li>
              <a
                href="mailto:info@chunnilalmegamart.com"
                className="flex items-start gap-2.5 text-sm text-white/70 hover:text-white transition-colors break-all"
              >
                <Mail size={14} className="mt-0.5 flex-shrink-0 text-brand-gold" />
                info@chunnilalmegamart.com
              </a>
            </li>
            <li>
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-brand-gold" />
                <span>5 Stores across Bihar</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Store locations */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest mb-5 text-brand-gold">
            Our Stores
          </h4>
          <ul className="space-y-3.5">
            {storeLocations.map((store) => (
              <li key={store.name} className="border-b border-white/10 pb-3.5 last:border-0 last:pb-0">
                <p className="text-xs font-semibold text-white uppercase tracking-wide mb-0.5">
                  {store.name}
                </p>
                <p className="text-xs text-white/50 leading-snug">{store.address}</p>
                <p className="text-xs text-brand-gold mt-0.5">Tel: {store.tel}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40 max-w-7xl mx-auto w-full">
        <p>Copyright © Chunnilal Megamart 2025 | All Rights Reserved</p>
        <p>Designed with ❤ for Bihar&apos;s Fashion Capital</p>
      </div>
    </footer>
  );
}
