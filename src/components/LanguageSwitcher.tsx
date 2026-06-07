"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation, type Locale } from "@/lib/i18n";
import { ChevronDown, Globe } from "lucide-react";

const LANGS: { code: Locale; label: string; flag: string }[] = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "ar", label: "AR", flag: "🇲🇦" },
];

interface LanguageSwitcherProps {
  variant?: "navbar" | "sidebar";
}

export default function LanguageSwitcher({ variant = "navbar" }: LanguageSwitcherProps) {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const current = LANGS.find((l) => l.code === locale) ?? LANGS[0];

  if (variant === "sidebar") {
    return (
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-800 transition-all duration-200"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className="flex items-center gap-2">
            <span aria-hidden="true">{current.flag}</span>
            <span>{current.label}</span>
          </span>
          <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <div
            className="absolute bottom-full left-0 right-0 mb-1 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden z-50"
            role="listbox"
          >
            {LANGS.map(({ code, label, flag }) => (
              <button
                key={code}
                onClick={() => { setLocale(code); setOpen(false); }}
                role="option"
                aria-selected={locale === code}
                className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm font-bold transition-colors duration-200 ${
                  locale === code
                    ? "bg-sky-50 text-sky-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span aria-hidden="true">{flag}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-extrabold tracking-wide text-slate-700 transition-all duration-200 hover:bg-slate-200"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="h-3.5 w-3.5 text-slate-400" />
        <span>{current.label}</span>
        <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className="absolute right-0 top-full mt-1.5 min-w-[130px] rounded-xl bg-white border border-slate-200 shadow-xl overflow-hidden z-50"
          role="listbox"
        >
          {LANGS.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => { setLocale(code); setOpen(false); }}
              role="option"
              aria-selected={locale === code}
              className={`flex w-full items-center gap-2 px-3.5 py-2.5 text-xs font-bold transition-colors duration-200 ${
                locale === code
                  ? "bg-sky-50 text-sky-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <span aria-hidden="true">{flag}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
