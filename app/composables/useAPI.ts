export const useAPI = () => {
  const token = useCookie<string | null>('auth_token').value
  const config = useRuntimeConfig()
  return createUseFetch({
    baseURL: config.public.apiBase,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
    onResponseError(context) {
      if (context.response.status === 401) {
        console.warn('El token ha caducado o es inválido.')
      }
    },
  })
}
