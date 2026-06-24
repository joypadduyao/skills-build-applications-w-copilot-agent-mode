import dotenv from 'dotenv'
import { connectDB, disconnectDB } from '../src/database'
import { Workout } from '../src/models/workout'

dotenv.config()

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit'

const sampleWorkouts = [
  { title: 'Morning Run', description: '5km easy run', durationMinutes: 30, date: new Date() },
  { title: 'Strength Training', description: 'Full-body strength session', durationMinutes: 45, date: new Date() },
  { title: 'Yoga Flow', description: 'Mobility and breathing work', durationMinutes: 60, date: new Date() }
]

async function seed() {
  try {
    await connectDB(MONGO_URI)
    console.log('Connected to MongoDB:', MONGO_URI)

    // Clear existing workouts
    await Workout.deleteMany({})
    console.log('Cleared existing workouts')

    const inserted = await Workout.insertMany(sampleWorkouts)
    console.log(`Inserted ${inserted.length} workouts`)

    await disconnectDB()
    console.log('Disconnected from MongoDB')
    process.exit(0)
  } catch (err) {
    console.error('Seeding failed', err)
    process.exit(1)
  }
}

seed()
