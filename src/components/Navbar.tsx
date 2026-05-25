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
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur border-b border-slate-200"
          : "bg-white/80"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          {company.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
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

        <a
          href={company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-blue-600 bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 hover:bg-blue-700 hover:text-white transition-colors duration-200"
        >
          <Phone className="h-4 w-4" />
          {company.phone}
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm shadow-slate-200"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="border-t border-slate-200 bg-white md:hidden"
        >
          <nav className="flex flex-col px-5 py-4 gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors duration-200"
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
