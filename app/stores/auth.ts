import { defineStore } from 'pinia'
import type { User, UserRegister, LoginResponse } from '~~/types'

// En Nuxt 4 usamos la sintaxis "Setup Store"
export const useAuthStore = defineStore('auth', () => {
  // 1. STATE
  const token = useCookie<string | null>('auth_token', {
    maxAge: 60 * 60 * 24 * 7, // 7 días
    watch: true,
  })

  const user = ref<User | null>(null)

  // 2. GETTERS
  const isAuthenticated = computed(() => !!token.value)

  // 3. ACTIONS
  async function login(credentials: { email: string, password: string }) {
    try {
      const { data } = await useAPI<LoginResponse>('/users/login/', {
        method: 'POST',
        body: credentials,
      })

      if (data.value) {
        token.value = data.value.access
        await me()
      }
    }
    catch (error: unknown) {
      console.error('Error en login:', error)
      throw error
    }
  }

  async function register(credentials: UserRegister): Promise<boolean> {
    try {
      await useAPI('/users/register/', {
        method: 'POST',
        body: credentials,
      })

      return true
    }
    catch (error: unknown) {
      console.error('Error en registro:', error)
      throw error
    }
  }

  async function me() {
    try {
      const { data } = await useAPI<User>('/users/me/')
      if (data.value) {
        user.value = data.value
      }
    }
    catch (error: unknown) {
      user.value = null
      throw error
    }
  }

  function logout() {
    token.value = null
    user.value = null
  }

  // 4. RETORNO
  return {
    token,
    user,
    isAuthenticated,
    login,
    logout,
    register,
  }
})
