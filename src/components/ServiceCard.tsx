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
      className="group border border-slate-200 bg-white p-8 hover:border-blue-600 transition-colors duration-300"
    >
      <Icon className="h-8 w-8 text-blue-600" />
      <h3 className="mt-6 text-lg font-bold text-slate-900">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        {service.description}
      </p>
      <a
        href={`${company.whatsapp}?text=${encodeURIComponent(service.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
      >
        Demander un devis
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </motion.div>
  );
}
