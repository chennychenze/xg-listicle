import pg from "pg";

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
};

// A connection pool is a cache of database connections maintained so that the connections can be reused when needed, rather than being opened and closed for each database transaction.

export const pool = new pg.Pool(config);
