import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserFromDb } from "@/lib/action";
const bcrypt = require('bcrypt');

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [ Credentials({
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {

      // logic to verify if user exists
      const user = await getUserFromDb(credentials.email, credentials.password);
      return user;
    },
  }),],
})
