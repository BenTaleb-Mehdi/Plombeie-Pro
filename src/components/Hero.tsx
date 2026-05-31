"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone, CheckCircle, Shield, Star, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { getData } from "@/lib/data";

const { company } = getData();

// Custom Official WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const floatProps = {
  animate: { y: [0, -8, 0] as number[] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
} as const;

const floatDelayProps = {
  animate: { y: [0, 8, 0] as number[] },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
} as const;

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center border-b border-slate-100 bg-white overflow-hidden pt-28 pb-16 sm:pb-24">
      {/* Subtle Premium Blur Backdrops */}
      <div className="absolute top-[-5%] left-[10%] w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] bg-sky-400/[0.02] rounded-full blur-[110px] -z-10 pointer-events-none" />

      {/* Grid Overlay for subtle texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-5 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

          {/* Left Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl flex flex-col justify-center"
          >
            {/* Animated Modern Badge */}
            <motion.div variants={itemVariants} className="inline-flex self-start">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 ring-1 ring-blue-700/10 shadow-sm">
                <Shield className="h-3.5 w-3.5 text-blue-600" />
                Artisans Plombiers Tanger
              </span>
            </motion.div>

            {/* Typography Reveal Heading */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.25rem] leading-[1.15]"
            >
              Votre confort thermique & sanitaire,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                sans compromis.
              </span>
            </motion.h1>

            {/* Minimalist Subtext */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Intervention d'urgence garantie en 30 minutes 24h/7, installations neuves de haute précision et rénovations durables à Tanger.
            </motion.p>

            {/* Rating Badge */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex items-center gap-1 text-slate-900 font-semibold"
            >
              <div className="flex items-center gap-0.5 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <span className="text-sm ml-1.5 text-slate-800">
                4.9/5 par nos clients à Tanger
              </span>
            </motion.div>

            {/* Staggered Call to Actions */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-slate-950/10 hover:bg-slate-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsAppIcon className="h-4.5 w-4.5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                Demander un devis WhatsApp
                <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>

              <a
                href={`tel:${company.phone}`}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="h-4 w-4 text-blue-600 transition-transform duration-300 group-hover:rotate-12" />
                Appeler : {company.phone}
              </a>
            </motion.div>

            {/* Trust Points */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-2 gap-y-4 gap-x-6 sm:grid-cols-4"
            >
              {[
                { text: "Urgence 24h/7", desc: "SOS Fuite 30min" },
                { text: "Garantie 10 Ans", desc: "Assurance décennale" },
                { text: "Devis Gratuit", desc: "100% Transparent" },
                { text: "Artisan Agréé", desc: "Matériaux certifiés" },
              ].map((point, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-900">{point.text}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 pl-6 leading-none">{point.desc}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            {/* Outer decorative ring */}
            <div className="absolute inset-[-12px] rounded-[3rem] border border-blue-500/[0.03] pointer-events-none -z-10" />

            <div className="relative w-full max-w-[420px] aspect-square overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-200/50 shadow-2xl shadow-slate-100/60 group">
              <Image
                src="/images/hero_plumbers.png"
                alt="Nos experts plombiers à Tanger"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/5 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Glass Cards */}
            <motion.div
              animate={floatProps.animate}
              transition={floatProps.transition}
              className="glass-panel rounded-2xl p-4 shadow-xl border-white/80 absolute -top-4 -left-6 max-w-[175px] hidden sm:flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Disponibilité</p>
                <p className="text-xs font-extrabold text-slate-900 leading-none">24h/7 & Urgences</p>
              </div>
            </motion.div>

            <motion.div
              animate={floatDelayProps.animate}
              transition={floatDelayProps.transition}
              className="glass-panel rounded-2xl p-4 shadow-xl border-white/80 absolute -bottom-6 -right-4 max-w-[195px] hidden sm:flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  <Clock className="h-5 w-5 text-blue-600" />
                </motion.div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Intervention SOS</p>
                <p className="text-xs font-extrabold text-slate-900 leading-none">Moins de 30 minutes</p>
              </div>
            </motion.div>

            <motion.div
              className="glass-panel rounded-full px-4 py-2.5 shadow-md border-white/60 absolute bottom-10 -left-10 hidden md:flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <MapPin className="h-3.5 w-3.5 text-blue-600 animate-bounce" />
              <span className="text-xs font-bold text-slate-900">Interventions à Tanger</span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
