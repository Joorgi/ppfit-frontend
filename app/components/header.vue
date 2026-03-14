<script setup lang="ts">
import type {NavigationMenuItem} from '@nuxt/ui'

const route = useRoute()

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

    <UNavigationMenu :items="items"/>

    <template #right>
      <UColorModeButton/>

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
            color="neutral"
            variant="ghost"
            to="https://github.com/nuxt/ui"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5"/>
    </template>
  </UHeader>
</template>
