import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit'

export async function connectDB(uri?: string): Promise<typeof mongoose> {
  const connectUri = uri || MONGO_URI
  return mongoose.connect(connectUri).then((m) => {
    console.log(`Connected to MongoDB: ${connectUri}`)
    return m
  })
}

export async function disconnectDB(): Promise<void> {
  await mongoose.connection.close()
  console.log('Disconnected from MongoDB')
}

export default mongoose
