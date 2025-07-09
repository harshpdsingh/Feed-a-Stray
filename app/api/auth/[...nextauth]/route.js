import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

import connectDb from "@/db/connectDb";
import Admin from "@/models/Admin";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: false,

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      await connectDb();
      const existingAdmin = await Admin.findOne({ email: user.email });

      if (!existingAdmin && user.email === process.env.ADMIN_EMAIL) {
        await Admin.create({
          name: user.name,
          email: user.email,
          username: user.name.toLowerCase().replace(/\s+/g, ""),
          razorpayid: process.env.RAZORPAY_ID,
          razorpaysecret: process.env.RAZORPAY_SECRET,
        });

        // ✅ Tag user as admin so we know in jwt() it's just been created
        user.isAdmin = true;
      }

      return true;
    },

    async jwt({ token, user }) {
      await connectDb();

      // ✅ First login: user is present (just logged in), use its tag
      if (user?.isAdmin !== undefined) {
        token.isAdmin = user.isAdmin;
      } else {
        // ✅ Later sessions: user is undefined, fetch from DB
        const admin = await Admin.findOne({ email: token.email });
        token.isAdmin = !!admin;
      }

      return token;
    },

    async session({ session, token }) {
      session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
