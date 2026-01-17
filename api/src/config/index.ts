import { Pool } from "pg";

export const db = new Pool({
  host: "localhost",
  port: 5433,
  user: "postgres",
  password: "postgres",
  database: "raveline",
});
