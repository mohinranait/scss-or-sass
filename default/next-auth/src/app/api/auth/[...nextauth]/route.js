
import User from "@/models/UserModel";
import connectDb from "@/utils/db";
import NextAuth from "next-auth"
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        name: "credentials",
      
        credentials: {
          email: { label: "email", type: "email"},
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {

            const {email,password} = credentials;
            connectDb();

            // find user by  email from login page
            const matchUser = await User.findOne({email});
            if(!matchUser){
                return null;
            }

            // match password
            const matchPassword = await bcrypt.compare(password, matchUser?.password)
            if(!matchPassword){
                return null
            }
    
            const user = await User.findOne({email}).select("-password");
            console.log("user from router:", user);
            return user
          
        }
    })
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST};
