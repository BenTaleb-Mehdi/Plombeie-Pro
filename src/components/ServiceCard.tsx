"use client";

import { motion } from "framer-motion";
import { Wrench, Droplet, Layers, Flame, ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";
import { getData } from "@/lib/data";

const { company } = getData();

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Droplet,
  Layers,
  Flame,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm shadow-blue-100/70">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {service.description}
      </p>
      <a
        href={`${company.whatsapp}?text=${encodeURIComponent(service.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-slate-950"
      >
        Demander un devis
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
    </motion.div>
  );
}
