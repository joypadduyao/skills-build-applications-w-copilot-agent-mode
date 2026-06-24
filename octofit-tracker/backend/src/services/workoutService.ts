import { Workout, IWorkout } from '../models/workout'
import { Types } from 'mongoose'

export async function createWorkout(payload: Partial<IWorkout>) {
  const doc = new Workout(payload)
  return await doc.save()
}

export async function getAllWorkouts() {
  return await Workout.find().sort({ createdAt: -1 }).exec()
}

export async function getWorkoutById(id: string) {
  if (!Types.ObjectId.isValid(id)) return null
  return await Workout.findById(id).exec()
}

export async function updateWorkout(id: string, payload: Partial<IWorkout>) {
  if (!Types.ObjectId.isValid(id)) return null
  return await Workout.findByIdAndUpdate(id, payload, { new: true }).exec()
}

export async function deleteWorkout(id: string) {
  if (!Types.ObjectId.isValid(id)) return null
  const res = await Workout.findByIdAndDelete(id).exec()
  return res
}
