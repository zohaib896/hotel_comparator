"use client";

import { useEffect, useMemo, useState } from "react";
import { addDays, differenceInCalendarDays, format } from "date-fns";
import { fetchHotels } from "@/lib/api";
import type { Locale } from "@/lib/i18n";
import { useTranslation } from "@/components/TranslationProvider";
import type {
  Hotel,
  HotelSearchMeta,
  SearchFilters,
  SearchParams,
  SortOption
} from "@/types/hotel";
import { mockHotelSearchResponse } from "@/data/mock-hotels";
import LanguageSwitcher from "@/components/controls/LanguageSwitcher";
import CookieConsentBanner from "@/components/legal/CookieConsentBanner";
import LegalFooter from "@/components/legal/LegalFooter";
import SearchForm from "@/components/search/SearchForm";
import FiltersBar from "@/components/search/FiltersBar";
import HotelList from "@/components/search/HotelList";

const DEFAULT_DESTINATION = "Bangkok, Thailand";

function getDefaultDates() {
  const now = new Date();
  return {
    checkIn: format(addDays(now, 35), "yyyy-MM-dd"),
    checkOut: format(addDays(now, 38), "yyyy-MM-dd")
  };
}

const initialFilters: SearchFilters = {
  minPrice: undefined,
  maxPrice: undefined,
  minRating: undefined,
  starRatings: [4, 5],
  maxDistanceKm: undefined,
  breakfastIncluded: undefined,
  freeCancellation: true
};

export default function SearchExperience({ locale }: { locale: Locale }) {
  const { t } = useTranslation();
  const { checkIn, checkOut } = useMemo(getDefaultDates, []);

  const [searchParams, setSearchParams] = useState<SearchParams>({
    destination: DEFAULT_DESTINATION,
    checkIn,
    checkOut,
    adults: 2,
    children: 0,
    rooms: 1,
    sortBy: "price_asc",
    filters: initialFilters
  });

  const [hotels, setHotels] = useState<Hotel[]>(mockHotelSearchResponse.data);
  const [meta, setMeta] = useState<HotelSearchMeta>(mockHotelSearchResponse.meta);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const nights = useMemo(
    () => Math.max(1, differenceInCalendarDays(new Date(searchParams.checkOut), new Date(searchParams.checkIn))),
    [searchParams.checkIn, searchParams.checkOut]
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", locale);
    }
  }, [locale]);

  useEffect(() => {
    let isCancelled = false;
    async function load() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetchHotels(searchParams);
        if (!isCancelled) {
          setHotels(response.data);
          setMeta(response.meta);
        }
      } catch (err) {
        if (!isCancelled) {
          console.error(err);
          setError(t("results.fallback"));
          setHotels(mockHotelSearchResponse.data);
          setMeta(mockHotelSearchResponse.meta);
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    load();
    return () => {
      isCancelled = true;
    };
  }, [searchParams, t]);

  const handleSearchSubmit = (params: Partial<SearchParams>) => {
    setSearchParams((prev: SearchParams) => ({
      ...prev,
      ...params,
      filters: params.filters ?? prev.filters
    }));
  };

  const handleSortChange = (sortBy: SortOption) => {
    setSearchParams((prev: SearchParams) => ({
      ...prev,
      sortBy
    }));
  };

  const handleFiltersChange = (filters: SearchFilters) => {
    setSearchParams((prev: SearchParams) => ({
      ...prev,
      filters
    }));
  };

  const headerTitle = t("hero.title");
  const headerSubtitle = t("hero.subtitle");

  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <CookieConsentBanner />
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white font-semibold">
              HC
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-900 md:text-2xl">{headerTitle}</h1>
              <p className="text-sm text-slate-600 md:text-base">{headerSubtitle}</p>
            </div>
          </div>
          <LanguageSwitcher locale={locale} />
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-6xl grow flex-col gap-8 px-4 py-10">
        <SearchForm
          initialParams={searchParams}
          nights={nights}
          onSubmit={handleSearchSubmit}
          onReset={() => setSearchParams((prev: SearchParams) => ({
            ...prev,
            destination: DEFAULT_DESTINATION,
            ...getDefaultDates()
          }))}
        />

        <FiltersBar
          filters={searchParams.filters}
          sortBy={searchParams.sortBy}
          onSortChange={handleSortChange}
          onFiltersChange={handleFiltersChange}
        />

        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 border-b border-slate-200 pb-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 md:text-xl">{t("results.heading")}</h2>
              <p className="text-sm text-slate-500">
                {t("results.count", { count: hotels.length })}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 md:text-sm">
              <span>{meta.destination}, {meta.country}</span>
              <span>·</span>
              <span>{t("results.totalFor", { nights })}</span>
              <span>·</span>
              <span>{t("misc.lastUpdated", { time: new Date(meta.generatedAt).toLocaleTimeString() })}</span>
            </div>
          </div>

          <HotelList
            hotels={hotels}
            nights={nights}
            isLoading={isLoading}
            error={error}
          />
        </section>
      </main>
      <LegalFooter locale={locale} />
    </div>
  );
}
