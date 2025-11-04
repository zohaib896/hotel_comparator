from __future__ import annotations

from datetime import datetime
from typing import List

from app.core.config import get_settings

settings = get_settings()

MOCK_HOTELS: List[dict] = [
    {
        "id": "bk-chatrium-riverside",
        "name": "Chatrium Hotel Riverside Bangkok",
        "description": "Riverside luxury with panoramic Chao Phraya views and complimentary shuttle boat to Sathorn Pier.",
        "rating": 4.7,
        "review_count": 2145,
        "stars": 5,
        "address": "28 Charoenkrung Soi 70, Bangkok",
        "neighborhood": "Bangkok Riverside",
        "distance_from_center_km": 3.2,
        "latitude": 13.705,
        "longitude": 100.508,
        "image_url": "https://images.unsplash.com/photo-1542315192-1f61a189cb79?auto=format&fit=crop&w=1600&q=80",
        "destination": {"city": "Bangkok", "country": "Thailand"},
        "offers": [
            {
                "partner": "Booking.com",
                "price_per_night": 159,
                "currency": "EUR",
                "taxes_included": True,
                "breakfast_included": True,
                "free_cancellation": True,
                "affiliate_url": "https://affiliate.example.com/booking/chatrium",
                "last_updated": datetime(2025, 11, 1, 10, 0, 0)
            },
            {
                "partner": "Expedia",
                "price_per_night": 164,
                "currency": "EUR",
                "taxes_included": True,
                "breakfast_included": False,
                "free_cancellation": True,
                "affiliate_url": "https://affiliate.example.com/expedia/chatrium",
                "last_updated": datetime(2025, 11, 1, 9, 45, 0)
            },
            {
                "partner": "Agoda",
                "price_per_night": 152,
                "currency": "EUR",
                "taxes_included": True,
                "breakfast_included": True,
                "free_cancellation": True,
                "affiliate_url": "https://affiliate.example.com/agoda/chatrium",
                "last_updated": datetime(2025, 11, 1, 10, 5, 0)
            },
            {
                "partner": "Trip.com",
                "price_per_night": 158,
                "currency": "EUR",
                "taxes_included": True,
                "breakfast_included": False,
                "free_cancellation": True,
                "affiliate_url": "https://affiliate.example.com/trip/chatrium",
                "last_updated": datetime(2025, 11, 1, 9, 40, 0)
            }
        ]
    },
    {
        "id": "bk-sindhorn-midtown",
        "name": "Sindhorn Midtown Hotel Bangkok",
        "description": "Stylish Sukhumvit hideaway with rooftop pool bar and easy BTS access.",
        "rating": 4.6,
        "review_count": 1892,
        "stars": 4,
        "address": "68 Langsuan Road, Bangkok",
        "neighborhood": "Sukhumvit",
        "distance_from_center_km": 1.7,
        "latitude": 13.736,
        "longitude": 100.543,
        "image_url": "https://images.unsplash.com/photo-1501117716987-c8e8cc3237a3?auto=format&fit=crop&w=1600&q=80",
        "destination": {"city": "Bangkok", "country": "Thailand"},
        "offers": [
            {
                "partner": "Booking.com",
                "price_per_night": 128,
                "currency": "EUR",
                "taxes_included": True,
                "breakfast_included": False,
                "free_cancellation": True,
                "affiliate_url": "https://affiliate.example.com/booking/sindhorn",
                "last_updated": datetime(2025, 11, 1, 10, 15, 0)
            },
            {
                "partner": "Expedia",
                "price_per_night": 132,
                "currency": "EUR",
                "taxes_included": True,
                "breakfast_included": False,
                "free_cancellation": False,
                "affiliate_url": "https://affiliate.example.com/expedia/sindhorn",
                "last_updated": datetime(2025, 11, 1, 10, 0, 0)
            },
            {
                "partner": "Agoda",
                "price_per_night": 134,
                "currency": "EUR",
                "taxes_included": True,
                "breakfast_included": True,
                "free_cancellation": True,
                "affiliate_url": "https://affiliate.example.com/agoda/sindhorn",
                "last_updated": datetime(2025, 11, 1, 9, 55, 0)
            },
            {
                "partner": "Trip.com",
                "price_per_night": 130,
                "currency": "EUR",
                "taxes_included": True,
                "breakfast_included": False,
                "free_cancellation": True,
                "affiliate_url": "https://affiliate.example.com/trip/sindhorn",
                "last_updated": datetime(2025, 11, 1, 9, 50, 0)
            }
        ]
    },
    {
        "id": "bk-ariyasom-villa",
        "name": "Ariyasom Villa Bangkok",
        "description": "Boutique sanctuary with tropical gardens, organic cuisine, and personalised wellness treatments near Nana BTS.",
        "rating": 4.8,
        "review_count": 987,
        "stars": 4,
        "address": "65 Sukhumvit Soi 1, Bangkok",
        "neighborhood": "Phrom Phong",
        "distance_from_center_km": 0.9,
        "latitude": 13.742,
        "longitude": 100.556,
        "image_url": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80",
        "destination": {"city": "Bangkok", "country": "Thailand"},
        "offers": [
            {
                "partner": "Booking.com",
                "price_per_night": 179,
                "currency": "EUR",
                "taxes_included": True,
                "breakfast_included": True,
                "free_cancellation": True,
                "affiliate_url": "https://affiliate.example.com/booking/ariyasom",
                "last_updated": datetime(2025, 11, 1, 10, 5, 0)
            },
            {
                "partner": "Expedia",
                "price_per_night": 185,
                "currency": "EUR",
                "taxes_included": True,
                "breakfast_included": False,
                "free_cancellation": True,
                "affiliate_url": "https://affiliate.example.com/expedia/ariyasom",
                "last_updated": datetime(2025, 11, 1, 9, 50, 0)
            },
            {
                "partner": "Agoda",
                "price_per_night": 174,
                "currency": "EUR",
                "taxes_included": True,
                "breakfast_included": True,
                "free_cancellation": False,
                "affiliate_url": "https://affiliate.example.com/agoda/ariyasom",
                "last_updated": datetime(2025, 11, 1, 9, 45, 0)
            },
            {
                "partner": "Trip.com",
                "price_per_night": 172,
                "currency": "EUR",
                "taxes_included": True,
                "breakfast_included": True,
                "free_cancellation": True,
                "affiliate_url": "https://affiliate.example.com/trip/ariyasom",
                "last_updated": datetime(2025, 11, 1, 10, 20, 0)
            }
        ]
    }
]
