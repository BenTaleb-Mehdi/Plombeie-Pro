"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Clock, Tag, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { PortfolioItem } from "@/lib/data";
import { getData } from "@/lib/data";

const { company } = getData();

// Custom Official WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

interface PortfolioModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  const images = item.images && item.images.length > 0 ? item.images : [item.image];
  const [activeIdx, setActiveIdx] = useState(0);

  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("no-scroll");

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [onClose]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const whatsappMessage = `Bonjour Plomberie Pro, je suis très intéressé par votre projet "${item.title}". J'aimerais solliciter une prestation similaire pour mon domicile. Pouvons-nous en discuter ?`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop blur with fade animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/40 backdrop-blur-md"
      />

      {/* Modal Dialog Box with spring transition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: "spring", damping: 26, stiffness: 220 }}
        className="relative w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col z-10"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/60 hover:bg-slate-900/85 text-white shadow-md backdrop-blur-sm transition-all hover:scale-105 active:scale-95 border-0 cursor-pointer"
          aria-label="Close details"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content Container (Scrollable) */}
        <div className="overflow-y-auto flex-1 flex flex-col">
          
          {/* Top Section: Multi-Image Carousel */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] min-h-[250px] bg-slate-50 border-b border-slate-100 overflow-hidden shrink-0">
            {/* Image Slider */}
            <div className="relative h-full w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={images[activeIdx]}
                    alt={`${item.title} - Image ${activeIdx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    className="h-full w-full object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Carousel Controls (only if more than 1 image) */}
            {images.length > 1 && (
              <>
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm transition-all hover:scale-105 active:scale-95 border border-slate-200/50 cursor-pointer"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm transition-all hover:scale-105 active:scale-95 border border-slate-200/50 cursor-pointer"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIdx(idx);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeIdx ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Aller à l'image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Floating Category Tag */}
            <div className="absolute bottom-4 left-4 z-20">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/10">
                <Tag className="h-3 w-3 text-blue-400" />
                {item.category}
              </span>
            </div>
          </div>

          {/* Bottom Section: Full-Width Details Content */}
          <div className="p-6 sm:p-10 flex-1 flex flex-col justify-between">
            <div>
              {/* Main title */}
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl leading-snug">
                {item.title}
              </h2>

              {/* Quick stats row */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-slate-100 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Localisation</p>
                    <p className="text-sm font-extrabold text-slate-800">{item.location || "Tanger"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Clock className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Durée du Chantier</p>
                    <p className="text-sm font-extrabold text-slate-800">{item.duration || "N/A"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Calendar className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Date de Réalisation</p>
                    <p className="text-sm font-extrabold text-slate-800">{item.date || "2026"}</p>
                  </div>
                </div>
              </div>

              {/* Extended Details Narrative */}
              <div className="mt-8">
                <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Description du Projet</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 whitespace-pre-line">
                  {item.details || item.description}
                </p>
              </div>

              {/* Features Checklist */}
              {item.features && item.features.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-4">Travaux Réalisés</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 bg-slate-50/50 rounded-xl p-3 border border-slate-100/50">
                        <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 font-medium leading-normal">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Call to action booking */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex justify-center">
              <a
                href={`${company.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-slate-900 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-4.5 w-4.5 text-green-400" />
                Demander un projet similaire
              </a>
            </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
}
