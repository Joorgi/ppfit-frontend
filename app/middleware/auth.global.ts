import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(async (to, _) => {
  const authStore = useAuthStore()
  const token = useCookie<string | null>('auth_token')
  const router = useRouter()

  if (token.value && !authStore.user) {
    try {
      await authStore.me()
    }
    catch (e) {
      token.value = null
      return
    }
  }

  const publicRoutes = ['/', '/login', '/register']

  const routeExists = router.getRoutes().some(route => route.path === to.path)

  if (!routeExists) {
    return
  }

  if (!publicRoutes.includes(to.path) && !authStore.isAuthenticated) {
    return navigateTo('/login')
  }
})
