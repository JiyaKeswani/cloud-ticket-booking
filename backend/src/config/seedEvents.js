const pool = require("./db");

async function seedEvents() {
  try {
    await pool.query(`
      INSERT INTO events
      (title, location, event_date, available_tickets)
      VALUES
      ('Cloud Conference 2026', 'Chennai', '2026-07-10', 100),
      ('AI Summit', 'Bangalore', '2026-08-15', 150),
      ('Tech Fest', 'Mumbai', '2026-09-20', 200);
    `);

    console.log("Sample events inserted");
  } catch (error) {
    console.error(error);
  }
}

seedEvents();