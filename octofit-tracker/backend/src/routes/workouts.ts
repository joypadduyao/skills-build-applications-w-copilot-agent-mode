import { Router } from 'express'
import * as controller from '../controllers/workoutController'

const router = Router()

// CRUD for workouts
router.get('/', controller.listWorkouts)
router.post('/', controller.createWorkout)
router.get('/:id', controller.getWorkout)
router.put('/:id', controller.updateWorkout)
router.delete('/:id', controller.deleteWorkout)

export default router
