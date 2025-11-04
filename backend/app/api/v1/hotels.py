from __future__ import annotations

from datetime import date
from typing import List, Optional

from fastapi import APIRouter, Depends, Query

from app.schemas.hotel import HotelSearchParams, HotelSearchResponse, SearchFilters, SortOption
from app.services.hotel_service import search_hotels

router = APIRouter()


def build_params(
    destination: str = Query(..., description="City or region to search"),
    check_in: date = Query(..., description="Check-in date in ISO format"),
    check_out: date = Query(..., description="Check-out date in ISO format"),
    adults: int = Query(2, ge=1),
    children: int = Query(0, ge=0),
    rooms: int = Query(1, ge=1),
    sort_by: SortOption = Query(SortOption.PRICE_ASC),
    min_price: Optional[float] = Query(None, ge=0),
    max_price: Optional[float] = Query(None, ge=0),
    min_rating: Optional[float] = Query(None, ge=0, le=5),
    max_distance_km: Optional[float] = Query(None, ge=0),
    stars: Optional[List[int]] = Query(None),
    breakfast_included: Optional[bool] = Query(None),
    free_cancellation: Optional[bool] = Query(None)
) -> HotelSearchParams:
    filters = SearchFilters(
        min_price=min_price,
        max_price=max_price,
        min_rating=min_rating,
        max_distance_km=max_distance_km,
        star_ratings=stars,
        breakfast_included=breakfast_included,
        free_cancellation=free_cancellation
    )

    return HotelSearchParams(
        destination=destination,
        check_in=check_in,
        check_out=check_out,
        adults=adults,
        children=children,
        rooms=rooms,
        sort_by=sort_by,
        filters=filters
    )


@router.get("", response_model=HotelSearchResponse)
async def list_hotels(params: HotelSearchParams = Depends(build_params)) -> HotelSearchResponse:
    return search_hotels(params)
