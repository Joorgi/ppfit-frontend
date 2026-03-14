export interface Exercise {
  id: number
  name: string
  description: string
  muscle_group: string
  category: ExerciseCategory
}

interface ExerciseCategory {
  id: number
  name: string
}