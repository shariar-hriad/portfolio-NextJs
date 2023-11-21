import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
    const uri: string | undefined = process.env.MONGODB_URI!

    if (isConnected) {
        return
    }

    try {
        await mongoose.connect(uri)
        isConnected = true
        console.log('Connected to DB')
    } catch (error) {
        console.log(error)
    }
}
