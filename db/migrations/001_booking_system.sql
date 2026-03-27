BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS restaurant_settings (
  id SERIAL PRIMARY KEY,
  max_capacity INTEGER NOT NULL DEFAULT 40,
  slot_duration_mins INTEGER NOT NULL DEFAULT 120,
  slot_interval_mins INTEGER NOT NULL DEFAULT 30,
  min_party_size INTEGER NOT NULL DEFAULT 1,
  max_party_size INTEGER NOT NULL DEFAULT 20,
  advance_days_min INTEGER NOT NULL DEFAULT 0,
  advance_days_max INTEGER NOT NULL DEFAULT 90,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS time_slot_config (
  id SERIAL PRIMARY KEY,
  day_of_week SMALLINT NOT NULL UNIQUE CHECK (day_of_week BETWEEN 0 AND 6),
  open_time TIME NOT NULL,
  close_time TIME NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference CHAR(8) NOT NULL UNIQUE,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  duration_mins INTEGER NOT NULL DEFAULT 120,
  guest_count SMALLINT NOT NULL,
  first_name VARCHAR(80) NOT NULL,
  last_name VARCHAR(80) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(30),
  notes TEXT,
  source VARCHAR(20) NOT NULL DEFAULT 'website',
  status VARCHAR(20) NOT NULL DEFAULT 'confirmed'
    CHECK (status IN ('confirmed', 'cancelled', 'no_show', 'seated')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS blocked_dates (
  id SERIAL PRIMARY KEY,
  blocked_date DATE NOT NULL UNIQUE,
  reason VARCHAR(255),
  all_day BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE INDEX IF NOT EXISTS idx_bookings_booking_date ON bookings (booking_date);
CREATE INDEX IF NOT EXISTS idx_bookings_booking_date_time ON bookings (booking_date, booking_time);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings (status);
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings (email);

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_restaurant_settings_updated_at ON restaurant_settings;
CREATE TRIGGER trg_restaurant_settings_updated_at
BEFORE UPDATE ON restaurant_settings
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_bookings_updated_at ON bookings;
CREATE TRIGGER trg_bookings_updated_at
BEFORE UPDATE ON bookings
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

INSERT INTO restaurant_settings (
  max_capacity,
  slot_duration_mins,
  slot_interval_mins,
  min_party_size,
  max_party_size,
  advance_days_min,
  advance_days_max
)
SELECT 40, 120, 30, 1, 20, 0, 90
WHERE NOT EXISTS (SELECT 1 FROM restaurant_settings);

INSERT INTO time_slot_config (day_of_week, open_time, close_time, is_active)
VALUES
  (0, '10:00', '20:00', TRUE),
  (1, '10:00', '20:00', TRUE),
  (2, '10:00', '20:00', TRUE),
  (3, '10:00', '20:00', TRUE),
  (4, '10:00', '20:00', TRUE),
  (5, '10:00', '20:00', TRUE),
  (6, '10:00', '20:00', TRUE)
ON CONFLICT (day_of_week) DO NOTHING;

COMMIT;
