<template>
  <div class="flex items-start justify-center pt-16">
    <UCard
      class="w-full max-w-lg ring-0 bg-gray-50 dark:bg-dark"
    >
      <template #header>
        <div class="text-center">
          <NuxtImg
            src="/logo.png"
            alt="Logo ppfit"
            width="80"
            height="80"
            class="mx-auto"
          />
          <h2 class="text-2xl font-bold">
            {{ $t('auth.login_title') }}
          </h2>
        </div>
      </template>

      <form
        class="space-y-4"
        @submit.prevent="handleLogin"
      >
        <UFormField
          :label="$t('auth.email')"
          name="email"
          size="xl"
        >
          <UInput
            v-model="credentials.email"
            icon="i-heroicons-at-symbol"
            placeholder="Introduce tu email"
            class="w-full"
          />
        </UFormField>

        <UFormField
          :label="$t('auth.password')"
          name="password"
          size="xl"
        >
          <UInput
            v-model="credentials.password"
            type="password"
            icon="i-heroicons-lock-closed"
            placeholder="••••••••"
            class="w-full"
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
      <template #footer>
        <div class="text-center text-gray-500">
          ¿No tienes cuenta?
          <NuxtLink
            to="/register"
            class="text-primary-500 hover:underline"
          >Regístrate
          </NuxtLink>
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

const credentials = reactive({
  email: 'ppfit@admin.com', // Borrar
  password: 'ppfit', // Borrar
})

definePageMeta({
  layout: 'blank',
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
  }
  catch (error: unknown) {
    // Si falla (401 Unauthorized, etc), mostramos el error
    errorMessage.value = 'Usuario o contraseña incorrectos.'
    console.error('Detalle del error:', error)
  }
  finally {
    isLoading.value = false
  }
}
</script>
