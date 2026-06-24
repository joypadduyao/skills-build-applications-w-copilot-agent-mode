import dotenv from 'dotenv'
import createApp from './app'
import { connectDB } from './database'

dotenv.config()

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000

async function start() {
  try {
    await connectDB()

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
