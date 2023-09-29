import { pool } from "./database.js";
import "./dotenv.js";
import memberData from "../data/members.js";

const createMembersTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS members;

    CREATE TABLE IF NOT EXISTS members (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        fullName VARCHAR(255) NOT NULL,
        dob VARCHAR(255) NOT NULL,
        pob VARCHAR(255) NOT NULL,
        position VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        facts TEXT NOT NULL
    )
`;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 members table created successfully");
  } catch (err) {
    console.error("⚠️ error creating members table", err);
  }
};

const seedMembersTable = async () => {
  await createMembersTable();

  memberData.forEach((member) => {
    const insertQuery = {
      text: "INSERT INTO members (name, fullName, dob, pob, position, image, facts) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    };

    const values = [
      member.name,
      member.fullName,
      member.dob,
      member.pob,
      member.position,
      member.image,
      member.facts,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting member", err);
        return;
      }
      console.log(`✅ ${member.name} added successfully`);
    });
  });
};

seedMembersTable();
