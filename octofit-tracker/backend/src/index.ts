import dotenv from 'dotenv'
import mongoose from 'mongoose'
import createApp from './app'

dotenv.config()

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit'

async function start() {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('Connected to MongoDB')

    const app = createApp()
    app.listen(PORT, () => {
      console.log(`OctoFit backend listening on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error('Failed to start server', err)
    process.exit(1)
  }
}

start()
