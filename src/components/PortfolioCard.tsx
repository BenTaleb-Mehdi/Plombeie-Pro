"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // 1. Import Next.js Image
import type { PortfolioItem } from "@/lib/data";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group overflow-hidden rounded-3xl bg-white/90 shadow-sm ring-1 ring-slate-200/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="aspect-16/10 bg-slate-100 overflow-hidden relative">
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={500}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">
          {item.category}
        </span>
        <h3 className="mt-2 text-base font-bold text-slate-900">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
