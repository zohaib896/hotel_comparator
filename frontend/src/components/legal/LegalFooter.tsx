"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { useTranslation } from "@/components/TranslationProvider";

export default function LegalFooter({ locale }: { locale: Locale }) {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p className="text-xs md:text-sm">© {new Date().getFullYear()} Thailand Hotel Comparator</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href={`/${locale}/legal/disclosure`} className="hover:text-slate-900">
            {t("legal.disclosureHeading")}
          </Link>
          <Link href={`/${locale}/legal/privacy`} className="hover:text-slate-900">
            {t("legal.privacy")}
          </Link>
          <Link href={`/${locale}/legal/cookies`} className="hover:text-slate-900">
            {t("legal.cookies")}
          </Link>
          <Link href={`/${locale}/legal/imprint`} className="hover:text-slate-900">
            {t("legal.imprint")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
