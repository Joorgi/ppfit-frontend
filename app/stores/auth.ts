import { defineStore } from 'pinia'
import type { User, UserRegister } from '~~/types'

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
    const config = useRuntimeConfig()

    try {
      const response: any = await $fetch(`${config.public.apiBase}/users/login/`, {
        method: 'POST',
        body: credentials,
      })
      token.value = response.access

      return true
    }
    catch (error) {
      console.error('Error en login:', error)
      throw error
    }
  }

  async function register(credentials: UserRegister): Promise<boolean> {
    const config = useRuntimeConfig()

    try {
      await $fetch(`${config.public.apiBase}/users/register/`, {
        method: 'POST',
        body: credentials,
      })

      return true
    }
    catch (error) {
      console.error('Error en registro:', error)
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
