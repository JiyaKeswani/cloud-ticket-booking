import { useEffect, useState } from "react";
import api from "../Services/api";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const response = await api.get("/events");
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function bookTicket(eventId) {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/bookings",
        {
          eventId: eventId,
          quantity: 1
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("🎉 Ticket booked successfully!");

      fetchEvents();

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Booking failed"
      );
    }
  }

  return (
    <div className="container mt-4">

      <h2>☁️ SkyPass Events</h2>

      {events.map((event) => (
        <div
          key={event.id}
          className="card p-4 mt-3 shadow"
        >
          <h4>{event.title}</h4>

          <p>📍 {event.location}</p>

          <p>
            🎟️ Available Tickets:
            {" "}
            {event.available_tickets}
          </p>

          <button
            className="btn btn-primary"
            onClick={() =>
              bookTicket(event.id)
            }
          >
            Book Ticket
          </button>

        </div>
      ))}
    </div>
  );
}

export default Events;