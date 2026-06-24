#!/usr/bin/env node
/*
  Seed script for OctoFit backend (moved to src/scripts)

  Purpose:
  - Populate the workouts collection with example data for local development and testing.
  - WARNING: This script is destructive for the workouts collection — it deletes existing workout documents before inserting sample data. Do NOT run this against a production database.

  Usage:
  - From the octofit-tracker/backend directory:
      npm run seed
  - Or run directly with ts-node:
      npx ts-node src/scripts/seed.ts

  Environment:
  - The script reads MONGO_URI from process.env (dotenv is loaded). Default: mongodb://localhost:27017/octofit_db
  - To use a custom DB, set MONGO_URI in a .env file or the environment.

  Behavior & Output:
  - Connects to MongoDB (MONGO_URI or default)
  - Deletes all documents in the workouts collection
  - Inserts 3 sample workouts
  - Logs the connection URI, number of inserted documents, and any errors, then disconnects and exits
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

    // Clear existing workouts (destructive)
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
