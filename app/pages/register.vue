<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

const state = reactive({
  username: 'Fsb2quNr4vA3bx+ImA4',
  email: 'user@example.com',
  password: 'string',
  password_confirm: 'string',
  profile: {
    birth_date: '2026-04-11',
    height_cm: 2147483647,
    weight_kg: 0,
    objective: 1,
    timezone: 'Africa/Abidjan',
  },
})
const isLoading = ref(false)
const toast = useToast() // TODO: Pasar a un composable para reutilizarlo

const onSubmit = async () => {
  isLoading.value = true

  try {
    await authStore.register(state)
    toast.add({
      title: 'Éxito',
      description: 'El formulario ha sido enviado.',
      color: 'success',
      icon: 'i-heroicons-check-circle',
    })
    console.log('Registrando atleta:', state)
  }
  catch (e) {
    console.error('Error al registrar atleta:', e)
    toast.add({
      title: 'Error',
      description: 'Ocurrió un error al registrar.',
      color: 'error',
      icon: 'i-heroicons-exclamation-circle',
    })
  }
  finally {
    isLoading.value = false
  }
}
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <div class="h-screen w-screen overflow-hidden relative font-sans">
    <NuxtImg
      src="/login-bg.jpg"
      alt="Fondo de entrenamiento ppfit"
      class="absolute inset-0 h-full w-full object-cover z-0 opacity-60 mix-blend-multiply"
      width="1920"
      height="1080"
    />

    <div class="relative z-10 h-full w-full flex flex-col md:flex-row p-6 md:p-12 lg:p-20">
      <div class="flex-1 flex flex-col justify-start md:justify-center text-white mb-10 md:mb-0">
        <div class="max-w-xl">
          <p class="text-xl md:text-2xl font-light text-gray-200 leading-snug">
            "La mejor forma de predecir tu futuro es <span class="text-primary-500 font-extrabold">entrenándolo</span>."
          </p>
        </div>
      </div>

      <div class="flex-1 flex items-center justify-center md:justify-end">
        <UCard
          class="w-full max-w-md bg-dark/60 backdrop-blur-sm border border-gray-800 shadow-2xl rounded-3xl"
        >
          <div class="mb-10 text-center flex flex-col items-center">
            <NuxtImg
              src="/logo.png"
              alt="ppfit logo"
              width="60"
              height="60"
              class="mb-5 object-contain"
            />
            <h2 class="text-3xl font-extrabold text-white tracking-tight">
              Crea tu cuenta <span class="text-primary-500">gratis</span>
            </h2>
            <p class="text-gray-400 mt-2 text-sm">
              Únete a ppfit y empieza a registrar tus entrenamientos.
            </p>
          </div>

          <UForm
            :state="state"
            class="space-y-6"
            @submit="onSubmit"
          >
            <UFormField
              label="Correo electrónico"
              name="email"
            >
              <UInput
                v-model="state.email"
                type="email"
                placeholder="atleta@ppfit.com"
                size="lg"
                color="primary"
                class="text-white w-full"
              />
            </UFormField>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <UFormField
                label="Contraseña"
                name="password"
              >
                <UInput
                  v-model="state.password"
                  type="password"
                  placeholder="••••••••"
                  size="lg"
                  color="primary"
                  class="text-white w-full"
                />
              </UFormField>

              <UFormField
                label="Confirmar contraseña"
                name="password_confirm"
              >
                <UInput
                  v-model="state.password_confirm"
                  type="password"
                  placeholder="••••••••"
                  size="lg"
                  color="primary"
                  class="text-white w-full"
                />
              </UFormField>
            </div>

            <UFormField
              label="Nombre de usuario"
              name="username"
            >
              <UInput
                v-model="state.username"
                placeholder="Tu nombre"
                size="lg"
                color="primary"
                class="text-white w-full"
              />
            </UFormField>

            <UButton
              type="submit"
              label="Registrarse"
              block
              size="xl"
              color="primary"
              class="font-bold mt-8"
              :loading="isLoading"
            />
          </UForm>

          <template #footer>
            <div class="text-center text-sm text-gray-400">
              ¿Ya tienes cuenta?
              <NuxtLink
                to="/login"
                class="text-primary-500 font-semibold hover:underline"
              >
                Inicia sesión
              </NuxtLink>
            </div>
            <p class="text-center text-xs text-gray-700 mt-4">
              © 2026 ppfit
            </p>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
