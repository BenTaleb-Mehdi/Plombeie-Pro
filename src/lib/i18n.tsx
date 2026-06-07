"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

// ── Types ────────────────────────────────────────────────────────────────────
export type Locale = "fr" | "en" | "es" | "ar";

type NestedValue = string | NestedStrings | string[];
type NestedStrings = { [key: string]: NestedValue };

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

// ── Static imports of all locales ────────────────────────────────────────────
import fr from "./locales/fr.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import ar from "./locales/ar.json";

const locales: Record<Locale, NestedStrings> = { fr, en, es, ar };

// ── Helpers ──────────────────────────────────────────────────────────────────
function getNestedValue(obj: NestedStrings, key: string): string {
  const parts = key.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return key;
    current = current[part];
  }
  return typeof current === "string" ? current : key;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _typeCheck: Record<Locale, NestedStrings> = {} as Record<Locale, NestedStrings>;

// ── Context ──────────────────────────────────────────────────────────────────
const I18nContext = createContext<I18nContextValue>({
  locale: "fr",
  setLocale: () => {},
  t: (k) => k,
  dir: "ltr",
});

// ── Provider ─────────────────────────────────────────────────────────────────
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr";

  // Apply dir and lang to <html> element
  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
    document.documentElement.setAttribute("dir", dir);
    // Persist preference
    try {
      localStorage.setItem("preferred-locale", locale);
    } catch {}
  }, [locale, dir]);

  // Restore saved preference on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred-locale") as Locale | null;
      if (saved && locales[saved]) setLocaleState(saved);
    } catch {}
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
  }, []);

  const t = useCallback(
    (key: string): string => getNestedValue(locales[locale], key),
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

// ── Hook ─────────────────────────────────────────────────────────────────────
export function useTranslation() {
  return useContext(I18nContext);
}
