import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";


export async function GET(request) {
  const session = await auth();
	if (request.session.token === session.token) {
	try {
		const result = await sql`SELECT * FROM users;`;
		const users = result.rows;
		return NextResponse.json({ users }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
  } else {
	return NextResponse.json({ error }, { status: 500 });
  }
}
