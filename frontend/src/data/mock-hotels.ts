import type { HotelSearchResponse } from "@/types/hotel";

export const mockHotelSearchResponse: HotelSearchResponse = {
  data: [
    {
      id: "bk-chatrium-riverside",
      name: "Chatrium Hotel Riverside Bangkok",
      description:
        "Riverside luxury with spacious suites, panoramic Chao Phraya River views, and a complimentary shuttle boat to Sathorn Pier.",
      rating: 4.7,
      reviewCount: 2145,
      stars: 5,
      address: "28 Charoenkrung Soi 70, Bangkok",
      neighborhood: "Bangkok Riverside",
      distanceFromCenterKm: 3.2,
      latitude: 13.705,
      longitude: 100.508,
      imageUrl: "https://images.unsplash.com/photo-1542315192-1f61a189cb79?auto=format&fit=crop&w=1600&q=80",
      cheapestOffer: {
        partner: "Agoda",
        pricePerNight: 152,
        totalPrice: 456,
        currency: "EUR",
        taxesIncluded: true,
        breakfastIncluded: true,
        freeCancellation: true,
        affiliateUrl: "https://affiliate.example.com/agoda/chatrium",
        lastUpdated: "2025-11-01T10:00:00Z"
      },
      offers: [
        {
          partner: "Booking.com",
          pricePerNight: 159,
          totalPrice: 477,
          currency: "EUR",
          taxesIncluded: true,
          breakfastIncluded: true,
          freeCancellation: true,
          affiliateUrl: "https://affiliate.example.com/booking/chatrium",
          lastUpdated: "2025-11-01T10:00:00Z"
        },
        {
          partner: "Expedia",
          pricePerNight: 164,
          totalPrice: 492,
          currency: "EUR",
          taxesIncluded: true,
          breakfastIncluded: false,
          freeCancellation: true,
          affiliateUrl: "https://affiliate.example.com/expedia/chatrium",
          lastUpdated: "2025-11-01T09:45:00Z"
        },
        {
          partner: "Agoda",
          pricePerNight: 152,
          totalPrice: 456,
          currency: "EUR",
          taxesIncluded: true,
          breakfastIncluded: true,
          freeCancellation: true,
          affiliateUrl: "https://affiliate.example.com/agoda/chatrium",
          lastUpdated: "2025-11-01T10:05:00Z"
        },
        {
          partner: "Trip.com",
          pricePerNight: 158,
          totalPrice: 474,
          currency: "EUR",
          taxesIncluded: true,
          breakfastIncluded: false,
          freeCancellation: true,
          affiliateUrl: "https://affiliate.example.com/trip/chatrium",
          lastUpdated: "2025-11-01T09:40:00Z"
        }
      ]
    },
    {
      id: "bk-sindhorn-midtown",
      name: "Sindhorn Midtown Hotel Bangkok",
      description:
        "Stylish Sukhumvit hideaway with rooftop SALT pool bar, easy BTS access, and urban oasis vibes.",
      rating: 4.6,
      reviewCount: 1892,
      stars: 4,
      address: "68 Langsuan Road, Bangkok",
      neighborhood: "Sukhumvit",
      distanceFromCenterKm: 1.7,
      latitude: 13.736,
      longitude: 100.543,
      imageUrl: "https://images.unsplash.com/photo-1501117716987-c8e8cc3237a3?auto=format&fit=crop&w=1600&q=80",
      cheapestOffer: {
        partner: "Booking.com",
        pricePerNight: 128,
        totalPrice: 384,
        currency: "EUR",
        taxesIncluded: true,
        breakfastIncluded: false,
        freeCancellation: true,
        affiliateUrl: "https://affiliate.example.com/booking/sindhorn",
        lastUpdated: "2025-11-01T10:15:00Z"
      },
      offers: [
        {
          partner: "Booking.com",
          pricePerNight: 128,
          totalPrice: 384,
          currency: "EUR",
          taxesIncluded: true,
          breakfastIncluded: false,
          freeCancellation: true,
          affiliateUrl: "https://affiliate.example.com/booking/sindhorn",
          lastUpdated: "2025-11-01T10:15:00Z"
        },
        {
          partner: "Expedia",
          pricePerNight: 132,
          totalPrice: 396,
          currency: "EUR",
          taxesIncluded: true,
          breakfastIncluded: false,
          freeCancellation: false,
          affiliateUrl: "https://affiliate.example.com/expedia/sindhorn",
          lastUpdated: "2025-11-01T10:00:00Z"
        },
        {
          partner: "Agoda",
          pricePerNight: 134,
          totalPrice: 402,
          currency: "EUR",
          taxesIncluded: true,
          breakfastIncluded: true,
          freeCancellation: true,
          affiliateUrl: "https://affiliate.example.com/agoda/sindhorn",
          lastUpdated: "2025-11-01T09:55:00Z"
        },
        {
          partner: "Trip.com",
          pricePerNight: 130,
          totalPrice: 390,
          currency: "EUR",
          taxesIncluded: true,
          breakfastIncluded: false,
          freeCancellation: true,
          affiliateUrl: "https://affiliate.example.com/trip/sindhorn",
          lastUpdated: "2025-11-01T09:50:00Z"
        }
      ]
    },
    {
      id: "bk-ariyasom-villa",
      name: "Ariyasom Villa Bangkok",
      description:
        "Boutique 4-star sanctuary with tropical gardens, organic Thai dining, and personalized wellness treatments near Nana BTS.",
      rating: 4.8,
      reviewCount: 987,
      stars: 4,
      address: "65 Sukhumvit Soi 1, Bangkok",
      neighborhood: "Phrom Phong",
      distanceFromCenterKm: 0.9,
      latitude: 13.742,
      longitude: 100.556,
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80",
      cheapestOffer: {
        partner: "Trip.com",
        pricePerNight: 172,
        totalPrice: 516,
        currency: "EUR",
        taxesIncluded: true,
        breakfastIncluded: true,
        freeCancellation: true,
        affiliateUrl: "https://affiliate.example.com/trip/ariyasom",
        lastUpdated: "2025-11-01T10:20:00Z"
      },
      offers: [
        {
          partner: "Booking.com",
          pricePerNight: 179,
          totalPrice: 537,
          currency: "EUR",
          taxesIncluded: true,
          breakfastIncluded: true,
          freeCancellation: true,
          affiliateUrl: "https://affiliate.example.com/booking/ariyasom",
          lastUpdated: "2025-11-01T10:05:00Z"
        },
        {
          partner: "Expedia",
          pricePerNight: 185,
          totalPrice: 555,
          currency: "EUR",
          taxesIncluded: true,
          breakfastIncluded: false,
          freeCancellation: true,
          affiliateUrl: "https://affiliate.example.com/expedia/ariyasom",
          lastUpdated: "2025-11-01T09:50:00Z"
        },
        {
          partner: "Agoda",
          pricePerNight: 174,
          totalPrice: 522,
          currency: "EUR",
          taxesIncluded: true,
          breakfastIncluded: true,
          freeCancellation: false,
          affiliateUrl: "https://affiliate.example.com/agoda/ariyasom",
          lastUpdated: "2025-11-01T09:45:00Z"
        },
        {
          partner: "Trip.com",
          pricePerNight: 172,
          totalPrice: 516,
          currency: "EUR",
          taxesIncluded: true,
          breakfastIncluded: true,
          freeCancellation: true,
          affiliateUrl: "https://affiliate.example.com/trip/ariyasom",
          lastUpdated: "2025-11-01T10:20:00Z"
        }
      ]
    }
  ],
  meta: {
    destination: "Bangkok",
    country: "Thailand",
    nights: 3,
    totalResults: 3,
    currency: "EUR",
    generatedAt: "2025-11-01T10:30:00Z"
  }
};
