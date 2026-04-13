// const config = useRuntimeConfig()
// const token = useCookie<string | null>('auth_token')
//
// export const useAPI = createUseFetch({
//   baseURL: config.public.apiBase,
//   headers: {
//     Authorization: token.value ? `Bearer ${token.value}` : '',
//   },
// })

import type { UseFetchOptions } from '#app'

export function useAPI<T = any>(
  request: string | (() => string),
  opts?: UseFetchOptions<T>,
) {
  const config = useRuntimeConfig()
  const token = useCookie<string | null>('auth_token')

  const options: UseFetchOptions<T> = {
    baseURL: config.public.apiBase,
    ...opts,
    headers: {
      Authorization: token.value ? `Bearer ${token.value}` : '',
      ...opts?.headers,
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
  }
  return useFetch<T>(request, options as any)
}
