import { Schema, model } from 'mongoose'

export interface IWorkout {
  title: string
  description?: string
  durationMinutes?: number
  date?: Date
  createdAt?: Date
}

const WorkoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true },
  description: { type: String },
  durationMinutes: { type: Number },
  date: { type: Date },
  createdAt: { type: Date, default: () => new Date() }
})

export const Workout = model<IWorkout>('Workout', WorkoutSchema)
