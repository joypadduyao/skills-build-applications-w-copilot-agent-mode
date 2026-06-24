import dotenv from 'dotenv'
import http from 'http'
import createApp from './app'
import { connectDB, disconnectDB } from './database'

dotenv.config()

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000

async function start() {
  try {
    await connectDB()

    const app = createApp()
    const server = app.listen(PORT, () => {
      console.log(`OctoFit backend listening on http://localhost:${PORT}`)
    })

    // Graceful shutdown
    const shutdown = async (signal: string) => {
      console.log(`Received ${signal} — closing server and disconnecting from DB`)
      try {
        await new Promise<void>((resolve, reject) => {
          server.close((err?: Error) => {
            if (err) return reject(err)
            resolve()
          })
        })
        await disconnectDB()
        console.log('Shutdown complete')
        process.exit(0)
      } catch (err) {
        console.error('Error during shutdown', err)
        process.exit(1)
      }
    }

    process.on('SIGINT', () => shutdown('SIGINT'))
    process.on('SIGTERM', () => shutdown('SIGTERM'))
  } catch (err) {
    console.error('Failed to start server', err)
    process.exit(1)
  }
}

start()
