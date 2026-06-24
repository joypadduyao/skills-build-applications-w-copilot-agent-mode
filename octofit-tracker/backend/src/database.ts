import mongoose from 'mongoose'

const DEFAULT_URI = 'mongodb://localhost:27017/octofit'

export async function connectDB(uri?: string): Promise<typeof mongoose> {
  const connectUri = uri || process.env.MONGO_URI || DEFAULT_URI

  // Connection event logging
  mongoose.connection.on('connected', () => console.log('Mongoose connected'))
  mongoose.connection.on('error', (err) => console.error('Mongoose connection error:', err))
  mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'))

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
