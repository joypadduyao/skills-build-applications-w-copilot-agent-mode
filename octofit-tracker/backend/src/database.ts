import mongoose from 'mongoose'

const DEFAULT_URI = 'mongodb://localhost:27017/octofit'

export async function connectDB(uri?: string): Promise<typeof mongoose> {
  const connectUri = uri || process.env.MONGO_URI || DEFAULT_URI
  return mongoose.connect(connectUri).then((m) => {
    console.log(`Connected to MongoDB: ${connectUri}`)
    return m
  })
}

export async function disconnectDB(): Promise<void> {
  await mongoose.disconnect()
  console.log('Disconnected from MongoDB')
}

export default mongoose
