import type { Locale } from "@/lib/i18n";

type LegalSection = {
  heading: string;
  body: string[];
};

type LegalContent = {
  title: string;
  intro?: string;
  sections: LegalSection[];
};

type LegalContentMap = Record<string, Record<Locale, LegalContent>>;

const content: LegalContentMap = {
  disclosure: {
    en: {
      title: "Affiliate Disclosure",
      intro:
        "Thailand Hotel Comparator participates in affiliate marketing programs including Booking.com, Expedia Group, Agoda, and Trip.com. When you click on a partner link and make a booking, we may earn a commission at no additional cost to you.",
      sections: [
        {
          heading: "How our comparisons work",
          body: [
            "We display publicly accessible rates provided directly by each affiliate partner via their official API, feed, or widget.",
            "All price information is checked regularly to ensure accuracy. Final booking details are always confirmed on the partner website.",
            "Our comparison ranking is based on pricing, user reviews, star rating, and distance filters set by the visitor."
          ]
        },
        {
          heading: "What we do not do",
          body: [
            "We do not scrape any content or bypass affiliate terms.",
            "We do not sell or resell hotel inventory ourselves.",
            "We do not collect payment or personal booking data."
          ]
        }
      ]
    },
    de: {
      title: "Affiliate-Hinweis",
      intro:
        "Thailand Hotel Comparator nimmt an Affiliate-Programmen von Booking.com, Expedia Group, Agoda und Trip.com teil. Wenn du über einen unserer Partner-Links buchst, erhalten wir möglicherweise eine Provision – ohne Mehrkosten für dich.",
      sections: [
        {
          heading: "So funktioniert der Vergleich",
          body: [
            "Wir zeigen ausschließlich Raten, die von unseren Affiliate-Partnern über ihre offiziellen APIs, Feeds oder Widgets bereitgestellt werden.",
            "Alle Preisangaben werden regelmäßig überprüft. Die finale Buchung findet direkt auf der Partner-Webseite statt.",
            "Die Reihenfolge der Ergebnisse basiert auf Preis, Bewertungen, Sterne-Kategorie sowie den von dir gesetzten Filtern."
          ]
        },
        {
          heading: "Was wir nicht tun",
          body: [
            "Wir betreiben kein Scraping und verstoßen nicht gegen Affiliate-Richtlinien.",
            "Wir verkaufen keine Hotelzimmer in eigenem Namen.",
            "Wir verarbeiten keine Zahlungen und sammeln keine personenbezogenen Buchungsdaten."
          ]
        }
      ]
    }
  },
  privacy: {
    en: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "Responsible entity",
          body: [
            "Zohaib (sole founder), registered in Germany.",
            "Contact: privacy@hotel-comparator.de"
          ]
        },
        {
          heading: "Data processing",
          body: [
            "We process only the data necessary to display hotel price comparisons: search destination, dates, number of guests, and filters.",
            "Personal data is not stored on our servers. Affiliate partners may process data once you leave our site – please review their respective policies."
          ]
        },
        {
          heading: "Analytics & cookies",
          body: [
            "We use privacy-focused analytics to understand usage trends. IP addresses are anonymised where technically possible.",
            "You can withdraw consent for optional cookies at any time using the cookie preferences link."
          ]
        }
      ]
    },
    de: {
      title: "Datenschutzerklärung",
      sections: [
        {
          heading: "Verantwortliche Stelle",
          body: [
            "Zohaib (Solo-Gründer), Sitz in Deutschland.",
            "Kontakt: privacy@hotel-comparator.de"
          ]
        },
        {
          heading: "Datenverarbeitung",
          body: [
            "Wir verarbeiten ausschließlich die für den Preisvergleich erforderlichen Angaben: Reiseziel, Reisezeitraum, Gästeanzahl und Filterkriterien.",
            "Personenbezogene Daten werden nicht auf unseren Servern gespeichert. Beim Absprung zu unseren Partnern gelten deren Datenschutzrichtlinien."
          ]
        },
        {
          heading: "Analyse & Cookies",
          body: [
            "Wir nutzen datenschutzfreundliche Analyse-Tools. IP-Adressen werden – sofern technisch möglich – anonymisiert.",
            "Du kannst deine Einwilligung für optionale Cookies jederzeit über die Cookie-Einstellungen widerrufen."
          ]
        }
      ]
    }
  },
  cookies: {
    en: {
      title: "Cookie Policy",
      sections: [
        {
          heading: "Essential cookies",
          body: [
            "Necessary for remembering your language preferences and maintaining session security.",
            "These cookies cannot be disabled because the site would not function correctly without them."
          ]
        },
        {
          heading: "Analytics",
          body: [
            "We use privacy-friendly analytics to understand usage trends. Data is aggregated and does not track individuals.",
            "You can opt out at any time via the cookie banner."
          ]
        },
        {
          heading: "Affiliate tracking",
          body: [
            "Affiliate partners may set tracking cookies once you visit their booking pages. This is necessary to attribute commissions correctly.",
            "Please refer to the partner's own cookie policy for more details."
          ]
        }
      ]
    },
    de: {
      title: "Cookie-Richtlinie",
      sections: [
        {
          heading: "Notwendige Cookies",
          body: [
            "Speichern deine Spracheinstellungen und gewährleisten die Sicherheit der Sitzung.",
            "Diese Cookies können nicht deaktiviert werden, da sonst grundlegende Funktionen nicht verfügbar sind."
          ]
        },
        {
          heading: "Analyse",
          body: [
            "Wir setzen datenschutzfreundliche Analyse-Lösungen ein, um die Nutzung besser zu verstehen. Die Daten sind aggregiert und anonymisiert.",
            "Du kannst die Zustimmung jederzeit über das Cookie-Banner widerrufen."
          ]
        },
        {
          heading: "Affiliate-Tracking",
          body: [
            "Unsere Partner setzen ggf. Cookies, wenn du deren Buchungsseiten besuchst. Nur so kann die Provision korrekt zugeordnet werden.",
            "Bitte beachte die jeweiligen Cookie-Richtlinien der Partner."
          ]
        }
      ]
    }
  },
  imprint: {
    en: {
      title: "Imprint",
      sections: [
        {
          heading: "Publisher",
          body: [
            "Zohaib",
            "Registered address: Berlin, Germany",
            "Email: hello@hotel-comparator.de"
          ]
        },
        {
          heading: "Disclaimer",
          body: [
            "All information is provided without guarantee. Rates and availability may change at any time.",
            "Links to external websites are provided for convenience. We are not responsible for their content."
          ]
        }
      ]
    },
    de: {
      title: "Impressum",
      sections: [
        {
          heading: "Anbieter",
          body: [
            "Zohaib",
            "Geschäftssitz: Berlin, Deutschland",
            "E-Mail: hello@hotel-comparator.de"
          ]
        },
        {
          heading: "Haftungsausschluss",
          body: [
            "Alle Informationen erfolgen ohne Gewähr. Preise und Verfügbarkeiten können sich jederzeit ändern.",
            "Für Inhalte externer Links übernehmen wir keine Haftung; hierfür sind ausschließlich deren Betreiber verantwortlich."
          ]
        }
      ]
    }
  }
};

export function getLegalContent(page: keyof typeof content, locale: Locale) {
  return content[page][locale];
}
