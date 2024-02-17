import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  callbacks: {
    async jwt(token, user) {
      // If the user is logging in, add user information to token payload
      if (user) {
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
  },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY, 
  },
  pages: {
    signIn: "/login",
  },
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
