"use client";

import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getData } from "@/lib/data";

const { company, navigation } = getData();

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur"
          : "bg-white/90"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          {company.name}
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-800/10 hover:bg-slate-800 transition-colors duration-200"
          >
            <Phone className="h-4 w-4" />
            {company.phone}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="border-t border-slate-200 bg-white/95 backdrop-blur-md md:hidden"
        >
          <nav className="flex flex-col gap-3 px-5 py-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm"
            >
              <Phone className="h-4 w-4" />
              {company.phone}
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
