import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TranslationProvider } from "@/components/TranslationProvider";
import { getTranslations, isLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Thailand Hotel Comparator",
  description: "Compare Bangkok hotel rates from Booking.com, Expedia, Agoda, and Trip.com."
};

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const localeParam = params.locale;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const messages = getTranslations(locale);

  return <TranslationProvider locale={locale} messages={messages}>{children}</TranslationProvider>;
}
