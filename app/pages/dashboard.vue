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
      <div class="text-center py-10">
        <Icon name="mdi:dumbbell" class="text-6xl text-gray-300 dark:text-gray-700 mb-4"/>
        <h3 class="text-lg font-medium">Aún no hay entrenamientos</h3>
        <p class="text-gray-500 mt-2">Tus rutinas aparecerán aquí cuando las conectemos con Django.</p>
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


const handleLogout = async () => {
  authStore.logout()
  await navigateTo('/login')
}
</script>