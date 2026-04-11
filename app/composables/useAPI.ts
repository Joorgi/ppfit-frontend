export const useAPI = createUseFetch({
  baseURL: useRuntimeConfig().public.apiBase,
  headers: {
    Authorization: useCookie<string | null>('auth_token').value ? `Bearer ${useCookie<string | null>('auth_token').value}` : '',
  },
  onResponseError(context) {
    if (context.response.status === 401) {
      console.warn('El token ha caducado o es inválido.')
    }
  },
})
