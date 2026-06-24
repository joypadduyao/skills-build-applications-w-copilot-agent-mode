import express from 'express'
import cors from 'cors'
import healthRouter from './routes/health'
import workoutsRouter from './routes/workouts'

export default function createApp() {
  const app = express()
  app.use(cors())
  app.use(express.json())

  app.use('/health', healthRouter)
  app.use('/api/workouts', workoutsRouter)

  return app
}
