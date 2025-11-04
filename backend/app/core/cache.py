from __future__ import annotations

import time
from dataclasses import dataclass
from typing import Any, Dict, Optional


@dataclass
class CacheItem:
    value: Any
    expires_at: float


class SimpleCache:
    """Minimal in-memory cache placeholder for future Redis/DB integration."""

    def __init__(self) -> None:
        self._store: Dict[str, CacheItem] = {}

    def get(self, key: str) -> Optional[Any]:
        item = self._store.get(key)
        if not item:
            return None

        if time.time() > item.expires_at:
            self._store.pop(key, None)
            return None

        return item.value

    def set(self, key: str, value: Any, ttl_seconds: int) -> None:
        expires_at = time.time() + ttl_seconds
        self._store[key] = CacheItem(value=value, expires_at=expires_at)

    def clear(self) -> None:
        self._store.clear()


cache = SimpleCache()
