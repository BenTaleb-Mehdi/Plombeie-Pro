"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";
import { getData } from "@/lib/data";

const { about } = getData();

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <SectionHeading
            label="À Propos"
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
                Une expertise locale au service de votre confort
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-500">
                <p>
                  Forts de plusieurs années d&apos;expérience dans le
                  domaine de la plomberie, nous avons bâti notre
                  réputation sur la qualité de nos installations et la
                  rapidité de nos interventions.
                </p>
                <p>
                  Chaque chantier est abordé avec la même rigueur :
                  diagnostic précis, conseils transparents et execution
                  soignée. Nous utilisons des matériaux certifiés et
                  respectons les normes en vigueur pour garantir la
                  durabilité de nos travaux.
                </p>
                <p>
                  Que vous soyez un particulier souhaitant rénover
                  votre salle de bain ou un professionnel confronté à
                  une urgence, nous nous déplaçons dans toute la région
                  de Tanger avec un engagement : celui de faire le
                  travail proprement, dans les délais et au prix convenu.
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
                Nos engagements
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Devis gratuit et sans engagement",
                  "Intervention sous 30 minutes en urgence",
                  "Garantie décennale sur tous nos travaux",
                  "Matériaux de première qualité",
                  "Propreté et respect des lieux",
                  "Transparence totale sur les prix",
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
