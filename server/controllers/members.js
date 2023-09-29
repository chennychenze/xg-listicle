// store controller functions to perform CRUD operations
// associated with the members table

import { pool } from "../config/database.js";

const getMembers = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM members ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  getMembers,
};
