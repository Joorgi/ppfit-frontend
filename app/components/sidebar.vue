<script setup lang="ts">
import type { NavigationMenuItem, SidebarProps } from '@nuxt/ui'
import { useAuthStore } from '~/stores/auth'
import type { DropdownMenuItem } from '#ui/components/DropdownMenu.vue'

// Ignore the props for the example
defineProps<Pick<SidebarProps, 'variant' | 'collapsible' | 'side'>>()

const open = ref(true)
const user = computed(() => authStore.user)

const authStore = useAuthStore()
const handleLogout = async () => {
  authStore.logout()
  await navigateTo('/login')
}

const items: NavigationMenuItem[] = [
  {
    label: 'Home',
    icon: 'i-lucide-house',
    active: true,
  },
  {
    label: 'Inbox',
    icon: 'i-lucide-inbox',
    badge: '4',
  },
  {
    label: 'Contacts',
    icon: 'i-lucide-users',
  },
]

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
  <div
    class="flex flex-1"
    :class="[
      variant === 'inset' && 'bg-neutral-50 dark:bg-neutral-950',
      side === 'right' && 'flex-row-reverse',
    ]"
  >
    <USidebar
      v-model:open="open"
      title="Sidebar"
      rail
      :variant="variant"
      :collapsible="collapsible"
      :side="side"
      :ui="{
        container: 'h-full',
      }"
    >
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{ link: 'p-1.5 overflow-hidden' }"
      />
    </USidebar>

    <div
      class="flex-1 flex flex-col overflow-hidden lg:peer-data-[variant=floating]:my-4 peer-data-[variant=inset]:m-4 lg:peer-data-[variant=inset]:not-peer-data-[collapsible=offcanvas]:ms-0 peer-data-[variant=inset]:rounded-xl peer-data-[variant=inset]:shadow-sm peer-data-[variant=inset]:ring peer-data-[variant=inset]:ring-default bg-default"
    >
      <div
        class="h-(--ui-header-height) shrink-0 flex items-center justify-between px-4"
        :class="[
          variant !== 'floating' && 'border-b border-default',
          side === 'right' && 'justify-end',
        ]"
      >
        <UButton
          :icon="side === 'left' ? 'i-lucide-panel-left' : 'i-lucide-panel-right'"
          color="primary"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />

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
      </div>

      <div class="flex-1 p-4">
        <slot />
      </div>
    </div>
  </div>
</template>
