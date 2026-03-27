-- Optional seed adjustments for Bridge 42 booking MVP.
-- Run after db/migrations/001_booking_system.sql.

-- Example: change global capacity or booking window.
-- UPDATE restaurant_settings
-- SET max_capacity = 40,
--     slot_duration_mins = 120,
--     slot_interval_mins = 30,
--     min_party_size = 1,
--     max_party_size = 20,
--     advance_days_min = 0,
--     advance_days_max = 90;

-- Example: mark a closure date.
-- INSERT INTO blocked_dates (blocked_date, reason, all_day)
-- VALUES ('2026-12-25', 'Closed for Christmas Day', TRUE)
-- ON CONFLICT (blocked_date) DO UPDATE
-- SET reason = EXCLUDED.reason,
--     all_day = EXCLUDED.all_day;
