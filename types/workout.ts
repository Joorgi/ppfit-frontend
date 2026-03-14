import {Exercise} from "./exercise";

export interface Workout {
  id: number
  name: string
  date: string
  notes: string
  workout_exercises: WorkoutExercise[]
}

interface WorkoutExercise {
  exercise: Exercise
  series: number
  repetitions: number
  weight_kg: number
  estimated_1rm: number
}