"use client";

import { motion } from "framer-motion";
import { Wrench, Droplet, Layers, Flame, ArrowRight } from "lucide-react";
import type { Service } from "@/lib/data";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Droplet,
  Layers,
  Flame,
};

const serviceKeyMap: Record<string, string> = {
  "plomberie-generale": "service_depannage",
  "debouchage-canalisations": "service_debouchage",
  "chauffe-eau": "service_chauffe-eau",
  "detection-fuites": "service_detection",
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Wrench;
  const { t } = useTranslation();

  const transKey = serviceKeyMap[service.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
      className="group flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white border border-slate-200/50 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-500/[0.04]"
    >
      <div className="relative">
        {service.image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        )}

        <div className="absolute -bottom-6 left-6 z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-1 shadow-md border border-slate-100/50">
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-600 group-hover:text-white">
            <Icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 pt-9">
        <div>
          <h3 className="text-lg font-black tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-sky-600 leading-snug">
            {transKey ? t(`${transKey}.title`) : service.title}
          </h3>
          <p className="mt-3.5 text-xs leading-relaxed text-slate-500 font-medium">
            {transKey ? t(`${transKey}.description`) : service.description}
          </p>
        </div>

        <div className="mt-7 pt-4 border-t border-slate-50">
          <a
            href={`/contact?service=${service.id}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors group/link"
          >
            Demander un devis
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
