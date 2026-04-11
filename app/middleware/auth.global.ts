import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, _) => {
  const authStore = useAuthStore()
  const router = useRouter()

  const publicRoutes = ['/', '/login', '/register']

  const routeExists = router.getRoutes().some(route => route.path === to.path)

  if (!routeExists) {
    return
  }

  if (!publicRoutes.includes(to.path) && !authStore.isAuthenticated) {
    return navigateTo('/login')
  }
})
