import NextAuth from 'next-auth'
import {MongoDBAdapter} from '@next-auth/mongodb-adapter';

import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { clientPromise } from '@/lib/mongodb';


export const authOptions = {
  providers: [
    // OAuth authentication providers...

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  // callbacks: {
  //   session: ({session, token, user}) => {
  //     if(adminEmails.includes(session?.user?.email))
  //     {
  //       return session;
  //     }
  //     else
  //     {
  //       return false;
  //     }
  //   }
  // }
}

export default NextAuth(authOptions);