<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-dark transition-colors duration-300">
    <Header />

    <main class="flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style scoped>

</style>
