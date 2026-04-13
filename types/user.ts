export interface User {
  id?: number
  username: string
  email: string
  profile: Profile
  first_name: string | null
  last_name: string | null
  date_joined: string
}

export interface UserRegister extends Omit<User, 'id' | 'date_joined' | 'first_name' | 'last_name'> {
  password: string
  password_confirm: string
  profile: Profile
}

interface Profile {
  birth_date: string
  height_cm: number
  weight_kg: number
  objective: number
  timezone: string
  bmi?: number
}
