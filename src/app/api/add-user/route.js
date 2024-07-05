import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  const { searchParams } = new URL(request.url);
  const userName = searchParams.get('userName');
  const email = searchParams.get('email');
  const passWord = searchParams.get('passWord');
  const rePassWord = searchParams.get('rePassWord');
  try {
	if (!userName || !email || !passWord || !rePassWord) throw new Error('Please fill in all required data')
	await sql`;`;
  } catch (error) {
	return NextResponse.json({ error }, { status: 500 });
  }
  const users = await sql`;`;
  return NextResponse.redirect(`http://localhost:3000/register`);
}
