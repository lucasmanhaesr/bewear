import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema" 

export const db = drizzle(process.env.DATABASE_URL!, {
    schema: { 
        ...schema,
        user: schema.userTable,
        session: schema.sessionTable,
        account: schema.sessionTable
    }
});
