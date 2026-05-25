"use client";

import { motion } from "framer-motion";
import type { Stat } from "@/lib/data";

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="rounded-3xl bg-white/90 p-6 text-center shadow-sm ring-1 ring-slate-200/40"
            >
              <span className="text-4xl font-semibold tracking-tight text-slate-900">
                {stat.value}
              </span>
              <p className="mt-3 text-sm font-medium text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
