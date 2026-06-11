const express = require("express");
const pool = require("../config/db");
const authMiddleware =
  require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  async (req, res) => {
    try {
      const { eventId, quantity } = req.body;

      const userId = req.user.id;

      const eventResult = await pool.query(
        "SELECT * FROM events WHERE id = $1",
        [eventId]
      );

      if (eventResult.rows.length === 0) {
        return res.status(404).json({
          message: "Event not found"
        });
      }

      const event = eventResult.rows[0];

      if (
        event.available_tickets < quantity
      ) {
        return res.status(400).json({
          message:
            "Not enough tickets available"
        });
      }

      await pool.query(
        `
        INSERT INTO bookings
        (user_id, event_id, quantity)
        VALUES ($1, $2, $3)
        `,
        [userId, eventId, quantity]
      );

      await pool.query(
        `
        UPDATE events
        SET available_tickets =
        available_tickets - $1
        WHERE id = $2
        `,
        [quantity, eventId]
      );

      res.status(201).json({
        message:
          "Tickets booked successfully"
      });

    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server error"
      });
    }
  }
);
router.get(
  "/my-bookings",
  authMiddleware,
  async (req, res) => {
    try {
      const userId = req.user.id;

      const result = await pool.query(
        `
        SELECT
          b.id,
          e.title,
          e.location,
          e.event_date,
          b.quantity,
          b.booking_date
        FROM bookings b
        JOIN events e
          ON b.event_id = e.id
        WHERE b.user_id = $1
        ORDER BY b.booking_date DESC
        `,
        [userId]
      );

      res.json(result.rows);

    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server error"
      });
    }
  }
);

module.exports = router;