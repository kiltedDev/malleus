import NextAuth from "next-auth";
import { authOptions } from "@malleus/server/auth";

export default NextAuth(authOptions);
