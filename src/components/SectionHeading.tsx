"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-2xl"
    >
      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-600">
        {label}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
      )}
    </motion.div>
  );
}
