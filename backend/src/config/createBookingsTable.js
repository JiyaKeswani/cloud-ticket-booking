const pool = require("./db");

async function createBookingsTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id),
        event_id INT REFERENCES events(id),
        quantity INT NOT NULL,
        booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log(
      "Bookings table created successfully"
    );

  } catch (error) {
    console.error(error);
  }
}

createBookingsTable();