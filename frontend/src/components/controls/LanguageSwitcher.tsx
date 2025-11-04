"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import { useTranslation } from "@/components/TranslationProvider";

type LanguageSwitcherProps = {
  locale: Locale;
};

function buildHref(currentPath: string, targetLocale: Locale) {
  const segments = currentPath.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${targetLocale}`;
  }

  segments[0] = targetLocale;
  return `/${segments.join("/")}`;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const { t } = useTranslation();

  return (
    <nav aria-label={t("navigation.languageSwitcherLabel")}
      className="flex items-center gap-2 rounded-full bg-slate-100 px-2 py-1 text-sm text-slate-600">
      {locales.map((option) => {
        const href = buildHref(pathname, option);
        const isActive = option === locale;

        return (
          <Link
            key={option}
            href={href}
            className={clsx(
              "rounded-full px-3 py-1 transition-colors",
              isActive
                ? "bg-white font-semibold text-slate-900 shadow"
                : "hover:bg-white/70"
            )}
            prefetch
          >
            {option === "en" ? t("navigation.english") : t("navigation.german")}
          </Link>
        );
      })}
    </nav>
  );
}
