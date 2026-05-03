<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-dark transition-colors duration-300">
    <Sidebar
      variant="sidebar"
      collapsible="icon"
    >
      <slot />
    </Sidebar>
    <Footer />
  </div>
</template>

<style scoped>

</style>
