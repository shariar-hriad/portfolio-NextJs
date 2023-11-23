import 'next-auth'

declare module 'next-auth' {
    interface User {
        id?: string | null
        name?: string | null
        email?: string | null
    }
}
