"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/components/TranslationProvider";
import type { AffiliateOffer, Hotel } from "@/types/hotel";

function formatPrice(value: number, currency: string) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

function OfferRow({ offer, isCheapest, nights }: { offer: AffiliateOffer; isCheapest: boolean; nights: number }) {
  const { t } = useTranslation();

  return (
    <div
      className={`grid grid-cols-1 gap-3 rounded-2xl border px-4 py-4 text-sm shadow-sm transition hover:border-brand-primary/40 hover:shadow-md md:grid-cols-[2fr_1fr_auto] md:items-center ${
        isCheapest ? "border-brand-primary bg-brand-primary/5" : "border-slate-200"
      }`}
    >
      <div className="flex flex-col gap-1">
        <span className="text-base font-semibold text-slate-900">{offer.partner}</span>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          {offer.breakfastIncluded && <span>{t("results.breakfastIncluded")}</span>}
          {offer.freeCancellation && <span>{t("results.freeCancellation")}</span>}
          {offer.taxesIncluded && <span>{t("results.taxesIncluded")}</span>}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-slate-900">
          {formatPrice(offer.pricePerNight, offer.currency)}
          <span className="ml-1 text-sm font-normal text-slate-500">/ {t("results.perNight")}</span>
        </span>
        <span className="text-xs text-slate-500">
          {t("results.totalFor", { nights })}: {formatPrice(offer.totalPrice, offer.currency)}
        </span>
      </div>
      <Link
        href={offer.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70 ${
          isCheapest ? "bg-brand-primary text-white hover:bg-brand-primary/90" : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {t("results.bookNow")}
      </Link>
    </div>
  );
}

export default function HotelCard({ hotel, nights }: { hotel: Hotel; nights: number }) {
  const { t } = useTranslation();
  const cheapest = hotel.cheapestOffer;

  return (
    <article className="grid gap-6 rounded-3xl border border-slate-200 p-6 shadow-sm transition hover:border-brand-primary/50 hover:shadow-md md:grid-cols-[minmax(0,320px),1fr]">
      <div className="relative overflow-hidden rounded-2xl bg-slate-100">
        <Image
          src={hotel.imageUrl}
          alt={hotel.name}
          width={320}
          height={220}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow">
          {t("misc.cheapest")}: {formatPrice(cheapest.pricePerNight, cheapest.currency)}
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <header className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-semibold text-slate-900">{hotel.name}</h3>
            <span className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              {"★".repeat(hotel.stars)}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="font-semibold text-slate-900">{hotel.rating.toFixed(1)}</span>
            <span>{hotel.reviewCount.toLocaleString()} reviews</span>
            <span>· {hotel.neighborhood}</span>
            <span>· {hotel.distanceFromCenterKm} km</span>
          </div>
          <p className="text-sm text-slate-600">{hotel.description}</p>
        </header>

        <div className="space-y-3">
          {hotel.offers.map((offer) => (
            <OfferRow key={`${hotel.id}-${offer.partner}`} offer={offer} nights={nights} isCheapest={offer.partner === cheapest.partner && offer.totalPrice === cheapest.totalPrice} />
          ))}
        </div>
      </div>
    </article>
  );
}
