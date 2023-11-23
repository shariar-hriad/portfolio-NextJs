import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'Enter your name...',
                },
                password: { label: 'Passwrod', type: 'password' },
            },
            async authorize(credentials, req) {
                console.log(credentials)
                console.log(req)
                // Add logic here to look up the user from the credentials supplied
                const user = {
                    id: '1',
                    name: 'J Smith',
                    email: 'jsmith@example.com',
                }

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        }),
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// GithubProvider({
//     clientId: process.env.GITHUB_ID as string,
//     clientSecret: process.env.GITHUB_SECRET as string,
// }),
