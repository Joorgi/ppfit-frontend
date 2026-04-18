export const useAPI = createUseFetch({
  onRequest({ options }) {
    const config = useRuntimeConfig()
    const token = useCookie<string | null>('auth_token')

    options.baseURL = config.public.apiBase
    options.headers = new Headers(options.headers)

    if (token.value) {
      options.headers.set('Authorization', `Bearer ${token.value}`)
    }
  },
  onResponseError(context) {
    if (context.response.status === 401) {
      console.warn('El token ha caducado o es inválido.')
    }
  },
  onResponse(context) {
    if (context.response.status === 200) {
      console.log('Respuesta exitosa')
    }
  },
})
