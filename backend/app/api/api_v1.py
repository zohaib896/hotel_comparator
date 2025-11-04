from fastapi import APIRouter

from app.api.v1 import hotels

api_router = APIRouter()
api_router.include_router(hotels.router, prefix="/hotels", tags=["hotels"])
