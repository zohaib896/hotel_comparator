from __future__ import annotations

from datetime import date, datetime
from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, Field, field_validator, model_validator
from pydantic import ConfigDict


def _to_camel(string: str) -> str:
    parts = string.split("_")
    return parts[0] + "".join(word.capitalize() for word in parts[1:])


class CamelModel(BaseModel):
    model_config = ConfigDict(alias_generator=_to_camel, populate_by_name=True, from_attributes=True)


class SortOption(str, Enum):
    PRICE_ASC = "price_asc"
    PRICE_DESC = "price_desc"
    RATING_DESC = "rating_desc"
    DISTANCE_ASC = "distance_asc"


class SearchFilters(CamelModel):
    min_price: Optional[float] = Field(None, ge=0)
    max_price: Optional[float] = Field(None, ge=0)
    min_rating: Optional[float] = Field(None, ge=0, le=5)
    max_distance_km: Optional[float] = Field(None, ge=0)
    star_ratings: Optional[List[int]] = None
    breakfast_included: Optional[bool] = None
    free_cancellation: Optional[bool] = None

    @field_validator("star_ratings")
    @classmethod
    def sort_stars(cls, value: Optional[List[int]]) -> Optional[List[int]]:
        if value:
            return sorted(set(value))
        return value


class HotelSearchParams(CamelModel):
    destination: str = Field(..., min_length=2)
    check_in: date
    check_out: date
    adults: int = Field(2, ge=1)
    children: int = Field(0, ge=0)
    rooms: int = Field(1, ge=1)
    sort_by: SortOption = SortOption.PRICE_ASC
    filters: SearchFilters = Field(default_factory=SearchFilters)

    @model_validator(mode="after")
    def validate_dates(self) -> "HotelSearchParams":
        if self.check_out <= self.check_in:
            raise ValueError("check_out must be after check_in")
        return self


class AffiliateOffer(CamelModel):
    partner: str
    price_per_night: float
    total_price: float
    currency: str
    taxes_included: bool = True
    breakfast_included: bool = False
    free_cancellation: bool = False
    affiliate_url: str
    last_updated: datetime


class Hotel(CamelModel):
    id: str
    name: str
    description: str
    rating: float
    review_count: int
    stars: int
    address: str
    neighborhood: str
    distance_from_center_km: float
    latitude: float
    longitude: float
    image_url: str
    cheapest_offer: AffiliateOffer
    offers: List[AffiliateOffer]


class SearchMeta(CamelModel):
    destination: str
    country: str
    nights: int
    total_results: int
    currency: str
    generated_at: datetime


class HotelSearchResponse(CamelModel):
    data: List[Hotel]
    meta: SearchMeta
