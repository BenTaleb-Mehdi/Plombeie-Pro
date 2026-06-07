"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import type { PortfolioItem } from "@/lib/data";
import { useTranslation } from "@/lib/i18n";

const portfolioKeyMap: Record<string, string> = {
  "projet-1": "portfolio_projet1",
  "projet-2": "portfolio_projet2",
};

const categoryKeyMap: Record<string, string> = {
  "Rénovation": "renovation",
  "Neuf": "neuf",
  "Renovation": "renovation",
  "New Build": "neuf",
  "Renovación": "renovacion",
  "Nuevo": "neuf",
  "تجديد": "renovation",
  "بناء جديد": "neuf",
};

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick?: () => void;
  linkToPage?: boolean;
}

export default function PortfolioCard({ item, onClick, linkToPage = false }: PortfolioCardProps) {
  const { t } = useTranslation();
  const transKey = portfolioKeyMap[item.id];
  const catKey = categoryKeyMap[item.category] || item.category.toLowerCase();

  const CardContent = () => (
    <>
      <div className="aspect-[16/10.5] bg-slate-50 overflow-hidden relative border-b border-slate-100">
        <Image
          src={item.image}
          alt={transKey ? t(`${transKey}.title`) : item.title}
          width={800}
          height={500}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex rounded-full bg-slate-900/65 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur-md border border-white/10 shadow-sm">
            {transKey ? t(`${transKey}.category`) : item.category}
          </span>
        </div>

        <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="glass-panel text-xs font-black uppercase tracking-widest text-slate-900 px-5 py-3 rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5">
            {t("portfolio_page.voir_details")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between p-5 sm:p-6">
        <div>
          <h3 className="text-base sm:text-lg font-black text-slate-950 group-hover:text-sky-600 transition-colors duration-250 leading-snug">
            {transKey ? t(`${transKey}.title`) : item.title}
          </h3>
          <p className="mt-2.5 text-xs leading-relaxed text-slate-500 font-medium line-clamp-2">
            {transKey ? t(`${transKey}.description`) : item.description}
          </p>
        </div>

        {(item.location || item.duration) && (
          <div className="mt-5 pt-4 border-t border-slate-50 flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
            {item.location && (
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                {transKey ? t(`${transKey}.location`) : item.location}
              </span>
            )}
            {item.duration && (
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                {transKey ? t(`${transKey}.duration`) : item.duration}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );

  const baseClass =
    "group flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/50 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl";

  if (linkToPage) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <Link href={`/portfolio/${item.id}`} className={baseClass}>
          <CardContent />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
      onClick={onClick}
      className={`${baseClass} cursor-pointer`}
    >
      <CardContent />
    </motion.div>
  );
}
