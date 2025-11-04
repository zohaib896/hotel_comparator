import { mockHotelSearchResponse } from "@/data/mock-hotels";
import type { HotelSearchResponse, SearchParams } from "@/types/hotel";

const DEFAULT_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

function buildQuery(params: SearchParams) {
  const query = new URLSearchParams({
    destination: params.destination,
    check_in: params.checkIn,
    check_out: params.checkOut,
    adults: String(params.adults),
    children: String(params.children ?? 0),
    rooms: String(params.rooms ?? 1),
    sort_by: params.sortBy
  });

  if (params.filters.minPrice !== undefined) {
    query.append("min_price", String(params.filters.minPrice));
  }
  if (params.filters.maxPrice !== undefined) {
    query.append("max_price", String(params.filters.maxPrice));
  }
  if (params.filters.minRating !== undefined) {
    query.append("min_rating", String(params.filters.minRating));
  }
  if (params.filters.maxDistanceKm !== undefined) {
    query.append("max_distance_km", String(params.filters.maxDistanceKm));
  }
  if (params.filters.breakfastIncluded !== undefined) {
    query.append("breakfast_included", String(params.filters.breakfastIncluded));
  }
  if (params.filters.freeCancellation !== undefined) {
    query.append("free_cancellation", String(params.filters.freeCancellation));
  }
  if (params.filters.starRatings?.length) {
    for (const star of params.filters.starRatings) {
      query.append("stars", String(star));
    }
  }

  return query.toString();
}

export async function fetchHotels(params: SearchParams): Promise<HotelSearchResponse> {
  const query = buildQuery(params);
  const endpoint = `${DEFAULT_API_BASE_URL}/api/v1/hotels?${query}`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as HotelSearchResponse;
    return payload;
  } catch (error) {
    console.warn("Falling back to local mock data", error);
    return mockHotelSearchResponse;
  }
}
