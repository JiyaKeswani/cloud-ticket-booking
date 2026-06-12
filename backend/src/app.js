const cors = require("cors");
require("dotenv").config();

const express = require("express");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

/*
MIDDLEWARE
*/
app.use(cors());
app.use(express.json());

/*
HOME ROUTE
*/
app.get("/", (req, res) => {
  res.send("SkyPass API Running");
});

/*
ROUTES
*/
app.use("/api/events", eventRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

/*
SERVER
*/
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});