'use server';
import { sql } from "@vercel/postgres";

export async function register(previousState, formData) {
  const { userName, email, passWord, rePassWord } = Object.fromEntries(formData);
  if (!userName || !email || !passWord || !rePassWord) {
	return {error: "Please fill in all data"};
  }
  if (passWord !== rePassWord) {
	return {error: "Passwords do not match"};
  }
  try {
	await sql`INSERT INTO users (username , password , email) VALUES (${userName}, ${passWord}, ${email});`;
	return { success: true };
  } catch (error) {
	return {error: "Sorry, something went "};
  }
}
