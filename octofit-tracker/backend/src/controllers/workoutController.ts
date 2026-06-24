import { Request, Response } from 'express'
import * as workoutService from '../services/workoutService'

export async function createWorkout(req: Request, res: Response) {
  try {
    const payload = req.body
    const workout = await workoutService.createWorkout(payload)
    res.status(201).json(workout)
  } catch (err: any) {
    console.error(err)
    // Handle Mongoose validation errors as 400 (client error)
    if (err && err.name === 'ValidationError') {
      return res.status(400).json({ error: 'Validation failed', details: err.errors })
    }
    res.status(500).json({ error: 'Failed to create workout' })
  }
}

export async function listWorkouts(req: Request, res: Response) {
  try {
    const workouts = await workoutService.getAllWorkouts()
    res.json(workouts)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch workouts' })
  }
}

export async function getWorkout(req: Request, res: Response) {
  try {
    const { id } = req.params
    const workout = await workoutService.getWorkoutById(id)
    if (!workout) return res.status(404).json({ error: 'Workout not found' })
    res.json(workout)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch workout' })
  }
}

export async function updateWorkout(req: Request, res: Response) {
  try {
    const { id } = req.params
    const payload = req.body
    const updated = await workoutService.updateWorkout(id, payload)
    if (!updated) return res.status(404).json({ error: 'Workout not found' })
    res.json(updated)
  } catch (err: any) {
    console.error(err)
    // Handle validation errors from Mongoose
    if (err && err.name === 'ValidationError') {
      return res.status(400).json({ error: 'Validation failed', details: err.errors })
    }
    res.status(500).json({ error: 'Failed to update workout' })
  }
}

export async function deleteWorkout(req: Request, res: Response) {
  try {
    const { id } = req.params
    const deleted = await workoutService.deleteWorkout(id)
    if (!deleted) return res.status(404).json({ error: 'Workout not found' })
    res.status(204).send()
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to delete workout' })
  }
}
