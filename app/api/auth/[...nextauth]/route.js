import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { connectToDB } from '@utils/database';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {
            // serverLess -> Lamda -> dynamodb4
            await connectToDB();

            // check if a user already exist

            // if not, create a new user

            return true;
        } catch (error) {

        }
    }
});

export { handler as GET, handler as POST }