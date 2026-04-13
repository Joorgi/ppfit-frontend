<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
const toaster: {
  duration: number
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  progress: boolean
} = { duration: 2500, position: 'top-right', progress: false }
</script>

<template>
  <UApp
    :locale="locales[locale]"
    :toaster="toaster"
  >
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>
