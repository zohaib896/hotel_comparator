from datetime import date, timedelta

from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_list_hotels_success() -> None:
    today = date.today()
    params = {
        "destination": "Bangkok",
        "check_in": (today + timedelta(days=30)).isoformat(),
        "check_out": (today + timedelta(days=33)).isoformat(),
        "adults": 2,
        "children": 0,
        "rooms": 1,
        "sort_by": "price_asc"
    }

    response = client.get("/api/v1/hotels", params=params)
    assert response.status_code == 200

    payload = response.json()
    assert "data" in payload
    assert payload["meta"]["destination"] == "Bangkok"
    assert len(payload["data"]) > 0
    first_hotel = payload["data"][0]
    assert "offers" in first_hotel
    assert len(first_hotel["offers"]) > 0