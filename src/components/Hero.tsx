"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import Image from "next/image";
import { getData } from "@/lib/data";

const { company } = getData();

export default function Hero() {
  return (
    <section className="relative border-b border-slate-200 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600">
              Artisan plombier &agrave; Tanger
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Plomberie d&rsquo;excellence, interventions sans compromis.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              Installations durables, r&eacute;novations compl&egrave;tes et
              d&eacute;pannages d&rsquo;urgence sous 30 minutes &agrave; Tanger
              et sa r&eacute;gion.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 hover:bg-blue-700 hover:text-white transition-all duration-200"
              >
                Demander un devis
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${company.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
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
            <div className="relative overflow-hidden rounded-4xl bg-slate-100 shadow-2xl">
              <Image
                src="/images/project1.jpeg"
                alt="Travail de plomberie professionnel"
                width={720}
                height={540}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
                <Image
                  src="/images/pro2.jpg"
                  alt="Installation sanitaire minimale"
                  width={360}
                  height={240}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
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
