export const locales = ["en", "de"] as const;

export type Locale = (typeof locales)[number];

type Primitive = string | number | boolean;

type TranslationNode = Primitive | TranslationDictionary;

export type TranslationDictionary = {
  [key: string]: TranslationNode;
};

type TranslationBundle = Record<Locale, TranslationDictionary>;

const translations: TranslationBundle = {
  en: {
    hero: {
      title: "Bangkok hotel price comparison",
      subtitle: "Find the best rates from official affiliate partners for your next stay in Thailand.",
      cta: "Search hotels"
    },
    searchForm: {
      destinationLabel: "Destination",
      destinationPlaceholder: "Bangkok, Thailand",
      checkInLabel: "Check-in",
      checkOutLabel: "Check-out",
      guestsLabel: "Guests",
      roomsLabel: "Rooms",
      adultsLabel: "Adults",
      childrenLabel: "Children",
      searchButton: "Search hotels",
      resetButton: "Reset"
    },
    filters: {
      heading: "Filter & sort",
      sortLabel: "Sort by",
      sortOptions: {
        priceAsc: "Lowest price",
        priceDesc: "Highest price",
        ratingDesc: "Top rated",
        distanceAsc: "Closest to center"
      },
      priceLabel: "Price per night (€)",
      ratingLabel: "Minimum guest rating",
      starsLabel: "Hotel category",
      distanceLabel: "Max distance (km)",
      breakfastLabel: "Breakfast included",
      cancellationLabel: "Free cancellation",
      apply: "Apply filters",
      reset: "Reset filters"
    },
    results: {
      heading: "Available hotels",
      count: "{{count}} hotels found",
      fallback: "We couldn't load live rates. Showing sample data.",
      cheapestBadge: "Best price",
      priceFrom: "From",
      perNight: "per night",
      totalFor: "Total for {{nights}} nights",
      taxesIncluded: "Includes taxes & fees",
      breakfastIncluded: "Breakfast included",
      freeCancellation: "Free cancellation",
      bookNow: "Book now",
      viewDeal: "View deal",
      noResults: "No hotels match your filters yet."
    },
    legal: {
      disclosureHeading: "Affiliate Disclosure",
      disclosureBody:
        "We partner with Booking.com, Expedia, Agoda, and Trip.com. If you book through our links, we may earn a commission at no extra cost to you.",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      imprint: "Imprint",
      cookieBannerTitle: "We use cookies",
      cookieBannerBody:
        "We use cookies to personalize content, analyze traffic, and work with affiliate partners. Manage your preferences or accept all cookies.",
      acceptAll: "Accept all",
      rejectAll: "Decline",
      manage: "Manage preferences"
    },
    misc: {
      loading: "Loading hotels...",
      error: "Something went wrong. Please try again soon.",
      fallback: "Showing cached sample data.",
      adultsSingular: "Adult",
      adultsPlural: "Adults",
      guests: "Guests",
      rooms: "Rooms",
      cheapest: "Cheapest offer",
      lastUpdated: "Last updated {{time}}"
    },
    navigation: {
      languageSwitcherLabel: "Language",
      german: "Deutsch",
      english: "English"
    }
  },
  de: {
    hero: {
      title: "Hotelpreise in Bangkok vergleichen",
      subtitle: "Finde die besten Raten unserer offiziellen Affiliate-Partner für deine nächste Reise nach Thailand.",
      cta: "Hotels suchen"
    },
    searchForm: {
      destinationLabel: "Reiseziel",
      destinationPlaceholder: "Bangkok, Thailand",
      checkInLabel: "Anreise",
      checkOutLabel: "Abreise",
      guestsLabel: "Gäste",
      roomsLabel: "Zimmer",
      adultsLabel: "Erwachsene",
      childrenLabel: "Kinder",
      searchButton: "Hotels finden",
      resetButton: "Zurücksetzen"
    },
    filters: {
      heading: "Filtern & sortieren",
      sortLabel: "Sortierung",
      sortOptions: {
        priceAsc: "Niedrigster Preis",
        priceDesc: "Höchster Preis",
        ratingDesc: "Beste Bewertungen",
        distanceAsc: "Zentrumsnah"
      },
      priceLabel: "Preis pro Nacht (€)",
      ratingLabel: "Mind. Gäste-Bewertung",
      starsLabel: "Hotelkategorie",
      distanceLabel: "Max. Entfernung (km)",
      breakfastLabel: "Frühstück inklusive",
      cancellationLabel: "Kostenlose Stornierung",
      apply: "Filter anwenden",
      reset: "Filter zurücksetzen"
    },
    results: {
      heading: "Verfügbare Hotels",
      count: "{{count}} Hotels gefunden",
      fallback: "Live-Preise konnten nicht geladen werden. Wir zeigen Beispieldaten.",
      cheapestBadge: "Bester Preis",
      priceFrom: "Ab",
      perNight: "pro Nacht",
      totalFor: "Gesamt für {{nights}} Nächte",
      taxesIncluded: "Inkl. Steuern & Gebühren",
      breakfastIncluded: "Frühstück inklusive",
      freeCancellation: "Kostenlose Stornierung",
      bookNow: "Jetzt buchen",
      viewDeal: "Zum Angebot",
      noResults: "Keine Hotels entsprechen derzeit den Filtern."
    },
    legal: {
      disclosureHeading: "Affiliate-Hinweis",
      disclosureBody:
        "Wir arbeiten mit Booking.com, Expedia, Agoda und Trip.com zusammen. Bei einer Buchung über unsere Links erhalten wir ggf. eine Provision – ohne Mehrkosten für dich.",
      privacy: "Datenschutzerklärung",
      cookies: "Cookie-Richtlinie",
      imprint: "Impressum",
      cookieBannerTitle: "Wir verwenden Cookies",
      cookieBannerBody:
        "Wir nutzen Cookies, um Inhalte zu personalisieren, den Datenverkehr zu analysieren und mit Affiliate-Partnern zusammenzuarbeiten. Du kannst alle akzeptieren oder deine Auswahl anpassen.",
      acceptAll: "Alle akzeptieren",
      rejectAll: "Ablehnen",
      manage: "Einstellungen"
    },
    misc: {
      loading: "Hotels werden geladen...",
      error: "Etwas ist schiefgelaufen. Bitte später erneut versuchen.",
      fallback: "Anzeigen von gespeicherten Beispieldaten.",
      adultsSingular: "Erwachsener",
      adultsPlural: "Erwachsene",
      guests: "Gäste",
      rooms: "Zimmer",
      cheapest: "Günstigstes Angebot",
      lastUpdated: "Zuletzt aktualisiert {{time}}"
    },
    navigation: {
      languageSwitcherLabel: "Sprache",
      german: "Deutsch",
      english: "English"
    }
  }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getTranslations(locale: Locale): TranslationDictionary {
  return translations[locale];
}

export function translate(
  messages: TranslationDictionary,
  path: string,
  vars?: Record<string, Primitive>
): string {
  const segments = path.split(".");
  let current: TranslationNode | undefined = messages;

  for (const segment of segments) {
    if (current && typeof current === "object" && segment in current) {
      current = current[segment];
    } else {
      current = undefined;
      break;
    }
  }

  if (typeof current === "string") {
    return substituteVariables(current, vars);
  }

  if (typeof current === "number" || typeof current === "boolean") {
    return String(current);
  }

  return path;
}

function substituteVariables(template: string, vars?: Record<string, Primitive>): string {
  if (!vars) {
    return template;
  }

  return Object.entries(vars).reduce((acc, [key, value]) => {
    const pattern = new RegExp(`\\{\\{${key}\\}}`, "g");
    return acc.replace(pattern, String(value));
  }, template);
}
