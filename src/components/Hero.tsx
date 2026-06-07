"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone, CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getData } from "@/lib/data";
import { useTranslation } from "@/lib/i18n";

const { company } = getData();

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
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

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[92vh] flex items-center bg-white overflow-hidden pt-28 pb-16 sm:pb-24">
      <div className="absolute top-[-5%] left-[10%] w-[600px] h-[600px] bg-sky-500/[0.03] rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[110px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-5 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="inline-flex self-start">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-sky-600">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-[3.25rem] leading-[1.12]"
            >
              {t("hero.title")}{" "}
              <span className="relative inline-block px-1">
                <span className="relative z-10 font-script text-sky-600 normal-case font-normal lg:text-[3.75rem]">
                  {t("hero.title2")}
                </span>
                <span className="absolute bottom-1 left-0 right-0 h-1.5 bg-sky-100 -z-1" />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 max-w-lg text-base leading-relaxed text-slate-600">
              {t("hero.subtitle")}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/10 hover:bg-sky-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                {t("hero.cta_primary")}
                <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </Link>

              <a
                href={`tel:${company.phone.replace(/\s+/g, "")}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="h-4 w-4 text-sky-600" />
                {t("hero.cta_secondary")}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-3 gap-4"
            >
              {[
                { value: "30+", label: "Ans d'Expérience" },
                { value: "100%", label: "Satisfaction client" },
                { value: "5/5", label: "Avis Clients" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-black text-slate-900 leading-none">{stat.value}</span>
                  <span className="text-[11px] font-semibold text-slate-500 mt-1.5 uppercase tracking-wider leading-tight">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Reviews */}
            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
                ].map((src, i) => (
                  <div key={i} className="relative h-7 w-7 rounded-full overflow-hidden border-2 border-white bg-slate-100 shrink-0">
                    <Image src={src} alt="Client" fill sizes="28px" className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <span className="text-xs font-semibold text-slate-700 leading-none mt-1">
                  {t("hero.trust")}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[390px] aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-200/50 shadow-2xl group">
              <Image
                src="/images/plumber.png"
                alt="Plombier professionnel en action"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3 shrink-0 min-w-[170px]">
              <div className="h-8 w-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                <CheckCircle className="h-4.5 w-4.5 text-sky-600" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xs font-black text-slate-900">Agréé &amp; Assuré</span>
                <span className="text-[10px] font-semibold text-slate-400 mt-1">Garantie Professionnelle</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
