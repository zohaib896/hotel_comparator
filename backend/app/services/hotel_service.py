from __future__ import annotations

import hashlib
import json
from datetime import datetime
from typing import Dict, Iterable, List

from app.core.cache import cache
from app.core.config import get_settings
from app.data.mock_hotels import MOCK_HOTELS
from app.schemas.hotel import (
    AffiliateOffer,
    Hotel,
    HotelSearchParams,
    HotelSearchResponse,
    SearchFilters,
    SearchMeta,
    SortOption,
)

settings = get_settings()


def _normalise_destination(value: str) -> str:
    if not value:
        return ""
    return value.split(",")[0].strip().lower()


def _cache_key(params: HotelSearchParams) -> str:
    payload = {
        "destination": params.destination,
        "check_in": params.check_in.isoformat(),
        "check_out": params.check_out.isoformat(),
        "adults": params.adults,
        "children": params.children,
        "rooms": params.rooms,
        "sort_by": params.sort_by,
        "filters": params.filters.model_dump()
    }
    digest = hashlib.md5(json.dumps(payload, sort_keys=True).encode("utf-8")).hexdigest()
    return f"hotel-search:{digest}"


def _filter_offers(offers: Iterable[dict], nights: int) -> List[AffiliateOffer]:
    result: List[AffiliateOffer] = []

    for offer in offers:
        total_price = round(float(offer["price_per_night"]) * nights, 2)
        result.append(
            AffiliateOffer(
                partner=offer["partner"],
                price_per_night=float(offer["price_per_night"]),
                total_price=total_price,
                currency=offer["currency"],
                taxes_included=bool(offer.get("taxes_included", True)),
                breakfast_included=bool(offer.get("breakfast_included", False)),
                free_cancellation=bool(offer.get("free_cancellation", False)),
                affiliate_url=offer["affiliate_url"],
                last_updated=offer.get("last_updated", datetime.utcnow())
            )
        )

    result.sort(key=lambda item: item.price_per_night)
    return result


def _passes_filters(hotel: Dict, offers: List[AffiliateOffer], filters: SearchFilters) -> bool:
    cheapest = offers[0]

    if filters.min_price is not None and cheapest.price_per_night < filters.min_price:
        return False
    if filters.max_price is not None and cheapest.price_per_night > filters.max_price:
        return False
    if filters.min_rating is not None and hotel["rating"] < filters.min_rating:
        return False
    if filters.max_distance_km is not None and hotel["distance_from_center_km"] > filters.max_distance_km:
        return False
    if filters.star_ratings and hotel["stars"] not in filters.star_ratings:
        return False

    if filters.breakfast_included:
        if not any(offer.breakfast_included for offer in offers):
            return False

    if filters.free_cancellation:
        if not any(offer.free_cancellation for offer in offers):
            return False

    return True


def _sort_hotels(hotels: List[Hotel], sort_by: SortOption) -> List[Hotel]:
    if sort_by == SortOption.PRICE_ASC:
        return sorted(hotels, key=lambda hotel: hotel.cheapest_offer.price_per_night)
    if sort_by == SortOption.PRICE_DESC:
        return sorted(hotels, key=lambda hotel: hotel.cheapest_offer.price_per_night, reverse=True)
    if sort_by == SortOption.RATING_DESC:
        return sorted(hotels, key=lambda hotel: hotel.rating, reverse=True)
    if sort_by == SortOption.DISTANCE_ASC:
        return sorted(hotels, key=lambda hotel: hotel.distance_from_center_km)
    return hotels


def search_hotels(params: HotelSearchParams) -> HotelSearchResponse:
    cached = cache.get(_cache_key(params))
    if cached:
        return cached

    nights = (params.check_out - params.check_in).days

    if nights <= 0:
        nights = 1

    filtered_hotels: List[Hotel] = []

    requested_destination = _normalise_destination(params.destination or settings.default_destination)

    for raw_hotel in MOCK_HOTELS:
        hotel_destination = _normalise_destination(raw_hotel["destination"]["city"])
        if requested_destination and requested_destination not in hotel_destination:
            continue

        offers = _filter_offers(raw_hotel["offers"], nights)

        if not offers:
            continue

        if not _passes_filters(raw_hotel, offers, params.filters):
            continue

        hotel = Hotel(
            id=raw_hotel["id"],
            name=raw_hotel["name"],
            description=raw_hotel["description"],
            rating=raw_hotel["rating"],
            review_count=raw_hotel["review_count"],
            stars=raw_hotel["stars"],
            address=raw_hotel["address"],
            neighborhood=raw_hotel["neighborhood"],
            distance_from_center_km=raw_hotel["distance_from_center_km"],
            latitude=raw_hotel["latitude"],
            longitude=raw_hotel["longitude"],
            image_url=raw_hotel["image_url"],
            cheapest_offer=offers[0],
            offers=offers
        )

        filtered_hotels.append(hotel)

    sorted_hotels = _sort_hotels(filtered_hotels, params.sort_by)

    response = HotelSearchResponse(
        data=sorted_hotels,
        meta=SearchMeta(
            destination="Bangkok",
            country="Thailand",
            nights=nights,
            total_results=len(sorted_hotels),
            currency="EUR",
            generated_at=datetime.utcnow()
        )
    )

    cache.set(_cache_key(params), response, ttl_seconds=settings.cache_ttl_seconds)

    return response
