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
    <section className="bg-blue-600">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-5 py-20 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-100">
          {description}
        </p>
        <a
          href={company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 border border-white bg-white px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-transparent hover:text-white transition-colors duration-200"
        >
          {buttonLabel}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}
