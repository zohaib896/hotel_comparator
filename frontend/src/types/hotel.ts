export type SortOption = "price_asc" | "price_desc" | "rating_desc" | "distance_asc";

export type SearchFilters = {
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  starRatings?: number[];
  maxDistanceKm?: number;
  breakfastIncluded?: boolean;
  freeCancellation?: boolean;
};

export type SearchParams = {
  destination: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children?: number;
  rooms?: number;
  sortBy: SortOption;
  filters: SearchFilters;
};

export type AffiliateOffer = {
  partner: string;
  pricePerNight: number;
  totalPrice: number;
  currency: string;
  taxesIncluded: boolean;
  breakfastIncluded: boolean;
  freeCancellation: boolean;
  affiliateUrl: string;
  lastUpdated: string;
};

export type Hotel = {
  id: string;
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  stars: number;
  address: string;
  neighborhood: string;
  distanceFromCenterKm: number;
  latitude: number;
  longitude: number;
  imageUrl: string;
  cheapestOffer: AffiliateOffer;
  offers: AffiliateOffer[];
};

export type HotelSearchMeta = {
  destination: string;
  country: string;
  nights: number;
  totalResults: number;
  currency: string;
  generatedAt: string;
};

export type HotelSearchResponse = {
  data: Hotel[];
  meta: HotelSearchMeta;
};
