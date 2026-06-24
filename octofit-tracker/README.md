# OctoFit Tracker

This repository contains a starter scaffold for the OctoFit Tracker multi-tier application.

- Frontend: React 19 + Vite (port 5173)
- Backend: Node.js + Express + TypeScript + Mongoose (port 8000)
- MongoDB: default localhost port 27017 (database: octofit)

Getting started locally

1. Checkout the branch:
   git fetch origin
   git checkout build-octofit-app

2. Frontend
   cd octofit-tracker/frontend
   npm install
   npm run dev
   Open http://localhost:5173

3. Backend
   cd ../../octofit-tracker/backend
   npm install
   cp .env.example .env
   npm run dev
   Backend will run on http://localhost:8000

Notes

- Ports are pinned: frontend 5173, backend 8000, MongoDB 27017.
- The backend connects to MongoDB using MONGO_URI (defaults to mongodb://localhost:27017/octofit).
