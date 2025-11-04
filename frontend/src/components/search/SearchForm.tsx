"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "@/components/TranslationProvider";
import type { SearchParams } from "@/types/hotel";

type SearchFormProps = {
  initialParams: SearchParams;
  nights: number;
  onSubmit: (params: Partial<SearchParams>) => void;
  onReset: () => void;
};

export default function SearchForm({ initialParams, nights, onSubmit, onReset }: SearchFormProps) {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    destination: initialParams.destination,
    checkIn: initialParams.checkIn,
    checkOut: initialParams.checkOut,
    adults: initialParams.adults,
    children: initialParams.children ?? 0,
    rooms: initialParams.rooms ?? 1
  });

  const handleInputChange = (name: string, value: string | number) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      destination: formState.destination,
      checkIn: formState.checkIn,
      checkOut: formState.checkOut,
      adults: Number(formState.adults),
      children: Number(formState.children),
      rooms: Number(formState.rooms)
    });
  };

  const handleReset = () => {
    onReset();
  };

  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            {t("searchForm.destinationLabel")}
            <input
              type="text"
              name="destination"
              value={formState.destination}
              onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange("destination", event.target.value)}
              placeholder={t("searchForm.destinationPlaceholder")}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            {t("searchForm.checkInLabel")}
            <input
              type="date"
              name="checkIn"
              value={formState.checkIn}
              onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange("checkIn", event.target.value)}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            {t("searchForm.checkOutLabel")}
            <input
              type="date"
              name="checkOut"
              value={formState.checkOut}
              onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange("checkOut", event.target.value)}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            {t("searchForm.guestsLabel")}
            <input
              type="number"
              name="adults"
              min={1}
              value={formState.adults}
              onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange("adults", Number(event.target.value))}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            {t("searchForm.childrenLabel")}
            <input
              type="number"
              name="children"
              min={0}
              value={formState.children}
              onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange("children", Number(event.target.value))}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            {t("searchForm.roomsLabel")}
            <input
              type="number"
              name="rooms"
              min={1}
              value={formState.rooms}
              onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange("rooms", Number(event.target.value))}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
            />
          </label>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            {t("results.totalFor", { nights })}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
            >
              {t("searchForm.resetButton")}
            </button>
            <button
              type="submit"
              className="rounded-full bg-brand-primary px-6 py-2 text-sm font-semibold text-white shadow transition-transform hover:scale-[1.02]"
            >
              {t("searchForm.searchButton")}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
