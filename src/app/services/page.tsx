"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle, ArrowRight, Sparkles, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import CtaSection from "@/components/CtaSection";
import { getData } from "@/lib/data";
import { useTranslation } from "@/lib/i18n";

const { services, company } = getData();

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

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[75vh] flex items-center bg-slate-950 overflow-hidden pt-28 pb-16 sm:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_plumbers.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />
        </div>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-6xl px-5 w-full relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sky-400 uppercase">
              <Sparkles className="h-3 w-3" />
              {t("services_page.badge")}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-5 text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.12] text-white"
            >
              {t("services_page.title")}{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                {t("services_page.title2")}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300"
            >
              {t("services_page.subtitle")}
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

      {/* Services Grid Section */}
      <section className="bg-slate-50/50 py-24 border-b border-slate-200/50">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-600">
              {t("services_page.grid_label")}
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              {t("services_page.grid_title")}
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'intervention (Stepper) */}
      <section className="py-24 border-b border-slate-200/50 bg-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center mb-20">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-600">
              {t("services_page.process_label")}
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              {t("services_page.process_title")}
            </h2>
            <p className="mt-4 text-xs font-medium text-slate-500 max-w-md mx-auto">
              {t("services_page.process_desc")}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
            <div className="hidden lg:block absolute top-[44px] left-[12.5%] right-[12.5%] h-0.5 bg-slate-100 -z-10" />

            {[
              { key: "step1", num: "01" },
              { key: "step2", num: "02" },
              { key: "step3", num: "03" },
              { key: "step4", num: "04" },
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group flex flex-col items-center lg:items-start text-center lg:text-left bg-slate-50/50 hover:bg-white rounded-3xl p-6 border border-slate-100 hover:shadow-xl hover:shadow-slate-900/[0.02] transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 text-sm font-black tracking-wider transition-colors duration-300 group-hover:bg-sky-600 group-hover:text-white mb-5 shrink-0">
                  {step.num}
                </div>
                <h3 className="text-base font-black text-slate-900 leading-snug">
                  {t(`services_page.${step.key}_title`)}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-500 font-medium">
                  {t(`services_page.${step.key}_desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-24 bg-slate-50/50 border-b border-slate-200/50">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-600">
              {t("services_page.faq_label")}
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              {t("services_page.faq_title")}
            </h2>
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4].map((num) => {
              const isOpen = openFaq === num;
              return (
                <div
                  key={num}
                  className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : num)}
                    className="flex w-full items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 hover:text-sky-600 transition-colors duration-200 pr-4">
                      {t(`services_page.faq${num}_q`)}
                    </span>
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 bg-sky-50 text-sky-600" : ""}`}>
                      <ChevronDown className="h-4.5 w-4.5" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="border-t border-slate-100 p-6 pt-5 bg-slate-50/30 text-xs sm:text-sm leading-relaxed text-slate-500 font-medium">
                          {t(`services_page.faq${num}_a`)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
