import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";


export async function GET(request) {
  const session = await auth();
	if (session?.user?.admin) {
	try {
		const result = await sql`;`;
		const users = result.rows;
		return NextResponse.json({ users }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
  } else {
	return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
	const { id } = params;
	const session = await auth();
	  if (session?.user?.admin) {
	  try {
		  await sql`DELETE FROM orders WHERE id = ${id};`;
		  return NextResponse.json("Order delelted");
	  } catch (error) {
		  return NextResponse.json({ error }, { status: 500 });
	  }
	} else {
	  return NextResponse.json({ error }, { status: 500 });
	}
  }