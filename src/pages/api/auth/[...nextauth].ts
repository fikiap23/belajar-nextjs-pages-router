import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'credentials',
      credentials: {
        fullname: { label: 'Fullname', type: 'text' },
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password, fullname } = credentials as {
          fullname: string
          email: string
          password: string
        }
        const user: any = {
          id: 1,
          fullname: fullname,
          email: email,
          password: password,
        }
        if (user) {
          // console.log(user)
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, profile, user }: any) {
      if (account?.provider === 'credentials') {
        token.email = user.email
        token.fullname = user.fullname
      }
      // console.log({ token, account, profile, user })
      return token
    },

    async session({ session, token }: any) {
      if ('email' in token) {
        session.user.email = token.email
      }

      if ('fullname' in token) {
        session.user.fullname = token.fullname
      }
      // console.log({ session, token })
      return session
    },
  },
}

export default NextAuth(authOptions)
