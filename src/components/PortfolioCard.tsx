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
      className="group border border-slate-200 bg-white hover:border-blue-600 transition-colors duration-300"
    >
      <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative"> {/* Added 'relative' */}
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