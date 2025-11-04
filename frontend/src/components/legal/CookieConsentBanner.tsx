"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/components/TranslationProvider";

const STORAGE_KEY = "hotel-comparator-cookie-consent";

type ConsentState = "accepted" | "declined" | null;

export default function CookieConsentBanner() {
  const { t } = useTranslation();
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ConsentState | null;
    if (stored) {
      setConsent(stored);
    }
  }, []);

  const storeConsent = (value: ConsentState) => {
    if (value) {
      window.localStorage.setItem(STORAGE_KEY, value);
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setConsent(value);
  };

  if (consent) {
    return null;
  }

  return (
    <aside className="fixed inset-x-0 bottom-6 z-50 mx-auto w-[95%] max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">{t("legal.cookieBannerTitle")}</h2>
          <p className="text-sm text-slate-600">{t("legal.cookieBannerBody")}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => storeConsent("declined")}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
          >
            {t("legal.rejectAll")}
          </button>
          <button
            type="button"
            onClick={() => storeConsent("accepted")}
            className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow transition-transform hover:scale-[1.02]"
          >
            {t("legal.acceptAll")}
          </button>
        </div>
      </div>
    </aside>
  );
}
