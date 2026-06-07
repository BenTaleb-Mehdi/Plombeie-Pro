"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Clock, Tag, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { PortfolioItem } from "@/lib/data";
import { getData } from "@/lib/data";
import { useTranslation } from "@/lib/i18n";

const { company } = getData();

const portfolioKeyMap: Record<string, string> = {
  "projet-1": "portfolio_projet1",
  "projet-2": "portfolio_projet2",
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface PortfolioModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  const { t } = useTranslation();
  const transKey = portfolioKeyMap[item.id];
  const images = item.images && item.images.length > 0 ? item.images : [item.image];
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveIdx((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setActiveIdx((p) => (p - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("no-scroll");
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [onClose, images.length]);

  const handleNext = (e: React.MouseEvent) => { e.stopPropagation(); setActiveIdx((p) => (p + 1) % images.length); };
  const handlePrev = (e: React.MouseEvent) => { e.stopPropagation(); setActiveIdx((p) => (p - 1 + images.length) % images.length); };

  const translatedTitle = transKey ? t(`${transKey}.title`) : item.title;
  const translatedCategory = transKey ? t(`${transKey}.category`) : item.category;
  const translatedDescription = transKey ? t(`${transKey}.description`) : item.description;
  const translatedDetails = transKey ? t(`${transKey}.details`) : (item.details || item.description);
  const translatedLocation = transKey ? t(`${transKey}.location`) : (item.location || "Tanger");
  const translatedDuration = transKey ? t(`${transKey}.duration`) : (item.duration || "N/A");
  const translatedDate = transKey ? t(`${transKey}.date`) : (item.date || "2026");

  const whatsappMessage = `Bonjour Plomberie Pro, je suis très intéressé par votre réalisation de "${translatedTitle}". J'aimerais solliciter un devis ou une prestation similaire pour mon domicile.`;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ type: "spring", damping: 30, stiffness: 260 }}
        className={[
          "relative z-10 w-full bg-white shadow-2xl overflow-hidden",
          "rounded-t-3xl max-h-[95dvh] flex flex-col",
          "sm:rounded-[2.5rem] sm:max-w-5xl sm:max-h-[88vh]",
          "lg:grid lg:grid-cols-12 lg:h-[78vh] lg:max-h-[78vh]",
          "border border-slate-100",
        ].join(" ")}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-40 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 hover:bg-slate-900/90 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="lg:col-span-7 relative flex flex-col bg-slate-900 overflow-hidden shrink-0"
          style={{ height: "clamp(220px, 45vw, 420px)" }}
        >
          <div className="lg:absolute lg:inset-0 lg:h-auto lg:flex-auto" style={{ position: undefined }}>
            <div className="relative flex-1 h-full overflow-hidden" style={{ minHeight: 0 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0.4, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.4, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[activeIdx]}
                    alt={`${translatedTitle} – image ${activeIdx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/65 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur-md border border-white/10">
                  <Tag className="h-3 w-3 text-sky-400" />
                  {translatedCategory}
                </span>
              </div>

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer z-10"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer z-10"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {images.length > 1 && (
            <div className="lg:absolute lg:bottom-0 lg:inset-x-0 bg-slate-900/95 p-3 flex items-center gap-2 border-t border-slate-800 shrink-0 overflow-x-auto">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setActiveIdx(idx); }}
                  className={`relative h-10 w-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all duration-200 cursor-pointer ${
                    idx === activeIdx ? "border-sky-500 shadow-md scale-105" : "border-transparent opacity-55 hover:opacity-90"
                  }`}
                  aria-label={`Image ${idx + 1}`}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill sizes="56px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div
          className="lg:col-span-5 flex flex-col overflow-y-auto bg-white flex-1"
          style={{ minHeight: 0 }}
        >
          <div className="p-5 sm:p-7 flex flex-col gap-5 h-full">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-600">
                {translatedCategory}
              </span>
              <h2 className="mt-1.5 text-lg sm:text-2xl font-black tracking-tight text-slate-950 leading-snug">
                {translatedTitle}
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { Icon: MapPin, label: t("modal.location"), value: translatedLocation },
                { Icon: Clock, label: t("modal.duration"), value: translatedDuration },
                { Icon: Calendar, label: t("modal.date"), value: translatedDate },
              ].map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center p-2 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <Icon className="h-4 w-4 text-sky-600 mb-1 shrink-0" />
                  <span className="text-[9px] uppercase font-bold text-slate-400">{label}</span>
                  <span className="text-[11px] font-black text-slate-800 mt-0.5 line-clamp-1">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1.5">
              <h4 className="text-[10px] uppercase font-black tracking-widest text-slate-400">
                {t("modal.description")}
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium whitespace-pre-line">
                {translatedDetails}
              </p>
            </div>

            {item.features && item.features.length > 0 && (
              <div className="flex flex-col gap-2">
                <h4 className="text-[10px] uppercase font-black tracking-widest text-slate-400">
                  {t("modal.works")}
                </h4>
                <div className="flex flex-col gap-1.5">
                  {item.features.map((_, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 bg-slate-50 rounded-xl p-2.5 border border-slate-100"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-semibold leading-normal">
                        {transKey ? t(`${transKey}.features.${idx}`) : item.features![idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-auto pt-4 border-t border-slate-100">
              <a
                href={`${company.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full rounded-full bg-slate-950 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-lg hover:bg-slate-800 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsAppIcon className="h-4 w-4 text-green-400" />
                {t("modal.cta")}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
