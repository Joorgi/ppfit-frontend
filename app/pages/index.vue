<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <UCard class="w-96 text-center">
      <Icon name="mdi:rocket-launch" class="text-6xl text-primary-500 mb-4"/>
      <h1 class="text-2xl font-bold mb-2">¡Instalación Limpia!</h1>
      <p class="text-gray-500 mb-6">Tailwind, Nuxt UI y Pinia listos para la acción.</p>
      <UButton @click=" async ()  => {await navigateTo('/login')}" color="primary" block>Comenzar ppfit</UButton>
    </UCard>
  </div>
</template>

<style scoped>

</style>