# Bridge 42 Website

React + Vite + TypeScript restaurant site with a custom in-house booking MVP.

## Features

- Premium multi-step booking flow at `/book`
- Capacity-based slot availability (`/api/availability`)
- Booking creation with race-condition protection (`/api/bookings`)
- Admin day view and status updates at `/admin`
- Admin APIs protected by `x-admin-key` + `ADMIN_SECRET`
- Guest confirmation and admin notification emails via Resend

## Tech Stack

- Frontend: React, Vite
- Backend APIs: Vercel Functions (`/api/*`)
- Database: Neon Postgres (`@neondatabase/serverless`)
- Validation: zod
- Email: Resend

## Environment Variables

Copy `.env.example` to `.env` and set:

- `DATABASE_URL` (required): Neon/Postgres connection string
- `ADMIN_SECRET` (required): admin key used by `/admin` requests
- `RESEND_API_KEY` (required for emails)
- `BOOKING_FROM_EMAIL` (optional but recommended)
- `BOOKING_ADMIN_EMAIL` (optional but recommended for admin notifications)
- `BOOKING_CONTACT_PHONE` (optional)

## Database Setup

Run migration:

```bash
psql "$DATABASE_URL" -f db/migrations/001_booking_system.sql
```

Optional editable seed helpers:

```bash
psql "$DATABASE_URL" -f db/seed/seed_booking_mvp.sql
```

Default seeded hours are daily `10:00` to `20:00` and can be changed in `time_slot_config`.

## Run Locally

```bash
npm install
npm run dev
```

## Test + Build

```bash
npm run test
npm run build
```

## Booking API Endpoints

- `GET /api/availability?date=YYYY-MM-DD&guests=4`
- `POST /api/bookings`
- `GET /api/bookings?date=YYYY-MM-DD` (admin header required)
- `PUT /api/bookings/:id` (admin header required)

## Notes

- Booking logic uses `Europe/London` local time for “today/past slot” handling.
- Email send failures do not roll back successful bookings.
