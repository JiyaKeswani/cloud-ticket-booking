const express = require("express");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ticket Booking API Running");
});
app.use("/api/events", eventRoutes);
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});