"use client";

import { createContext, useCallback, useContext, useMemo, type ReactNode } from "react";
import type { Locale, TranslationDictionary } from "@/lib/i18n";
import { translate } from "@/lib/i18n";

type TranslationContextValue = {
  locale: Locale;
  messages: TranslationDictionary;
  t: (path: string, vars?: Record<string, string | number | boolean>) => string;
};

const TranslationContext = createContext<TranslationContextValue | undefined>(undefined);

export function TranslationProvider({
  locale,
  messages,
  children
}: {
  locale: Locale;
  messages: TranslationDictionary;
  children: ReactNode;
}) {
  const t = useCallback(
    (path: string, vars?: Record<string, string | number | boolean>) =>
      translate(messages, path, vars),
    [messages]
  );

  const value = useMemo(
    () => ({
      locale,
      messages,
      t
    }),
    [locale, messages, t]
  );

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslation() {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }

  return context;
}
