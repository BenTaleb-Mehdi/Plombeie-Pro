"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";
import { getData } from "@/lib/data";
import { useTranslation } from "@/lib/i18n";

const { about } = getData();

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <SectionHeading
            label={t("nav.about")}
            title={about.title}
            description={about.description}
          />
        </div>
      </section>

      <StatsSection stats={about.stats} />

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold text-slate-900">
                {about.title}
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-500">
                <p>
                  {about.description}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="border border-slate-200 bg-slate-50 p-8"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {t("services_page.process_title")}
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  t("hero.trust"),
                  t("services_page.step1_title"),
                  t("services_page.step2_title"),
                  t("services_page.step3_title"),
                  t("services_page.step4_title"),
                  t("cta.subtitle"),
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
