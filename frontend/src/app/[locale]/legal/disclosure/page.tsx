import LegalPage from "@/components/legal/LegalPage";
import type { Locale } from "@/lib/i18n";

export default function DisclosurePage({ params }: { params: { locale: Locale } }) {
  return <LegalPage page="disclosure" locale={params.locale} />;
}
