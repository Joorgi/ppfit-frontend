import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, _) => {
  const authStore = useAuthStore() // Tu store de Pinia

  const publicRoutes = ['/', '/login', '/register']

  if (!publicRoutes.includes(to.path) && !authStore.isAuthenticated) {
    return navigateTo('/login')
  }
})
