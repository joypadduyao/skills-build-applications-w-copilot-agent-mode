#!/usr/bin/env node
/*
  Seed script for OctoFit backend (moved to src/scripts)

  Usage:
    - from octofit-tracker/backend:
      npm run seed

  Behavior:
    - Connects to MongoDB (MONGO_URI or mongodb://localhost:27017/octofit_db)
    - Clears the workouts collection and inserts 3 sample workouts
    - Logs progress and exits
*/

import dotenv from 'dotenv'
import { connectDB, disconnectDB } from '../config/database'
import { Workout } from '../models/workout'

dotenv.config()

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit_db'

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
