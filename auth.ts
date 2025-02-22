import NextAuth from "next-auth"
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db"

const adapter = PrismaAdapter(db);

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter,
    providers: [Google],
})