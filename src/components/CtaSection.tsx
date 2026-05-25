"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getData } from "@/lib/data";

const { company } = getData();

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
}

export default function CtaSection({
  title = "Prêt à concrétiser votre projet ?",
  description = "Contactez-nous dès maintenant pour un devis gratuit et une intervention rapide.",
  buttonLabel = "Nous écrire sur WhatsApp",
}: CtaSectionProps) {
  return (
    <section className="bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-5 py-16 text-center sm:py-20"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-300">
          {description}
        </p>
        <a
          href={company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-slate-100/90"
        >
          {buttonLabel}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}
