"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone, CheckCircle, Shield } from "lucide-react";
import Image from "next/image";
import { getData } from "@/lib/data";

const { company } = getData();

// Custom Official WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center border-b border-slate-200/60 bg-grid-pattern overflow-hidden pt-28 pb-16 sm:pb-24">
      {/* Premium Ambient Background Elements */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-sky-400/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* Left Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl flex flex-col justify-center"
          >
            {/* Animated Modern Badge */}
            <motion.div variants={itemVariants} className="inline-flex self-start">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 ring-1 ring-blue-600/10 backdrop-blur-md shadow-sm">
                <Shield className="h-3.5 w-3.5" />
                Plomberie d'excellence
              </span>
            </motion.div>

            {/* Typography Reveal Heading */}
            <motion.h1 
              variants={itemVariants} 
              className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem] leading-[1.15]"
            >
              Chauffage, sanitaires et <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">dépannage</span> d'exception.
            </motion.h1>

            {/* Minimalist Subtext */}
            <motion.p 
              variants={itemVariants} 
              className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Une approche minimaliste, des interventions garanties sous 30 minutes et des finitions soignées pour sublimer vos installations à Tanger.
            </motion.p>

            {/* Staggered Call to Actions */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsAppIcon className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                Demander un devis WhatsApp
                <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>
              
              <a
                href={`tel:${company.phone}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-md hover:border-slate-300 hover:bg-white hover:text-slate-950 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="h-4 w-4 text-blue-600 transition-transform duration-300 group-hover:rotate-12" />
                {company.phone}
              </a>
            </motion.div>

            {/* Micro details / Badges */}
            <motion.div 
              variants={itemVariants} 
              className="mt-10 pt-8 border-t border-slate-200/60 grid grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Artisan Qualifié Pro</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Garantie Décennale</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Dynamic Grid Layout for Images */}
            <div className="grid gap-4">
              {/* Primary Large Image */}
              <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white shadow-xl shadow-slate-200/30 group">
                <Image
                  src="/images/project1.jpeg"
                  alt="Dépannage professionnel"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                
                {/* Floating Glass Badges */}
                <div className="absolute top-4 left-4 inline-flex">
                  <div className="glass-panel rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-900 shadow-sm flex items-center gap-2 border-white/60">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Disponible 24h/7
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 inline-flex">
                  <div className="glass-panel rounded-full px-4 py-2 text-xs font-bold text-slate-900 shadow-md flex items-center gap-2 border-white/60">
                    Intervention en 30m
                  </div>
                </div>
              </div>

              {/* Two Asymmetric Side-by-side Images */}
              <div className="grid gap-4 grid-cols-2">
                <div className="relative aspect-3/2 overflow-hidden rounded-2xl border border-slate-200/40 bg-white shadow-md group">
                  <Image
                    src="/images/pro2.jpg"
                    alt="Rénovation cuivre"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="relative aspect-3/2 overflow-hidden rounded-2xl border border-slate-200/40 bg-white shadow-md group">
                  <Image
                    src="/images/pro1.jpg"
                    alt="Sanitaire haut de gamme"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
