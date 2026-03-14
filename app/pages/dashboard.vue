<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">{{ $t('dashboard.title') }}</h1>
        <p class="text-gray-500 mt-1">{{ $t('dashboard.welcome') }}</p>
      </div>

      <UButton
          color="error"
          variant="soft"
          icon="i-heroicons-arrow-right-on-rectangle"
          @click="handleLogout"
      >
        {{ $t('dashboard.logout') }}
      </UButton>
    </div>

    <UCard>
      <div v-if="pending" class="text-center py-10">
        <UIcon name="i-heroicons-arrow-path" class="animate-spin text-4xl text-primary-500 mb-4"/>
        <p>Cargando tus entrenamientos...</p>
      </div>

      <div v-else-if="error" class="text-center py-10 text-red-500">
        <UIcon name="i-heroicons-exclamation-triangle" class="text-4xl mb-4"/>
        <p>Error al conectar con el servidor.</p>
      </div>

      <div v-else-if="entrenamientos" class="p-4">
        <h3 class="font-bold mb-4">Datos recibidos de Django:</h3>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded text-xs overflow-auto">{{ entrenamientos }}</pre>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from '~/stores/auth'


definePageMeta({
  middleware: 'auth'
})

const authStore = useAuthStore()

const {data: entrenamientos, pending, error} = await useApiFetch('/workouts/')


const handleLogout = async () => {
  authStore.logout()
  await navigateTo('/login')
}
</script>