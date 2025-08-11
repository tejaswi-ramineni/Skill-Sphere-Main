import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { email, name } = await req.json();

    //if user alredy exist?
    const users = await db.select().from(usersTable)
        .where(eq(usersTable.email, email));

    // If not then insert new user
    if (users?.length == 0) {
        const result = await db.insert(usersTable).values({
            name: name,
            email: email
        }).returning(usersTable);

        // console.log(result);
        return NextResponse.json(result)
    }


    return NextResponse.json(users[0])
}