import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import mongoose from "mongoose"
import UserModel from "@/models/UserModel"
import connectDB from "@/connectDB/db"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

      //Connect To DB
      await connectDB();

      //Check DB If User There
      let User = await UserModel.findOne({ email: user.email })

      if (!User) {

        //Create An New User

        const newUser = new UserModel({

          email: user.email,
          userName: user.email.split('@')[0],
        })

        await newUser.save()

      }

      return true
    }
  },
  async session({ session, user, token }) {

    let dbUser = await UserModel.findOne({ email: session.user.email })
    session.user.name = dbUser.userName

    return session
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }