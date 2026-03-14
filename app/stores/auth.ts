import {defineStore} from 'pinia'

// En Nuxt 3 usamos la sintaxis "Setup Store" (como si fuera un componente)
export const useAuthStore = defineStore('auth', () => {

  // 1. STATE
  const token = useCookie<string | null>('auth_token', {
    maxAge: 60 * 60 * 24 * 7,
    watch: true // Si cambia, actualiza el estado en toda la app automáticamente
  })


  const user = ref<any | null>(null)

  // 2. GETTERS
  const isAuthenticated = computed(() => !!token.value)

  // 3. ACTIONS
  async function login(credentials: { email: string; password: string }) {
    const config = useRuntimeConfig()

    try {
      const response: any = await $fetch(`${config.public.apiBase}/users/login/`, {
        method: 'POST',
        body: credentials,
      })

      // Guardamos el token mágico. Al ser un useCookie, Nuxt lo guarda
      // en el navegador automáticamente.
      token.value = response.access

      return true
    } catch (error) {
      console.error('Error en login:', error)
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
    logout
  }
})