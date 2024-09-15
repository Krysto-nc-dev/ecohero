import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as shema from "./schema";

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql, { shema });
