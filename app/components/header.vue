<script setup lang="ts">
import { en, es } from '@nuxt/ui/locale'

const { locale, setLocale } = useI18n()
</script>

<template>
  <UHeader>
    <template #title>
      <div
        class="flex items-center gap-2"
      >
        <NuxtImg
          src="/logo.png"
          alt="Logo ppfit"
          width="60"
          height="60"
        />
        <span class="font-black text-xl tracking-tight text-primary-500">ppfit</span>
      </div>
    </template>

    <template #right>
      <div
        class="flex items-center gap-4"
      >
        <UColorModeButton />

        <ULocaleSelect
          v-model="locale"
          :locales="[en, es]"
          @update:model-value="setLocale(locale)"
        />
      </div>
    </template>
  </UHeader>
</template>
