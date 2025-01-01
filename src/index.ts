import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(String(connectionString), { prepare: false });
export const db = drizzle(client);

// export const allUsers = await db.select().from(schema.users); //From Each Hooks
