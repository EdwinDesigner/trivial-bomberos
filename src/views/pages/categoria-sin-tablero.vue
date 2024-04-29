<template>
  <ion-page>
    <div class="h-[calc(100vh-20px)] bg-bombero-400">
      <div class="relative h-full">
      
        <!-- bottom bar -->
        <div class="absolute bottom-0 left-0 w-full px-6 py-2 z-50 bg-gradient-to-t from-[#CE3333] to-[#F94848] rounded-t-2xl flex justify-between gap-2 items-center">
          <router-link :to="{ name: 'game-mode', params: {} }">
            <v-btn icon="" rounded="lg" color="#F94848" elevation="0">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 3.75C6.50544 3.75 5.55161 4.14509 4.84835 4.84835C4.14509 5.55161 3.75 6.50544 3.75 7.5V22.5C3.75 23.4946 4.14509 24.4484 4.84835 25.1517C5.55161 25.8549 6.50544 26.25 7.5 26.25H22.5C23.4946 26.25 24.4484 25.8549 25.1517 25.1517C25.8549 24.4484 26.25 23.4946 26.25 22.5V7.5C26.25 6.50544 25.8549 5.55161 25.1517 4.84835C24.4484 4.14509 23.4946 3.75 22.5 3.75H7.5ZM12.5 10C12.5 9.66848 12.6317 9.35054 12.8661 9.11612C13.1005 8.8817 13.4185 8.75 13.75 8.75H21.25C21.5815 8.75 21.8995 8.8817 22.1339 9.11612C22.3683 9.35054 22.5 9.66848 22.5 10C22.5 10.3315 22.3683 10.6495 22.1339 10.8839C21.8995 11.1183 21.5815 11.25 21.25 11.25H13.75C13.4185 11.25 13.1005 11.1183 12.8661 10.8839C12.6317 10.6495 12.5 10.3315 12.5 10ZM12.5 15C12.5 14.6685 12.6317 14.3505 12.8661 14.1161C13.1005 13.8817 13.4185 13.75 13.75 13.75H21.25C21.5815 13.75 21.8995 13.8817 22.1339 14.1161C22.3683 14.3505 22.5 14.6685 22.5 15C22.5 15.3315 22.3683 15.6495 22.1339 15.8839C21.8995 16.1183 21.5815 16.25 21.25 16.25H13.75C13.4185 16.25 13.1005 16.1183 12.8661 15.8839C12.6317 15.6495 12.5 15.3315 12.5 15ZM12.5 20C12.5 19.6685 12.6317 19.3505 12.8661 19.1161C13.1005 18.8817 13.4185 18.75 13.75 18.75H21.25C21.5815 18.75 21.8995 18.8817 22.1339 19.1161C22.3683 19.3505 22.5 19.6685 22.5 20C22.5 20.3315 22.3683 20.6495 22.1339 20.8839C21.8995 21.1183 21.5815 21.25 21.25 21.25H13.75C13.4185 21.25 13.1005 21.1183 12.8661 20.8839C12.6317 20.6495 12.5 20.3315 12.5 20ZM8.75 8.75C8.41848 8.75 8.10054 8.8817 7.86612 9.11612C7.6317 9.35054 7.5 9.66848 7.5 10C7.5 10.3315 7.6317 10.6495 7.86612 10.8839C8.10054 11.1183 8.41848 11.25 8.75 11.25C9.08152 11.25 9.40071 11.1183 9.63513 10.8839C9.86955 10.6495 10.0013 10.3315 10.0013 10C10.0013 9.66848 9.86955 9.35054 9.63513 9.11612C9.40071 8.8817 9.08152 8.75 8.75 8.75ZM7.5 15C7.5 14.6685 7.6317 14.3505 7.86612 14.1161C8.10054 13.8817 8.41848 13.75 8.75 13.75C9.08152 13.75 9.40071 13.8817 9.63513 14.1161C9.86955 14.3505 10.0013 14.6685 10.0013 15C10.0013 15.3315 9.86955 15.6495 9.63513 15.8839C9.40071 16.1183 9.08277 16.25 8.75125 16.25C8.41973 16.25 8.10054 16.1183 7.86612 15.8839C7.6317 15.6495 7.5 15.3315 7.5 15ZM8.75 18.75C8.41848 18.75 8.10054 18.8817 7.86612 19.1161C7.6317 19.3505 7.5 19.6685 7.5 20C7.5 20.3315 7.6317 20.6495 7.86612 20.8839C8.10054 21.1183 8.41848 21.25 8.75 21.25C9.08152 21.25 9.40071 21.1183 9.63513 20.8839C9.86955 20.6495 10.0013 20.3315 10.0013 20C10.0013 19.6685 9.86955 19.3505 9.63513 19.1161C9.40071 18.8817 9.08152 18.75 8.75 18.75Z" fill="#FFF9E5"/>
              </svg>
            </v-btn>
          </router-link>
          <div class="p-2 bg-bombero-800 rounded-full flex justify-between items-center max-w-max">
            <v-btn
              text="JUGAR"
              size="large"
              rounded="xl"
              block
              color="#FF9433"
              elevation="0"
              class="text-bombero-800 py-4 px-4 font-bold"
            ></v-btn>
          </div>
          <div class="w-12 h-12"></div>
        </div>

        <div class="absolute z-10 w-full">
          <h2 class="m-0 mt-16 text-bombero-50 text-center text-2xl font-bold">Elije una categoría</h2>
          <div class="bg-white py-4 rounded-t-3xl overflow-hidden mt-6 px-4">
            <CustomRadio
              :items="fakeCategories"
              @item-clicked="handleItemClicked"
            />
          </div>
        </div>
        <img src="/images/red-city.png" alt="red city" class="absolute z-0 top-5 w-full">
        <div class="bg-[#E33E3E] w-full h-[75%] lg:h-[50%] absolute bottom-0 z-0"></div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
  import { ref } from 'vue'
  import { IonPage } from '@ionic/vue'
  import CustomRadio from '@/components/CustomRadio.vue'

  export default {
    data() {
      return {
        tab: null,
        fakeCategories: [
        { id: 1, title: 'Hidráulica Bombas', icon: '/icons/hidraulica.png', color: '#D9D9D9', active: false },
        { id: 2, title: 'Agentes Extintores', icon: '/icons/extinguisher.png', color: '#FFDD64', active: false },
        { id: 3, title: 'Jurídico', icon: '/icons/legal.png', color: '#FFA360', active: false },
        { id: 4, title: 'Vehículos y Herramientas', icon: '/icons/car.png', color: '#83E773', active: false },
        { id: 5, title: 'Teoría del Fuego', icon: '/icons/fire.png', color: '#FF7878', active: false },
        { id: 6, title: 'Instalaciones', icon: '/icons/gear.png', color: '#8DCFFF', active: false },
        { id: 7, title: 'Mix', icon: '/icons/mix.png', color: '#C99EFF', active: false },
        { id: 8, title: 'Hidráulica Bombas', icon: '/icons/hidraulica.png', color: '#D9D9D9', active: false },
        { id: 9, title: 'Agentes Extintores', icon: '/icons/extinguisher.png', color: '#FFDD64', active: false },
        { id: 10, title: 'Jurídico', icon: '/icons/legal.png', color: '#FFA360', active: false },
        { id: 11, title: 'Vehículos y Herramientas', icon: '/icons/car.png', color: '#83E773', active: false },
        { id: 12, title: 'Teoría del Fuego', icon: '/icons/fire.png', color: '#FF7878', active: false },
        { id: 13, title: 'Instalaciones', icon: '/icons/gear.png', color: '#8DCFFF', active: false },
        { id: 14, title: 'Mix', icon: '/icons/mix.png', color: '#C99EFF', active: false },
      ]
      }
    },
    components: {
      IonPage,
      CustomRadio
    },
    setup() {
      return {
      }
    },
    methods: {
      handleItemClicked(items: any) {
        console.log(items)
        this.fakeCategories = items;
      }
    },
    async mounted() {
    }
  };
</script>

<style>
  .v-tab--selected .v-tab__slider {
    display: none;
    opacity: 0;
  }

  .v-btn--variant-flat {
    background-color: transparent;
    color: white;
  }

  .v-tab--selected.v-btn--variant-flat {
    background-color: white;
    color: #27272a;
  }
  
</style>