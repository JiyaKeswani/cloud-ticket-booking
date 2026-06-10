const express = require("express");

const router = express.Router();

const events = [
  {
    id: 1,
    title: "Tech Fest 2025",
    venue: "SRM University",
    price: 500
  },
  {
    id: 2,
    title: "Cloud Workshop",
    venue: "Online",
    price: 300
  }
];

// GET all events
router.get("/", (req, res) => {
  res.json(events);
});

// POST new event
router.post("/", (req, res) => {
  const { title, venue, price } = req.body;

  const newEvent = {
    id: events.length + 1,
    title,
    venue,
    price
  };

  events.push(newEvent);

  res.status(201).json({
    message: "Event created successfully",
    event: newEvent
  });
});

module.exports = router;