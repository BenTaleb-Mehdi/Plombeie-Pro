"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { PortfolioItem } from "@/lib/data";

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick?: () => void;
}

export default function PortfolioCard({ item, onClick }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      onClick={onClick}
      className="group overflow-hidden rounded-[2rem] bg-white border border-slate-200/50 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg cursor-pointer"
    >
      {/* Aspect Ratio 16:10 */}
      <div className="aspect-[16/10] bg-slate-50 overflow-hidden relative">
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={500}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        
        {/* Soft Glass Overlay Card on Hover */}
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="glass-panel text-xs font-bold uppercase tracking-wider text-slate-900 px-4.5 py-2.5 rounded-full border-white/60 shadow-md transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
            Découvrir le projet
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
          {item.category}
        </span>
        <h3 className="mt-2 text-base font-extrabold text-slate-950 transition-colors duration-250 group-hover:text-blue-600">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
