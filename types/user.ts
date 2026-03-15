export interface User {
  id: number
  username: string
  email: string
  profile: Profile
  first_name: string | null
  last_name: string | null
  date_joined: string
}

interface Profile {
  birth_date: string
  height_cm: number
  weight_kg: number
  objective: number
  timezone: string
  bmi: number
}
