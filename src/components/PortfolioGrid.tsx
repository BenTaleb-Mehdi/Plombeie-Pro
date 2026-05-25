"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioModal from "@/components/PortfolioModal";
import type { PortfolioItem } from "@/lib/data";

interface PortfolioGridProps {
  portfolio: PortfolioItem[];
}

export default function PortfolioGrid({ portfolio }: PortfolioGridProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {portfolio.map((item) => (
          <PortfolioCard 
            key={item.id} 
            item={item} 
            onClick={() => setSelectedProject(item)}
          />
        ))}
      </div>

      {/* Dynamic Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <PortfolioModal 
            item={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
