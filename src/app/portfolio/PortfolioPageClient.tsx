"use client";

import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight, Phone } from "lucide-react";
import Image from "next/image";
import PortfolioGrid from "@/components/PortfolioGrid";
import CtaSection from "@/components/CtaSection";
import { getData } from "@/lib/data";
import { useTranslation } from "@/lib/i18n";

const { portfolio, company } = getData();

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function PortfolioPageClient() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center bg-slate-950 overflow-hidden pt-28 pb-16 sm:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/images/pro2.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-950/40 to-transparent" />
        </div>
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-sky-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-6xl px-5 w-full relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-blue-400 uppercase">
              <FolderGit2 className="h-3 w-3" />
              {t("portfolio_page.badge")}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-5 text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.12] text-white"
            >
              {t("portfolio_page.title")}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                {t("portfolio_page.title2")}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300"
            >
              {t("portfolio_page.subtitle")}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/10 hover:bg-sky-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                {t("hero.cta_primary")}
                <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>
              <a
                href={`tel:${company.phone.replace(/\s+/g, "")}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="h-4 w-4 text-sky-400" />
                {t("hero.cta_secondary")}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Grid Content Section */}
      <section className="bg-slate-50/50 py-20 border-b border-slate-200/50">
        <div className="mx-auto max-w-6xl px-5">
          <PortfolioGrid portfolio={portfolio} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
