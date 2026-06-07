"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { notFound } from "next/navigation";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Clock, Calendar, Tag, CheckCircle2, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getData } from "@/lib/data";
import { useTranslation } from "@/lib/i18n";

const portfolioKeyMap: Record<string, string> = {
  "projet-1": "portfolio_projet1",
  "projet-2": "portfolio_projet2",
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const { t } = useTranslation();
  const { portfolio, company } = getData();
  const item = portfolio.find((p) => p.id === params.id);

  if (!item) notFound();

  const transKey = portfolioKeyMap[item.id];
  const translatedTitle = transKey ? t(`${transKey}.title`) : item.title;
  const translatedCategory = transKey ? t(`${transKey}.category`) : item.category;
  const translatedDescription = transKey ? t(`${transKey}.description`) : item.description;
  const translatedDetails = transKey ? t(`${transKey}.details`) : (item.details || item.description);
  const translatedLocation = transKey ? t(`${transKey}.location`) : (item.location || "Tanger");
  const translatedDuration = transKey ? t(`${transKey}.duration`) : (item.duration || "N/A");
  const translatedDate = transKey ? t(`${transKey}.date`) : (item.date || "2026");

  const images = item.images && item.images.length > 0 ? item.images : [item.image];
  const [activeIdx, setActiveIdx] = useState(0);

  const whatsappMessage = `Bonjour Plomberie Pro, je suis intéressé par votre réalisation "${translatedTitle}". J'aimerais un devis similaire.`;

  return (
    <>
      <section className="relative bg-slate-950 text-white pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950/80 pointer-events-none z-10" />
        <Image
          src={images[0]}
          alt={translatedTitle}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />

        <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 pb-12 pt-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("portfolio_page.back_to")}
          </Link>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/15 border border-sky-500/25 px-3 py-1 text-xs font-semibold tracking-widest text-sky-400 uppercase mb-4">
            <Tag className="h-3 w-3" />
            {translatedCategory}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-3xl">
            {translatedTitle}
          </h1>

          <div className="mt-6 flex flex-wrap gap-4">
            {[
              { Icon: MapPin, value: translatedLocation },
              { Icon: Clock, value: translatedDuration },
              { Icon: Calendar, value: translatedDate },
            ].map(({ Icon, value }) => (
              <div key={value} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                <Icon className="h-4 w-4 text-sky-400 shrink-0" />
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">

            <div className="flex flex-col gap-8">
              <div className="relative w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xl"
                style={{ aspectRatio: "16/9" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0.4, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.4 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[activeIdx]}
                      alt={`${translatedTitle} – ${activeIdx + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveIdx((p) => (p - 1 + images.length) % images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white text-slate-800 transition-all hover:scale-105 active:scale-95 cursor-pointer z-10"
                      aria-label="Image précédente"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setActiveIdx((p) => (p + 1) % images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white text-slate-800 transition-all hover:scale-105 active:scale-95 cursor-pointer z-10"
                      aria-label="Image suivante"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`relative shrink-0 h-16 w-24 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                        idx === activeIdx
                          ? "border-sky-500 shadow-md scale-105"
                          : "border-slate-200 opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`Image ${idx + 1}`}
                    >
                      <Image src={img} alt={`Thumb ${idx + 1}`} fill sizes="96px" className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100">
                <h2 className="text-lg font-black text-slate-900 mb-3">{t("modal.description")}</h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 whitespace-pre-line">
                  {translatedDetails}
                </p>
              </div>

              {item.features && item.features.length > 0 && (
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg font-black text-slate-900">{t("modal.works")}</h2>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {item.features.map((_, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.07 }}
                        className="flex items-start gap-3 bg-white rounded-2xl p-3.5 border border-slate-100 shadow-sm"
                      >
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 font-semibold">
                          {transKey ? t(`${transKey}.features.${idx}`) : item.features![idx]}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="flex flex-col gap-5">
              <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 sticky top-24">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">
                  {t("portfolio_page.details_title")}
                </h3>
                <div className="flex flex-col divide-y divide-slate-100">
                  {[
                    { label: t("modal.location"), value: translatedLocation },
                    { label: t("modal.duration"), value: translatedDuration },
                    { label: t("modal.date"), value: translatedDate },
                    { label: t("portfolio_page.category_label"), value: translatedCategory },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between py-3">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{label}</span>
                      <span className="text-sm font-black text-slate-800">{value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`${company.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 w-full rounded-full bg-slate-950 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-lg hover:bg-slate-800 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <WhatsAppIcon className="h-4 w-4 text-green-400" />
                  {t("modal.cta")}
                </a>

                <Link
                  href="/contact"
                  className="mt-3 flex items-center justify-center gap-2 w-full rounded-full border border-slate-200 bg-white px-6 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all duration-200"
                >
                  {t("portfolio_page.quote_request")}
                </Link>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
                  {t("portfolio_page.related")}
                </h4>
                <div className="flex flex-col gap-2">
                  {portfolio
                    .filter((p) => p.id !== item.id)
                    .slice(0, 3)
                    .map((p) => {
                      const pKey = portfolioKeyMap[p.id];
                      const pTitle = pKey ? t(`${pKey}.title`) : p.title;
                      const pCat = pKey ? t(`${pKey}.category`) : p.category;
                      return (
                        <Link
                          key={p.id}
                          href={`/portfolio/${p.id}`}
                          className="flex items-center gap-3 rounded-2xl bg-white p-2.5 border border-slate-100 hover:border-sky-200 hover:shadow-sm transition-all duration-200 group"
                        >
                          <div className="relative h-12 w-16 rounded-xl overflow-hidden shrink-0">
                            <Image src={p.image} alt={pTitle} fill sizes="64px" className="object-cover" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-xs font-black text-slate-800 line-clamp-1 group-hover:text-sky-600 transition-colors">{pTitle}</span>
                            <span className="text-[10px] text-slate-400 font-medium mt-0.5">{pCat}</span>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
