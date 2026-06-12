import { useEffect, useState } from "react";
import api from "../Services/api";

function MyBookings() {
  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    try {
      const token =
        localStorage.getItem("token");

      const response =
        await api.get(
          "/bookings/my-bookings",
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      setBookings(response.data);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container mt-4">

      <h2>
        ☁️ My SkyPass Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="mt-3">
           No bookings yet. Start exploring events!
        </p>
      ) : (
        bookings.map((booking) => (
          <div
            key={booking.id}
            className="card p-3 mt-3"
          >
            <h4>{booking.title}</h4>

            <p>
              📍 {booking.location}
            </p>

            <p>
              🎟️ Tickets:
              {" "}
              {booking.quantity}
            </p>

            <p>
              📅 Event Date:
              {" "}
              {new Date(
                booking.event_date
              ).toLocaleDateString()}
            </p>

          </div>
        ))
      )}

    </div>
  );
}

export default MyBookings;