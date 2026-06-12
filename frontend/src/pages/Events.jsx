import { useEffect, useState } from "react";
import api from "../Services/api";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const response =
        await api.get("/events");

      setEvents(response.data);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container mt-4">

      <h2>☁️ SkyPass Events</h2>

      {events.map((event) => (
        <div
          key={event.id}
          className="card p-3 mt-3"
        >
          <h4>{event.title}</h4>

          <p>
            📍 {event.location}
          </p>

          <p>
            🎟️ Available Tickets:
            {" "}
            {event.available_tickets}
          </p>

          <button
            className="btn btn-primary"
          >
            Book Ticket
          </button>

        </div>
      ))}

    </div>
  );
}

export default Events;