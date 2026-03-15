<script setup lang="ts">
import type {NavigationMenuItem} from '@nuxt/ui'
import {en, es} from '@nuxt/ui/locale'

const route = useRoute()

const {locale, setLocale} = useI18n()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Docs',
    to: '/docs/getting-started',
    icon: 'i-heroicons-book-open',
    active: route.path.startsWith('/docs/getting-started')
  },
  {
    label: 'Components',
    to: '/docs/components',
    icon: 'i-heroicons-cube',
    active: route.path.startsWith('/docs/components')
  },
  {
    label: 'Figma',
    to: 'https://go.nuxt.com/figma-ui',
    target: '_blank'
  },
  {
    label: 'Releases',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank'
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2">
        <NuxtImg
            src="/logo.png"
            alt="Logo ppfit"
            width="60"
            height="60"
        />
        <span class="font-black text-xl tracking-tight text-primary-500">ppfit</span>
      </NuxtLink>
    </template>

<!--    <UNavigationMenu :items="items"/>-->

    <template #right>
      <UColorModeButton/>

      <ULocaleSelect
          v-model="locale"
          :locales="[en, es]"
          @update:modelValue="setLocale(locale)"
      />
    </template>

<!--    <template #body>-->
<!--      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5"/>-->
<!--    </template>-->
  </UHeader>
</template>
