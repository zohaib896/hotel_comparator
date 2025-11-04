import LegalPage from "@/components/legal/LegalPage";
import type { Locale } from "@/lib/i18n";

export default function PrivacyPage({ params }: { params: { locale: Locale } }) {
  return <LegalPage page="privacy" locale={params.locale} />;
}
