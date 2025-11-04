import type { Locale } from "@/lib/i18n";
import { getLegalContent } from "@/lib/legalContent";

export default function LegalPage({ page, locale }: { page: "disclosure" | "privacy" | "cookies" | "imprint"; locale: Locale }) {
  const content = getLegalContent(page, locale);

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-10">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900">{content.title}</h1>
        {content.intro && <p className="text-base text-slate-600">{content.intro}</p>}
      </header>
      <div className="space-y-8">
        {content.sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
            {section.body.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
