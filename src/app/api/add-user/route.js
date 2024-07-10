import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  try {
	await sql`ALTER TABLE my_table RENAME TO menu;`;
  } catch (error) {
	return NextResponse.json({ error: error.message  }, { status: 500 });
  }

}
