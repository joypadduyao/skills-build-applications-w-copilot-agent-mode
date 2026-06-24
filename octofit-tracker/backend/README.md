# OctoFit Backend

This directory contains the backend for the OctoFit Tracker (Node + Express + TypeScript).

## Seed script

A convenience script seeds example workout data into the MongoDB database.

- Location: `src/scripts/seed.ts` (there is a small shim at `scripts/seed.ts` that forwards to the new location)
- NPM script: `npm run seed` (runs `ts-node src/scripts/seed.ts`)
- Default database: `mongodb://localhost:27017/octofit_db`
- Override DB: set `MONGO_URI` in a `.env` file (copy `.env.example` and edit as needed)

Usage (from the `octofit-tracker/backend` directory):

1. Install deps

   npm install

2. Ensure MongoDB is running (local `mongod` or Docker):

   docker run --name octofit-mongo -p 27017:27017 -d mongo:7

3. Prepare env file and run the seed:

   cp .env.example .env
   # edit .env if you want a custom MONGO_URI
   npm run seed

Expected output:
- Connected to MongoDB: <URI>
- Cleared existing workouts
- Inserted 3 workouts
- Disconnected from MongoDB

After seeding, start the backend (`npm run dev`) and verify the API at `http://localhost:8000/api/workouts`.
