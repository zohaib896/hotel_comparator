import LegalPage from "@/components/legal/LegalPage";
import type { Locale } from "@/lib/i18n";

export default function CookiePolicyPage({ params }: { params: { locale: Locale } }) {
  return <LegalPage page="cookies" locale={params.locale} />;
}
