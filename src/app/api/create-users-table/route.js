import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
	const result =
	  await sql`CREATE TABLE IF NOT EXISTS "users" ( username VARCHAR(256) NOT NULL, password VARCHAR(256) NOT NULL, email VARCHAR(256) NOT NULL, userorders INT);`;
	return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
	return NextResponse.json({ error }, { status: 500 });
  }
}
