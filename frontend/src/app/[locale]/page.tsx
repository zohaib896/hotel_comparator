import SearchExperience from "@/components/SearchExperience";
import type { Locale } from "@/lib/i18n";
import { locales, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default function LocaleHome({
  params
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return <SearchExperience locale={params.locale as Locale} />;
}
