import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
	const result =
	  await sql`ALTER TABLE users ADD adress VARCHAR;`;
	return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
	return NextResponse.json({ error }, { status: 500 });
  }
}
