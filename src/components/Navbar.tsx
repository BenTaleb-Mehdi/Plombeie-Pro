"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getData } from "@/lib/data";

const { company, navigation } = getData();

// Custom Official WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, stiffness: 240, damping: 26 },
  },
  exit: {
    x: "-100%",
    transition: { type: "spring" as const, stiffness: 260, damping: 28 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const staggeredContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const staggeredItem = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled
            ? "border-b border-slate-200/50 bg-white/80 shadow-sm backdrop-blur-md"
            : "bg-white/70 backdrop-blur-sm"
          }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-slate-950 flex items-center gap-1.5"
          >
            <span className="h-6 w-1 rounded-full bg-blue-600" />
            {company.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-600 transition-colors duration-250 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-4.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-slate-800 transition-all duration-300"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
              WhatsApp Pro
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-800 shadow-sm transition-all duration-200 active:scale-95"
            aria-label="Open Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Slide-Out Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-45 bg-slate-950/30 backdrop-blur-sm md:hidden"
            />

            {/* Sidebar Slide from Left */}
            <motion.div
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] bg-white/95 backdrop-blur-md p-6 shadow-2xl flex flex-col md:hidden border-r border-slate-100"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-base font-extrabold text-slate-950 flex items-center gap-1.5"
                >
                  <span className="h-5 w-1 rounded-full bg-blue-600" />
                  {company.name}
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 active:scale-95"
                  aria-label="Close Menu"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Sidebar Nav Links */}
              <motion.nav
                variants={staggeredContainer}
                className="flex flex-col gap-2 py-8 flex-1 overflow-y-auto"
              >
                {navigation.map((item) => (
                  <motion.div key={item.href} variants={staggeredItem}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Sidebar Footer Info */}
              <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                    <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    {company.address}
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                    <Mail className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    {company.email}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={company.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 py-3 text-sm font-bold text-white shadow-sm active:scale-[0.98] transition-all duration-200"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-green-400" />
                    WhatsApp
                  </a>

                  <a
                    href={`tel:${company.phone}`}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3 text-sm font-bold text-slate-800 shadow-sm active:scale-[0.98] transition-all duration-200"
                  >
                    <Phone className="h-4 w-4 text-blue-600" />
                    Appeler Direct
                  </a>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
