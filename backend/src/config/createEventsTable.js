const pool = require("./db");

async function createEventsTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        event_date DATE NOT NULL,
        available_tickets INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("Events table created successfully");
  } catch (error) {
    console.error(error);
  }
}

createEventsTable();