"use client";

import { useMemo } from "react";
import { useTranslation } from "@/components/TranslationProvider";
import type { Hotel } from "@/types/hotel";
import HotelCard from "@/components/search/HotelCard";

type HotelListProps = {
  hotels: Hotel[];
  nights: number;
  isLoading: boolean;
  error: string | null;
};

export default function HotelList({ hotels, nights, isLoading, error }: HotelListProps) {
  const { t } = useTranslation();

  const content = useMemo(() => {
    if (isLoading) {
      return (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-40 animate-pulse rounded-2xl bg-slate-100" />
          ))}
        </div>
      );
    }

    if (error) {
      return <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>;
    }

    if (hotels.length === 0) {
      return <p className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">{t("results.noResults")}</p>;
    }

    return (
      <div className="space-y-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} nights={nights} />
        ))}
      </div>
    );
  }, [error, hotels, isLoading, nights, t]);

  return <div className="pt-6">{content}</div>;
}
