"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioModal from "@/components/PortfolioModal";
import type { PortfolioItem } from "@/lib/data";
import { useTranslation } from "@/lib/i18n";

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

interface PortfolioGridProps {
  portfolio: PortfolioItem[];
}

export default function PortfolioGrid({ portfolio }: PortfolioGridProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const { t } = useTranslation();

  const rawCategories = ["Tous", ...Array.from(new Set(portfolio.map((item) => item.category)))];
  const categories = rawCategories.map((cat) =>
    cat === "Tous" ? t("portfolio_page.all") : t(`portfolio_category.${categoryKeyMap[cat] || cat.toLowerCase()}`)
  );

  const filteredPortfolio = activeCategory === "Tous"
    ? portfolio
    : portfolio.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-100 pb-6">
        {rawCategories.map((cat, idx) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-5 py-2.5 text-xs font-black uppercase tracking-widest rounded-full transition-colors duration-200 cursor-pointer ${
              activeCategory === cat ? "text-white" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {activeCategory === cat && (
              <motion.div
                layoutId="active-portfolio-pill"
                className="absolute inset-0 bg-sky-600 rounded-full -z-1"
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              />
            )}
            <span className="relative z-10">{categories[idx]}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredPortfolio.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              key={item.id}
            >
              <PortfolioCard
                item={item}
                onClick={() => setSelectedProject(item)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <PortfolioModal
            item={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
