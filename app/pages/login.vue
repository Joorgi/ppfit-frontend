<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
    <UCard class="w-full max-w-md">

      <template #header>
        <div class="text-center">
          <Icon name="mdi:weight-lifter" class="text-4xl text-primary-500 mb-2"/>
          <h2 class="text-2xl font-bold">{{ $t('auth.login_title') }}</h2>
        </div>
      </template>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <UFormField :label="$t('auth.email')" name="email">
          <UInput
              v-model="credentials.email"
              icon="i-heroicons-at-symbol"
              placeholder="Introduce tu email"
          />
        </UFormField>

        <UFormField :label="$t('auth.password')" name="password">
          <UInput
              v-model="credentials.password"
              type="password"
              icon="i-heroicons-lock-closed"
              placeholder="••••••••"
          />
        </UFormField>

        <UAlert
            v-if="errorMessage"
            color="error"
            variant="subtle"
            :title="errorMessage"
        />

        <UButton
            type="submit"
            color="primary"
            block
            class="mt-6"
            :loading="isLoading"
        >
          Iniciar Sesión
        </UButton>
      </form>

    </UCard>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
import {useAuthStore} from '~/stores/auth'

const authStore = useAuthStore()


const credentials = reactive({
  email: 'ppfit@admin.com', // Borrar
  password: 'ppfit' // Borrar
})

const isLoading = ref(false)
const errorMessage = ref('')


const handleLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    // Llamamos a la acción de Pinia que definimos antes
    await authStore.login(credentials)

    // Si llegamos aquí, el login fue un éxito
    alert('¡Login correcto! Revisa tus cookies en el navegador.')

    // Más adelante descomentaremos esto para ir a la app:
    await navigateTo('/dashboard')
  } catch (error: any) {
    // Si falla (401 Unauthorized, etc), mostramos el error
    errorMessage.value = 'Usuario o contraseña incorrectos.'
    console.error('Detalle del error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>