import LegalPage from "@/components/legal/LegalPage";
import type { Locale } from "@/lib/i18n";

export default function ImprintPage({ params }: { params: { locale: Locale } }) {
  return <LegalPage page="imprint" locale={params.locale} />;
}
