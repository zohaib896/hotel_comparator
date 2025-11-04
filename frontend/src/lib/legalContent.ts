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
        "Thailand Hotel Comparator participates in affiliate programs operated by Booking.com, Expedia Group, Agoda, Trip.com and other travel partners. When you click a partner link and complete a booking, we may receive a commission at no extra cost to you.",
      sections: [
        {
          heading: "Partner network",
          body: [
            "We cooperate exclusively with officially approved affiliate interfaces (API, XML feed, or widgets) provided by each partner.",
            "Every offer links directly to the partner platform. Prices, availability, and booking conditions are confirmed on the partner website."
          ]
        },
        {
          heading: "Comparison methodology",
          body: [
            "Hotels are ranked according to the filters you select (price, Bewertung, Sterne, Entfernung) as well as partner data quality.",
            "We do not manipulate rankings in exchange for compensation. Sponsored placements are flagged transparently should we introduce them."
          ]
        },
        {
          heading: "What we do not do",
          body: [
            "We do not scrape websites or circumvent contractual terms of our partners.",
            "We do not sell hotel allotments ourselves and we do not collect booking payments.",
            "Personal booking information is never stored on our systems. All transactions take place with the respective partner." 
          ]
        },
        {
          heading: "Language",
          body: [
            "This disclosure is provided in English for convenience. In the event of discrepancies, the German version prevails."
          ]
        }
      ]
    },
    de: {
      title: "Affiliate-Hinweis nach § 6 Abs. 1 Nr. 1 TMG",
      intro:
        "Thailand Hotel Comparator arbeitet mit den Affiliate-Programmen von Booking.com, Expedia Group, Agoda, Trip.com sowie weiteren Reise-Partnern zusammen. Wenn du über einen unserer Links buchst, erhalten wir unter Umständen eine Provision – für dich entstehen keine zusätzlichen Kosten.",
      sections: [
        {
          heading: "Partnernetzwerk",
          body: [
            "Wir binden ausschließlich offiziell bereitgestellte Schnittstellen (API, XML-Feed oder Widgets) der jeweiligen Partner ein.",
            "Jede Weiterleitung führt direkt auf die Plattform des Partners. Preise, Verfügbarkeit sowie Buchungsbedingungen werden dort final bestätigt."
          ]
        },
        {
          heading: "Vergleichsmethodik",
          body: [
            "Die Sortierung der Hotels richtet sich nach deinen Filtern (Preis, Bewertung, Sterne, Distanz) sowie nach der Datenqualität der Partnerangebote.",
            "Eine Beeinflussung der Reihenfolge gegen Entgelt findet nicht statt. Sollten in Zukunft gesponserte Platzierungen hinzukommen, kennzeichnen wir diese eindeutig."
          ]
        },
        {
          heading: "Was wir nicht tun",
          body: [
            "Wir betreiben kein unzulässiges Scraping und verstoßen nicht gegen Vertragsbedingungen unserer Partner.",
            "Wir verkaufen keine Zimmerkontingente in eigenem Namen und wickeln keine Zahlungen ab.",
            "Personenbezogene Buchungsdaten werden nicht bei uns gespeichert – sämtliche Transaktionen erfolgen direkt beim jeweiligen Partner."
          ]
        },
        {
          heading: "Sprachfassung",
          body: [
            "Maßgeblich ist die deutsche Fassung dieses Hinweises; die englische Übersetzung dient ausschließlich der Information."
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
          heading: "Controller",
          body: [
            "Muhammad Zohaib Khan",
            "Maria-Wagenhäuser-Straße 5, 85570 Markt Schwaben, Germany",
            "Email: info.mailmygarage@gmail.com (Subject prefix: HC-DATENSCHUTZ)"
          ]
        },
        {
          heading: "Purpose of the service",
          body: [
            "Thailand Hotel Comparator provides a hotel price comparison focused on Bangkok. We process only the information you enter in the search form (destination, travel dates, number of guests, filters) to display results.",
            "No user accounts or booking functions are provided. We do not profile users and we do not enrich data with third-party datasets."
          ]
        },
        {
          heading: "Hosting & server logs",
          body: [
            "Our frontend is hosted on Vercel (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA). Each request is logged with anonymised IP address, timestamp, URL, user agent, and referrer to maintain system security.",
            "The FastAPI backend is designed for EU-based hosting. Until deployment, search requests fall back to local demo data and no personal data is stored." 
          ]
        },
        {
          heading: "Cookies & local storage",
          body: [
            "We use technically necessary cookies/local storage entries to remember language settings and your cookie consent status (Storage key: hotel-comparator-cookie-consent).",
            "Optional analytics or marketing cookies are disabled by default. If activated later, we will request your explicit consent beforehand." 
          ]
        },
        {
          heading: "Affiliate links",
          body: [
            "When you click an affiliate link, the partner may place its own tracking cookies or process personal data to attribute bookings. Please review the partner's privacy notice (e.g. Booking.com, Expedia Group, Agoda, Trip.com).",
            "We do not transmit personal data to partners prior to your click. We only append anonymous parameters supplied by the partner program (e.g. campaign IDs)."
          ]
        },
        {
          heading: "Legal basis",
          body: [
            "Art. 6(1)(b) GDPR for providing the comparison requested by you (execution of pre-contractual measures with partner platforms).",
            "Art. 6(1)(f) GDPR for the secure, reliable operation of the website (server logs, security monitoring).",
            "Art. 6(1)(a) GDPR for any optional analytics or marketing cookies (only after you opt in)."
          ]
        },
        {
          heading: "Retention",
          body: [
            "Search inputs are processed transiently in memory and not persisted. Server logs are retained by our hosting provider according to their standard retention window (currently up to 30 days) and removed thereafter unless needed to investigate security incidents.",
            "If you contact us via email, we retain the correspondence according to statutory retention periods (up to six years under German commercial and tax law)."
          ]
        },
        {
          heading: "Your rights",
          body: [
            "You have the rights to access, rectification, deletion, restriction, data portability, and to lodge a complaint with a supervisory authority (Art. 15-21 GDPR).",
            "You may withdraw any consent granted with effect for the future by emailing info.mailmygarage@gmail.com (Subject: HC-DATENSCHUTZ)."
          ]
        },
        {
          heading: "Supervisory authority",
          body: [
            "Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)",
            "Promenade 27, 91522 Ansbach, Germany",
            "https://www.lda.bayern.de/"
          ]
        },
        {
          heading: "Language",
          body: [
            "This privacy policy is provided in English for convenience. In the event of discrepancies, the German version shall prevail."
          ]
        }
      ]
    },
    de: {
      title: "Datenschutzerklärung",
      sections: [
        {
          heading: "Verantwortlicher",
          body: [
            "Muhammad Zohaib Khan",
            "Maria-Wagenhäuser-Straße 5, 85570 Markt Schwaben, Deutschland",
            "E-Mail: info.mailmygarage@gmail.com (Betreff: HC-DATENSCHUTZ)"
          ]
        },
        {
          heading: "Zweck der Website",
          body: [
            "Thailand Hotel Comparator stellt einen Hotel-Preisvergleich mit Fokus auf Bangkok bereit. Wir verarbeiten ausschließlich die Angaben, die du im Suchformular eingibst (Reiseziel, Reisezeitraum, Gästeanzahl, Filter).",
            "Es gibt keine Benutzerkonten und keine Buchungsfunktion. Wir erstellen keine Nutzerprofile und führen keine Datenbanken mit personenbezogenen Informationen." 
          ]
        },
        {
          heading: "Hosting & Server-Logs",
          body: [
            "Das Frontend wird bei Vercel (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA) betrieben. Jeder Aufruf wird mit anonymisierter IP-Adresse, Zeitstempel, URL, User-Agent und Referrer protokolliert, um die Systemsicherheit zu gewährleisten.",
            "Die FastAPI-API ist für ein EU-basiertes Hosting vorgesehen. Solange sie nicht produktiv läuft, greifen Suchanfragen auf lokale Demo-Daten zurück; personenbezogene Daten werden dabei nicht gespeichert." 
          ]
        },
        {
          heading: "Cookies & Local Storage",
          body: [
            "Wir setzen technisch notwendige Cookies bzw. Local-Storage-Einträge ein, um deine Spracheinstellung und deinen Cookie-Status zu speichern (Storage-Key: hotel-comparator-cookie-consent).",
            "Optionale Analyse- oder Marketing-Cookies sind standardmäßig deaktiviert. Falls sie zukünftig aktiviert werden, holen wir vorab deine ausdrückliche Einwilligung ein." 
          ]
        },
        {
          heading: "Affiliate-Links",
          body: [
            "Beim Klick auf einen Affiliate-Link kann der jeweilige Partner eigene Tracking-Cookies setzen oder personenbezogene Daten verarbeiten, um Buchungen zuzuordnen. Bitte lies die Datenschutzinformationen des Partners (z. B. Booking.com, Expedia Group, Agoda, Trip.com).",
            "Wir übermitteln vor dem Klick keine personenbezogenen Daten an Partner. Wir fügen lediglich anonyme Parameter aus dem Affiliate-Programm (z. B. Kampagnen-IDs) hinzu." 
          ]
        },
        {
          heading: "Rechtsgrundlagen",
          body: [
            "Art. 6 Abs. 1 lit. b DSGVO zur Durchführung der von dir angefragten Vergleichsfunktion (vorvertragliche Maßnahmen im Verhältnis zum Partner).",
            "Art. 6 Abs. 1 lit. f DSGVO für den sicheren Betrieb der Website (Server-Logs, Sicherheitsüberwachung).",
            "Art. 6 Abs. 1 lit. a DSGVO für optionale Analyse- oder Marketing-Cookies (nur nach deiner Einwilligung)."
          ]
        },
        {
          heading: "Speicherdauer",
          body: [
            "Suchangaben werden lediglich flüchtig verarbeitet und nicht persistiert. Server-Logs werden durch unseren Hosting-Anbieter gemäß der dort üblichen Aufbewahrungsfrist (derzeit bis zu 30 Tage) vorgehalten und anschließend gelöscht, es sei denn, sie werden zur Aufklärung von Sicherheitsvorfällen benötigt.",
            "Kommunikation per E-Mail bewahren wir im gesetzlichen Rahmen auf (bis zu sechs Jahre gemäß Handels- und Steuerrecht)." 
          ]
        },
        {
          heading: "Deine Rechte",
          body: [
            "Du hast die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie ein Beschwerderecht bei einer Aufsichtsbehörde (Art. 15 bis 21 DSGVO).",
            "Erteilte Einwilligungen kannst du jederzeit mit Wirkung für die Zukunft widerrufen – schicke hierzu eine E-Mail an info.mailmygarage@gmail.com mit dem Betreff HC-DATENSCHUTZ." 
          ]
        },
        {
          heading: "Aufsichtsbehörde",
          body: [
            "Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)",
            "Promenade 27, 91522 Ansbach, Deutschland",
            "https://www.lda.bayern.de/"
          ]
        },
        {
          heading: "Sprachfassung",
          body: [
            "Im Zweifel gilt die deutsche Version dieser Datenschutzerklärung. Die englische Version dient ausschließlich der besseren Verständlichkeit." 
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
            "Session security and language preference (cookie/local storage entry: hotel-comparator-cookie-consent).",
            "These entries are required to operate the site and cannot be disabled individually." 
          ]
        },
        {
          heading: "Functional preferences",
          body: [
            "We may store additional preferences (e.g. selected filters) on your device to improve usability.",
            "This data never leaves your browser and is deleted when you clear your cache." 
          ]
        },
        {
          heading: "Analytics",
          body: [
            "If analytics is enabled in the future, cookies will only be set after you consent via the banner.",
            "Analytics data will be aggregated and used solely to improve the service." 
          ]
        },
        {
          heading: "Affiliate tracking",
          body: [
            "Affiliate partners may use their own cookies to attribute bookings once you land on their pages.",
            "Please consult the partner's cookie policy for opt-out options (e.g. Booking.com, Expedia Group, Agoda, Trip.com)." 
          ]
        },
        {
          heading: "Language",
          body: [
            "This cookie policy is supplied in English for convenience. The German version is legally binding if wording differs."
          ]
        }
      ]
    },
    de: {
      title: "Cookie-Richtlinie",
      sections: [
        {
          heading: "Technisch notwendige Cookies",
          body: [
            "Sicherheits- und Sitzungscookies sowie Local-Storage-Einträge (hotel-comparator-cookie-consent) speichern deine Sprache und Einwilligungen.",
            "Ohne diese Cookies kann die Website nicht fehlerfrei funktionieren; eine Deaktivierung ist nur über die Browsereinstellungen möglich." 
          ]
        },
        {
          heading: "Funktionale Einstellungen",
          body: [
            "Wir können zusätzliche Einstellungen (z. B. gewählte Filter) lokal in deinem Browser speichern, um die Nutzung zu vereinfachen.",
            "Diese Daten verlassen dein Gerät nicht und werden gelöscht, sobald du den Browser-Cache leerst." 
          ]
        },
        {
          heading: "Analyse",
          body: [
            "Sollten wir künftig Analyse-Tools einsetzen, setzen wir entsprechende Cookies erst nach deiner Einwilligung über das Banner.",
            "Die erhobenen Daten werden nur aggregiert ausgewertet, um den Service zu verbessern." 
          ]
        },
        {
          heading: "Affiliate-Tracking",
          body: [
            "Unsere Partner nutzen ggf. eigene Cookies, sobald du ihre Buchungsseiten öffnest, um Vermittlungsprovisionen zuzuordnen.",
            "Bitte informiere dich in den Cookie-Richtlinien der Partner (z. B. Booking.com, Expedia Group, Agoda, Trip.com) über Widerspruchsmöglichkeiten." 
          ]
        },
        {
          heading: "Sprachfassung",
          body: [
            "Verbindlich ist die deutsche Version dieser Cookie-Richtlinie; die englische Übersetzung dient nur zur Information."
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
          heading: "Service provider (§ 5 TMG)",
          body: [
            "Muhammad Zohaib Khan",
            "Maria-Wagenhäuser-Straße 5",
            "85570 Markt Schwaben",
            "Germany",
            "Email: info.mailmygarage@gmail.com"
          ]
        },
        {
          heading: "Contact email prefixes",
          body: [
            "HC-SUPPORT – Technical enquiries",
            "HC-PARTNERSHIP – Kooperationen",
            "HC-RECHTLICH – Rechtliche Themen",
            "Messages without a prefix may experience delays." 
          ]
        },
        {
          heading: "Editorial responsibility",
          body: [
            "Muhammad Zohaib Khan",
            "Same address as above"
          ]
        },
        {
          heading: "Disclaimer",
          body: [
            "All information is compiled with care; nevertheless, no guarantee is given for accuracy, completeness, or timeliness.",
            "Despite careful content control, we assume no liability for external links. Responsibility lies exclusively with the operators of linked pages." 
          ]
        },
        {
          heading: "EU dispute resolution",
          body: [
            "Online dispute resolution platform of the EU Commission: https://ec.europa.eu/consumers/odr",
            "We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board." 
          ]
        },
        {
          heading: "Language",
          body: [
            "This imprint is provided in English for convenience. The German version prevails in case of interpretive differences."
          ]
        }
      ]
    },
    de: {
      title: "Impressum",
      sections: [
        {
          heading: "Dienstanbieter (§ 5 TMG)",
          body: [
            "Muhammad Zohaib Khan",
            "Maria-Wagenhäuser-Straße 5",
            "85570 Markt Schwaben",
            "Deutschland",
            "E-Mail: info.mailmygarage@gmail.com"
          ]
        },
        {
          heading: "Kontakt-Betreffzeilen",
          body: [
            "HC-SUPPORT – Technische oder Nutzungsfragen",
            "HC-PARTNERSCHAFT – Kooperationen und Affiliate-Anfragen",
            "HC-RECHTLICH – Rechtliche Anliegen",
            "E-Mails ohne diese Präfixe können verzögert bearbeitet werden." 
          ]
        },
        {
          heading: "Verantwortlich für den Inhalt",
          body: [
            "Muhammad Zohaib Khan",
            "Anschrift wie oben"
          ]
        },
        {
          heading: "Haftungsausschluss",
          body: [
            "Alle Inhalte wurden mit größter Sorgfalt erstellt; für die Richtigkeit, Vollständigkeit und Aktualität können wir jedoch keine Gewähr übernehmen.",
            "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für externe Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich." 
          ]
        },
        {
          heading: "EU-Streitschlichtung",
          body: [
            "Plattform der EU-Kommission zur Online-Streitbeilegung: https://ec.europa.eu/consumers/odr",
            "Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen." 
          ]
        },
        {
          heading: "Sprachfassung",
          body: [
            "Es gilt ausschließlich die deutsche Fassung dieses Impressums. Die englische Übersetzung hat lediglich Informationscharakter."
          ]
        }
      ]
    }
  }
};

export function getLegalContent(page: keyof typeof content, locale: Locale) {
  return content[page][locale];
}
