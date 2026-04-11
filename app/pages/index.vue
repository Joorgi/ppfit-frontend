<script setup lang="ts">

</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-12 flex flex-col items-center">
        <h1 class="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
          Entrena como un <span class="text-primary-500">Profesional</span>
        </h1>
        <p class="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Registra tus rutinas, analiza tu progreso y rompe tus propios récords. Todo desde tu navegador.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 mb-24">
        <div
          class="md:col-span-2 md:row-span-2 bg-gray-900 dark:bg-black rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden shadow-xl border border-gray-800"
        >
          <div
            class="absolute -top-20 -right-20 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 z-10">
            Tu diario de entrenamiento <br> <span class="text-primary-500">inteligente.</span>
          </h2>
          <p class="text-gray-400 mb-8 z-10 text-lg">
            Deja el cuaderno de papel en casa. Lleva el control exacto de tus series, repeticiones y pesos de forma
            digital.
          </p>
          <div class="z-10">
            <UButton
              to="/login"
              color="primary"
              size="xl"
              icon="i-heroicons-bolt"
              class="font-bold"
            >
              Empezar ahora
            </UButton>
          </div>
        </div>

        <div
          class="md:col-span-2 md:row-span-1 bg-white dark:bg-gray-900/50 rounded-3xl p-8 flex flex-col justify-center border border-gray-200 dark:border-gray-800 shadow-sm hover:border-primary-500 transition-colors"
        >
          <UIcon
            name="i-heroicons-chart-bar"
            class="text-4xl text-primary-500 mb-4"
          />
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Estadísticas Avanzadas
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            Visualiza tu evolución en el tiempo. ¿Levantas más peso que hace
            un mes? Aquí lo sabrás al instante.
          </p>
        </div>

        <div
          class="md:col-span-1 md:row-span-1 bg-primary-500 rounded-3xl p-6 flex flex-col items-center justify-center text-center text-white shadow-lg"
        >
          <UIcon
            name="i-heroicons-globe-alt"
            class="text-5xl mb-3 opacity-90"
          />
          <h3 class="font-bold text-lg leading-tight mb-1">
            Bilingüe
          </h3>
          <p class="text-primary-100 text-sm font-medium">
            Español & English
          </p>
        </div>

        <div
          class="md:col-span-1 md:row-span-1 bg-white dark:bg-gray-900/50 rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-gray-200 dark:border-gray-800 shadow-sm hover:border-primary-500 transition-colors"
        >
          <div class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
            <UIcon
              name="i-heroicons-cloud-arrow-up"
              class="text-2xl text-blue-600 dark:text-blue-400"
            />
          </div>
          <h3 class="font-bold text-gray-900 dark:text-white">
            Siempre Online
          </h3>
          <p class="text-sm text-gray-500 mt-1">
            Sincronizado en la nube
          </p>
        </div>

        <div
          class="md:col-span-2 md:row-span-1 bg-white dark:bg-gray-900/50 rounded-3xl p-8 flex flex-col justify-center border border-gray-200 dark:border-gray-800 shadow-sm hover:border-primary-500 transition-colors"
        >
          <UIcon
            name="i-heroicons-clipboard-document-list"
            class="text-4xl text-primary-500 mb-4"
          />
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Libertad Total
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            Crea tus propias rutinas desde cero. Añade los ejercicios que
            quieras, define tus series objetivo y ajusta los descansos.
          </p>
        </div>

        <div
          class="md:col-span-2 md:row-span-1 bg-gray-900 dark:bg-black rounded-3xl p-8 flex flex-col justify-center border border-gray-800 shadow-sm relative overflow-hidden group"
        >
          <div
            class="absolute inset-0 bg-linear-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />

          <UIcon
            name="i-heroicons-sparkles"
            class="text-4xl text-yellow-500 mb-4 z-10"
          />
          <h3 class="text-xl font-bold text-white mb-2 z-10">
            Más nivel. Más resultados.
          </h3>
          <p class="text-gray-400 z-10">
            Muy pronto: Funciones <span
              class="text-primary-500 font-semibold"
            >Premium</span> para los atletas más exigentes. Métricas de fatiga,
            1RM y mucho más.
          </p>
        </div>
      </div>

      <div class="border-t border-gray-200 dark:border-gray-800 pt-16">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Lo que dicen nuestros
          atletas
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            class="bg-white dark:bg-gray-900/50 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col"
          >
            <div class="flex items-center gap-1 mb-4 text-yellow-400">
              <UIcon
                v-for="i in 5"
                :key="i"
                name="i-heroicons-star-solid"
                class="w-5 h-5"
              />
            </div>
            <p class="text-gray-700 dark:text-gray-300 italic mb-8 flex-1 text-lg">
              "He probado mil apps para el gimnasio y todas eran súper complicadas. ppfit va directo al grano.
              Exactamente lo que necesitaba para no perder el tiempo."
            </p>
            <div class="flex items-center gap-4">
              <UAvatar
                src="https://avatars.githubusercontent.com/u/1024025?v=4"
                alt="Carlos R."
                size="lg"
              />
              <div>
                <p class="font-bold text-gray-900 dark:text-white">
                  Carlos R.
                </p>
                <p class="text-sm text-gray-500">
                  Levantador Amateur
                </p>
              </div>
            </div>
          </div>

          <div
            class="bg-white dark:bg-gray-900/50 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col"
          >
            <div class="flex items-center gap-1 mb-4 text-yellow-400">
              <UIcon
                v-for="i in 5"
                :key="i"
                name="i-heroicons-star-solid"
                class="w-5 h-5"
              />
            </div>
            <p class="text-gray-700 dark:text-gray-300 italic mb-8 flex-1 text-lg">
              "Ver mi progreso en las gráficas me motiva muchísimo. Antes me estancaba con los pesos porque no llevaba
              un registro, ahora siempre intento superar mi récord."
            </p>
            <div class="flex items-center gap-4">
              <UAvatar
                src="https://avatars.githubusercontent.com/u/499550?v=4"
                alt="Elena M."
                size="lg"
              />
              <div>
                <p class="font-bold text-gray-900 dark:text-white">
                  Elena M.
                </p>
                <p class="text-sm text-gray-500">
                  Atleta Crossfit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
