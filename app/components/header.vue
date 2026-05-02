<script setup lang="ts">
import { en, es } from '@nuxt/ui/locale'
import { useAuthStore } from '~/stores/auth'
import type { DropdownMenuItem } from '#ui/components/DropdownMenu.vue'

const { locale, setLocale } = useI18n()

const authStore = useAuthStore()
const handleLogout = async () => {
  authStore.logout()
  await navigateTo('/login')
}

const user = computed(() => authStore.user)
const router = useRouter()

const userItems = computed<DropdownMenuItem[][]>(() => [
  [
    {
      label: 'Profile',
      icon: 'i-lucide-user',
    },
    {
      label: 'Settings',
      icon: 'i-lucide-settings',
      to: '/settings',
    },
  ],
  [
    {
      label: 'Appearance',
      icon: 'i-lucide-sun-moon',
      children: [
        {
          label: 'Light',
          icon: 'i-lucide-sun',
          type: 'checkbox',
          checked: useColorMode().preference === 'light',
          onUpdateChecked(checked: boolean) {
            if (checked) {
              useColorMode().preference = 'light'
            }
          },
          onSelect(e: Event) {
            e.preventDefault()
          },
        },
        {
          label: 'Dark',
          icon: 'i-lucide-moon',
          type: 'checkbox',
          checked: useColorMode().value === 'dark',
          onUpdateChecked(checked: boolean) {
            if (checked) {
              useColorMode().preference = 'dark'
            }
          },
          onSelect(e: Event) {
            e.preventDefault()
          },
        },
      ],
    },
  ],
  [

    {
      label: 'Log out',
      icon: 'i-lucide-log-out',
      onSelect: handleLogout,
    },
  ],
])
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink
        to="/"
        class="flex items-center gap-2"
      >
        <NuxtImg
          src="/logo.png"
          alt="Logo ppfit"
          width="60"
          height="60"
        />
        <span class="font-black text-xl tracking-tight text-primary-500">ppfit</span>
      </NuxtLink>
    </template>

    <template #right>
      <div
        v-if="!authStore.isAuthenticated && router.currentRoute.value.name !== 'login'"
        class="flex items-center gap-4"
      >
        <UColorModeButton />

        <ULocaleSelect
          v-model="locale"
          :locales="[en, es]"
          @update:model-value="setLocale(locale)"
        />
      </div>

      <UDropdownMenu
        v-if="authStore.isAuthenticated"
        :items="userItems"
      >
        <UButton
          v-if="authStore.isAuthenticated"
          v-bind="user"
          :label="user?.username"
          trailing-icon="i-lucide-chevron-down"
          color="neutral"
          variant="ghost"
          square
          class="data-[state=open]:bg-elevated overflow-hidden"
        />
      </UDropdownMenu>
    </template>
  </UHeader>
</template>
