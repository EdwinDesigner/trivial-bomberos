<template>
  <ion-page>
    <div class="h-screen bg-bombero-400">
      <div class="relative h-full">
        <div class="absolute z-10 w-full px-4">
          <h2 class="m-0 mt-28 mx-auto max-w-48 text-bombero-50 text-center text-4xl font-black">Selecciona un modo</h2>
          <div class="grid grid-cols-12 h-[calc(100vh-144px)] gap-4 py-8">
            <div class="col-span-6 bg-bombero-50 min-h-max rounded-2xl mb-24">
              <div class="p-2 flex flex-col justify-between h-full" :style="{
                  backgroundImage: 'url(/images/ruleta-selec-game.png)',
                  backgroundSize: 'cover',
                  backgroundPositionX: '-20px'
                }"
              >
                <div></div>
                <v-btn
                  elevation="0"
                  color="#BF2121"
                  class="bg-bombero-800 text-bombero-50 font-black p-4 rounded-lg w-full"
                >
                  Con Tablero
                </v-btn>
              </div>
            </div>
            <div class="col-span-6 bg-bombero-50 min-h-max rounded-2xl mb-24">
              <div class="p-2 flex flex-col justify-between h-full" :style="{
                  backgroundImage: 'url(/images/preguntas-select-game.png)',
                  backgroundSize: 'contain',
                  backgroundPositionX: '32px',
                  backgroundPositionY: '48px'
                }"
              >
                <div></div>
                <v-btn
                  elevation="0"
                  color="#BF2121"
                  class="bg-bombero-800 text-bombero-50 font-black p-4 rounded-lg w-full"
                  @click="router.push({ name: 'historial' })"
                >
                  Sin Tablero
                </v-btn>
              </div>
            </div>
          </div>
        </div>
        <img src="/images/objetivo-bombero.png" alt="red city" class="absolute z-[1] left-2/4 -translate-x-2/4 bottom-0 object-contain opacity-30">
        <img src="/images/red-city.png" alt="red city" class="absolute z-0 top-5 w-full">
        <div class="bg-[#E33E3E] w-full h-[75%] lg:h-[50%] absolute bottom-0 z-0"></div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
  import { IonPage } from '@ionic/vue'
  import { useRouter } from 'vue-router'

  export default {
    components: {
      IonPage,
    },
    setup() {
      const router = useRouter()

      return {
        router
      }
    },
    methods: {
    },
    async mounted() {
    }
  };
</script>