import { Pool } from "pg";

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

if (!DB_HOST) throw new Error("Database host is not set");
if (!DB_PORT) throw new Error("Database port is not set");
if (!DB_NAME) throw new Error("Database name is not set");
if (!DB_USER) throw new Error("Database user is not set");
if (!DB_PASSWORD) throw new Error("Database password is not set");

const port = Number(DB_PORT);
if (!Number.isInteger(port)) {
  throw new Error(`Invalid DB_PORT: ${DB_PORT}`);
}

export const db = new Pool({
  host: DB_HOST,
  port,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
});
