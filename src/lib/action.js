'use server';

import { sql } from "@vercel/postgres";
import { signIn } from "../../auth";
import { signOut } from "../../auth";
import { redirect } from "next/navigation";
const bcrypt = require('bcrypt');

export async function register(previousState, formData) {
  const { userName, email, passWord, rePassWord } = Object.fromEntries(formData);
  if (!userName || !email || !passWord || !rePassWord) {
	  return {error: "Please fill in all data"};
  }
  const nonAlpha = /^[A-Za-z0-9_]+$/;
  if (!nonAlpha.test(userName)) {
    return {error: "User name should contain only alphanumeric characters and underscores"};
  }
  const eightAtLeast = /^[A-Za-z0-9_]{8,}$/;
  if (!eightAtLeast.test(userName)) {
    return {error: "User-name should contain at least 8 characters"};
  }
  const user = await sql`SELECT * FROM users WHERE username = ${userName};`;
  if (user.rowCount !== 0) {
    return {error: "User-name is already used"};
  }
  const validEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  if (!validEmail.test(email)) {
    return {error: "Please enter a valid e-mail adress"};
  }
  const userEmail = await sql`SELECT * FROM users WHERE email = ${email};`;
  if (userEmail.rowCount !== 0) {
    return {error: "E-mail is already used"};
  }
  const validPassWord = /^[A-Za-z0-9_\-@%#*]+$/;
  if (!validPassWord.test(passWord)) {
    return {error: "Password should contain only alphanumeric and special characters @ % * - _ #"};
  }
  const validPassWordLength = /^[A-Za-z0-9_\-@%#*]{8,32}$/;
  if (!validPassWordLength.test(passWord)) {
    return {error: "Password should be 8 to 32 characters"};
  }
  if (passWord !== rePassWord) {
	  return {error: "Passwords do not match"};
  }
  const salt = await bcrypt.genSalt(10);
  const pwHash = await bcrypt.hash(passWord, salt);
  try {
	await sql`INSERT INTO users (username , password , email) VALUES (${userName}, ${pwHash}, ${email});`;
	return { success: true };
  } catch (error) {
	return {error: "Sorry, something went "};
  }
};

export async function logIn(previousState, formData) {
  const { email, password } = Object.fromEntries(formData);
  if (!email || !password) {
	  return {error: "Both e-mail and password are required"};
  }
  try {
    await signIn("credentials", { email, password });
  } catch (err) {
    if (err.type === "CallbackRouteError") {
      return { error: "Invalid email or password" };
    }
  }
  redirect('/');
}

export async function getUserFromDb(email, password) {
  const user = await sql`SELECT * FROM users WHERE email = ${email};`

  if (user.rowCount !== 1) {
    console.log(user.rowCount);
    throw new Error("User not found.");
  }
  const isPasswordCorrect = await bcrypt.compare(
    password,
    user.rows[0].password
  );

  if (!isPasswordCorrect) throw new Error("Wrong credentials!");
  return user.rows[0];
}

export async function logOut(previousState, formData) {
  await signOut();
}
