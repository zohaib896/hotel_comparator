"use client";

import { useMemo, type ChangeEvent } from "react";
import { useTranslation } from "@/components/TranslationProvider";
import type { SearchFilters, SortOption } from "@/types/hotel";

const STAR_OPTIONS = [3, 4, 5];

type FiltersBarProps = {
  filters: SearchFilters;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  onFiltersChange: (filters: SearchFilters) => void;
};

export default function FiltersBar({ filters, sortBy, onSortChange, onFiltersChange }: FiltersBarProps) {
  const { t } = useTranslation();

  const selectedStars = filters.starRatings ?? [];

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value as SortOption);
  };

  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const parsed = value === "" ? undefined : Number(value);
    onFiltersChange({
      ...filters,
      [name]: parsed
    });
  };

  const handleToggleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    onFiltersChange({
      ...filters,
      [name]: checked
    });
  };

  const handleStarChange = (star: number) => {
    const nextStars = selectedStars.includes(star)
      ? selectedStars.filter((value) => value !== star)
      : [...selectedStars, star].sort();

    onFiltersChange({
      ...filters,
      starRatings: nextStars
    });
  };

  const hasActiveFilters = useMemo(() => {
    return (
      filters.minPrice !== undefined ||
      filters.maxPrice !== undefined ||
      filters.minRating !== undefined ||
      (filters.starRatings?.length ?? 0) > 0 ||
      filters.maxDistanceKm !== undefined ||
      filters.breakfastIncluded !== undefined ||
      filters.freeCancellation !== undefined
    );
  }, [filters]);

  const handleResetFilters = () => {
    onFiltersChange({});
  };

  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-600">
            {t("filters.sortLabel")}
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm focus:border-brand-primary focus:outline-none"
            >
              <option value="price_asc">{t("filters.sortOptions.priceAsc")}</option>
              <option value="price_desc">{t("filters.sortOptions.priceDesc")}</option>
              <option value="rating_desc">{t("filters.sortOptions.ratingDesc")}</option>
              <option value="distance_asc">{t("filters.sortOptions.distanceAsc")}</option>
            </select>
          </label>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
          {hasActiveFilters && <span className="rounded-full bg-brand-primary/10 px-3 py-1 font-medium text-brand-primary">{t("filters.apply")}</span>}
          <button
            type="button"
            onClick={handleResetFilters}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
          >
            {t("filters.reset")}
          </button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          {t("filters.priceLabel")}
          <input
            type="number"
            name="minPrice"
            min={0}
            value={filters.minPrice ?? ""}
            onChange={handleNumberChange}
            placeholder="0"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          {t("filters.priceLabel")}
          <input
            type="number"
            name="maxPrice"
            min={0}
            value={filters.maxPrice ?? ""}
            onChange={handleNumberChange}
            placeholder="300"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          {t("filters.ratingLabel")}
          <input
            type="number"
            name="minRating"
            min={0}
            max={5}
            step={0.1}
            value={filters.minRating ?? ""}
            onChange={handleNumberChange}
            placeholder="4.0"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          {t("filters.distanceLabel")}
          <input
            type="number"
            name="maxDistanceKm"
            min={0}
            step={0.1}
            value={filters.maxDistanceKm ?? ""}
            onChange={handleNumberChange}
            placeholder="5"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          />
        </label>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <fieldset className="flex flex-col gap-2">
          <legend className="text-sm font-semibold text-slate-700">{t("filters.starsLabel")}</legend>
          <div className="flex flex-wrap items-center gap-3">
            {STAR_OPTIONS.map((star) => (
              <label key={star} className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={selectedStars.includes(star)}
                  onChange={() => handleStarChange(star)}
                  className="h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary"
                />
                <span>{"★".repeat(star)}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <input
            type="checkbox"
            name="breakfastIncluded"
            checked={filters.breakfastIncluded ?? false}
            onChange={handleToggleChange}
            className="h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary"
          />
          {t("filters.breakfastLabel")}
        </label>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <input
            type="checkbox"
            name="freeCancellation"
            checked={filters.freeCancellation ?? false}
            onChange={handleToggleChange}
            className="h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary"
          />
          {t("filters.cancellationLabel")}
        </label>
      </div>
    </section>
  );
}
