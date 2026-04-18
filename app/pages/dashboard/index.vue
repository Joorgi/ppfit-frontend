<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">
          {{ $t('dashboard.title') }}
        </h1>
        <p class="text-gray-500 mt-1">
          {{ $t('dashboard.welcome') }}
        </p>
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
      <div
        v-if="pending"
        class="text-center py-10"
      >
        <UIcon
          name="i-heroicons-arrow-path"
          class="animate-spin text-4xl text-primary-500 mb-4"
        />
        <p>Cargando tus entrenamientos...</p>
      </div>

      <div
        v-else-if="error || !worwouts"
        class="text-center py-10 text-red-500"
      >
        <UIcon
          name="i-heroicons-exclamation-triangle"
          class="text-4xl mb-4"
        />
        <p>Error al conectar con el servidor.</p>
      </div>

      <div
        v-else-if="worwouts && worwouts.results.length === 0"
        class="text-center py-10 text-gray-500"
      >
        <p>No tienes entrenamientos registrados.</p>
      </div>

      <div
        v-if="worwouts && worwouts.results.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <UCard
          v-for="rutina in worwouts.results"
          :key="rutina.id"
        >
          <template #header>
            <h3 class="text-lg font-bold text-primary-500">
              {{ rutina.name }}
            </h3>
            <p class="text-sm text-gray-500">
              {{ rutina.date }}
            </p>
          </template>

          <ul>
            <li
              v-for="ej in rutina.workout_exercises"
              :key="ej.exercise.id"
            >
              {{ ej.exercise.name }} - {{ ej.series }}x{{ ej.repetitions }} ({{ ej.weight_kg }}kg)
            </li>
          </ul>
        </UCard>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import type { Pagination, Workout } from '~~/types'

const authStore = useAuthStore()

const { data: worwouts, pending, error } = await useAPI<Pagination<Workout>>('/workouts/')

const handleLogout = async () => {
  authStore.logout()
  await navigateTo('/login')
}

const getWorkouts = async () => {
  try {
    const response = await useAPI<Pagination<Workout>>('/workouts/')
    return response.data
  }
  catch (error) {
    console.error('Error fetching workouts:', error)
    throw error
  }
}
</script>
