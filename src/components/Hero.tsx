"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import Image from "next/image";
import { getData } from "@/lib/data";

const { company } = getData();

export default function Hero() {
  return (
    <section className="relative border-b border-slate-200 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-blue-700">
              Plomberie moderne
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Chauffage, sanitaires et dépannage sans compromis.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Une approche minimale, des interventions rapides et une finition
              propre pour tous vos projets de plomberie à Tanger.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-all duration-200"
              >
                Demander un devis
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${company.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-300 hover:text-slate-800 transition-all duration-200"
              >
                <Phone className="h-4 w-4" />
                {company.phone}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid gap-5"
          >
            <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-xl shadow-slate-200/10">
              <Image
                src="/images/project1.jpeg"
                alt="Travail de plomberie professionnel"
                width={720}
                height={540}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-md shadow-slate-200/40">
                <Image
                  src="/images/pro2.jpg"
                  alt="Installation sanitaire minimale"
                  width={360}
                  height={240}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-md shadow-slate-200/40">
                <Image
                  src="/images/pro1.jpg"
                  alt="Rénovation de tuyauterie"
                  width={360}
                  height={240}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
