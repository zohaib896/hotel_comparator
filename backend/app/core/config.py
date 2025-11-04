from dataclasses import dataclass
from functools import lru_cache
from typing import Tuple


@dataclass(frozen=True)
class Settings:
    app_name: str = "Hotel Comparator API"
    api_prefix: str = "/api/v1"
    allowed_origins: Tuple[str, ...] = (
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    )
    cache_ttl_seconds: int = 600
    default_destination: str = "Bangkok, Thailand"
    affiliate_partners: Tuple[str, ...] = (
        "Booking.com",
        "Expedia",
        "Agoda",
        "Trip.com",
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()
