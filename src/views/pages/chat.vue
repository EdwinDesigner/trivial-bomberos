<template>
  <ion-page>

    <ion-popover :is-open="popoverOpen" :event="event" @didDismiss="popoverOpen = false">
      <div class="rounded-2xl bg-white divide-y">
        <div @click="popoverOpen=false" class="px-4 py-3 active:bg-zinc-100 select-none flex gap-2 items-center text-base m-0 text-zinc-600 font-medium">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.6632 7.93127C21.1374 6.67625 20.3724 5.53553 19.4109 4.57268C18.4523 3.60815 17.3135 2.84129 16.0593 2.31565C14.7745 1.77455 13.3941 1.49718 12 1.50002H11.9531C10.5351 1.50705 9.16403 1.7883 7.87262 2.34143C6.62919 2.87246 5.50114 3.64068 4.55153 4.60315C3.59933 5.56384 2.8431 6.70057 2.32496 7.95002C1.78711 9.24931 1.51457 10.6431 1.5234 12.0492C1.53043 13.6758 1.91949 15.2906 2.64606 16.7344V20.2969C2.64606 20.8922 3.12887 21.375 3.72184 21.375H7.27965C8.73014 22.1069 10.3308 22.4921 11.9554 22.5H12.0047C13.4062 22.5 14.7632 22.2281 16.0429 21.6961C17.2908 21.1767 18.4253 20.4188 19.3828 19.4649C20.3484 18.5063 21.1078 17.386 21.6398 16.1367C22.1906 14.843 22.4718 13.4672 22.4789 12.0469C22.4836 10.6196 22.207 9.2344 21.6632 7.93127ZM7.32184 13.125C6.70309 13.125 6.19918 12.6211 6.19918 12C6.19918 11.3789 6.70309 10.875 7.32184 10.875C7.94059 10.875 8.44449 11.3789 8.44449 12C8.44449 12.6211 7.94293 13.125 7.32184 13.125ZM12 13.125C11.3812 13.125 10.8773 12.6211 10.8773 12C10.8773 11.3789 11.3812 10.875 12 10.875C12.6187 10.875 13.1226 11.3789 13.1226 12C13.1226 12.6211 12.6187 13.125 12 13.125ZM16.6781 13.125C16.0593 13.125 15.5554 12.6211 15.5554 12C15.5554 11.3789 16.0593 10.875 16.6781 10.875C17.2968 10.875 17.8007 11.3789 17.8007 12C17.8007 12.6211 17.2968 13.125 16.6781 13.125Z"
              fill="#FF9433" />
          </svg>
          Mensaje directo
        </div>
        <div @click="popoverOpen=false" class="px-4 py-3 active:bg-zinc-100 select-none flex gap-2 items-center text-base m-0 text-zinc-600 font-medium">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_348_1222)">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11 2C9.67392 2 8.40215 2.52678 7.46447 3.46447C6.52678 4.40215 6 5.67392 6 7C6 8.32608 6.52678 9.59785 7.46447 10.5355C8.40215 11.4732 9.67392 12 11 12C12.3261 12 13.5979 11.4732 14.5355 10.5355C15.4732 9.59785 16 8.32608 16 7C16 5.67392 15.4732 4.40215 14.5355 3.46447C13.5979 2.52678 12.3261 2 11 2ZM11 13C8.605 13 6.425 13.694 4.822 14.671C4.022 15.161 3.338 15.736 2.844 16.361C2.358 16.977 2 17.713 2 18.5C2 19.345 2.411 20.011 3.003 20.486C3.563 20.936 4.302 21.234 5.087 21.442C6.665 21.859 8.771 22 11 22C11.23 22 11.46 21.998 11.685 21.995C11.8525 21.9927 12.0167 21.9484 12.1626 21.8661C12.3085 21.7838 12.4313 21.6662 12.5199 21.524C12.6085 21.3819 12.66 21.2198 12.6696 21.0525C12.6792 20.8853 12.6467 20.7184 12.575 20.567C12.1949 19.7647 11.9985 18.8878 12 18C12 16.748 12.383 15.588 13.037 14.627C13.1342 14.4842 13.1928 14.3186 13.207 14.1465C13.2212 13.9743 13.1905 13.8014 13.118 13.6446C13.0455 13.4878 12.9336 13.3524 12.7932 13.2517C12.6528 13.151 12.4888 13.0884 12.317 13.07C11.887 13.024 11.447 13 11 13ZM16.586 15.172C16.3974 14.9898 16.1448 14.889 15.8826 14.8913C15.6204 14.8936 15.3696 14.9988 15.1842 15.1842C14.9988 15.3696 14.8936 15.6204 14.8913 15.8826C14.889 16.1448 14.9898 16.3974 15.172 16.586L16.586 18L15.172 19.414C15.0765 19.5062 15.0003 19.6166 14.9479 19.7386C14.8955 19.8606 14.8679 19.9918 14.8667 20.1246C14.8656 20.2574 14.8909 20.3891 14.9412 20.512C14.9915 20.6348 15.0657 20.7465 15.1596 20.8404C15.2535 20.9343 15.3651 21.0085 15.488 21.0588C15.6109 21.1091 15.7426 21.1344 15.8754 21.1333C16.0082 21.1321 16.1394 21.1045 16.2614 21.0521C16.3834 20.9997 16.4938 20.9235 16.586 20.828L18 19.414L19.414 20.828C19.5062 20.9235 19.6166 20.9997 19.7386 21.0521C19.8606 21.1045 19.9918 21.1321 20.1246 21.1333C20.2574 21.1344 20.3891 21.1091 20.512 21.0588C20.6348 21.0085 20.7465 20.9343 20.8404 20.8404C20.9343 20.7465 21.0085 20.6348 21.0588 20.512C21.1091 20.3891 21.1344 20.2574 21.1333 20.1246C21.1321 19.9918 21.1045 19.8606 21.0521 19.7386C20.9997 19.6166 20.9235 19.5062 20.828 19.414L19.414 18L20.828 16.586C21.0102 16.3974 21.111 16.1448 21.1087 15.8826C21.1064 15.6204 21.0012 15.3696 20.8158 15.1842C20.6304 14.9988 20.3796 14.8936 20.1174 14.8913C19.8552 14.889 19.6026 14.9898 19.414 15.172L18 16.586L16.586 15.172Z"
                fill="#F94848" />
            </g>
            <defs>
              <clipPath id="clip0_348_1222">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Eliminar Jugador
        </div>
      </div>
    </ion-popover>

    <div class="h-screen bg-bombero-400">
      <div class="relative h-full">

        <!-- bottom bar -->
        <div
          class="absolute bottom-0 left-0 w-full px-6 py-4 z-50 bg-gradient-to-t from-[#CE3333] to-[#F94848] rounded-t-2xl flex justify-center gap-6 items-center">
          <v-btn elevation="0" rounded="lg" color="#BF2121" class="px-6 font-black">
            Finalizar
          </v-btn>
          <v-btn elevation="0" rounded="lg" color="#FF9433" class="px-6 font-black text-white">
            Siguiente
          </v-btn>
        </div>

        <div class="absolute z-10 w-full">
          <div class="p-2">
            <div class="rounded-2xl bg-white shadow-lg">
              <div class="border-b p-2">
                <h2 class="text-xl text-zinc-800 font-bold text-center m-0">Creando partida</h2>
              </div>
              <div class="flex gap-4 p-4">
                <div @click="openPopover($event)"
                  class="w-full aspect-square h-full bg-[#F6F0F0] rounded-2xl overflow-hidden flex justify-center items-center">
                  <img src="/images/profile.jpeg" alt="imagen de perfil" class="w-full h-full object-cover" />
                </div>
                <div @click="openPopover($event)"
                  class="w-full aspect-square h-full bg-[#F6F0F0] rounded-2xl overflow-hidden flex justify-center items-center">
                  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.75">
                      <path
                        d="M19.5 15C22.5376 15 25 12.5376 25 9.5C25 6.46243 22.5376 4 19.5 4C16.4624 4 14 6.46243 14 9.5C14 12.5376 16.4624 15 19.5 15Z"
                        fill="#453F3F" />
                      <path
                        d="M19.0909 26C19.0909 26 30 26 30 23.2308C30 19.9077 24.6818 16.3077 19.0909 16.3077C13.5 16.3077 8.18182 19.9077 8.18182 23.2308C8.18182 26 19.0909 26 19.0909 26ZM6.81818 12.1538V8H4.09091V12.1538H0V14.9231H4.09091V19.0769H6.81818V14.9231H10.9091V12.1538H6.81818Z"
                        fill="#453F3F" />
                    </g>
                  </svg>
                </div>
                <div @click="openPopover($event)"
                  class="w-full aspect-square h-full bg-[#F6F0F0] rounded-2xl overflow-hidden flex justify-center items-center">
                  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.75">
                      <path
                        d="M19.5 15C22.5376 15 25 12.5376 25 9.5C25 6.46243 22.5376 4 19.5 4C16.4624 4 14 6.46243 14 9.5C14 12.5376 16.4624 15 19.5 15Z"
                        fill="#453F3F" />
                      <path
                        d="M19.0909 26C19.0909 26 30 26 30 23.2308C30 19.9077 24.6818 16.3077 19.0909 16.3077C13.5 16.3077 8.18182 19.9077 8.18182 23.2308C8.18182 26 19.0909 26 19.0909 26ZM6.81818 12.1538V8H4.09091V12.1538H0V14.9231H4.09091V19.0769H6.81818V14.9231H10.9091V12.1538H6.81818Z"
                        fill="#453F3F" />
                    </g>
                  </svg>
                </div>
                <div @click="openPopover($event)"
                  class="w-full aspect-square h-full bg-[#F6F0F0] rounded-2xl overflow-hidden flex justify-center items-center">
                  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.75">
                      <path
                        d="M19.5 15C22.5376 15 25 12.5376 25 9.5C25 6.46243 22.5376 4 19.5 4C16.4624 4 14 6.46243 14 9.5C14 12.5376 16.4624 15 19.5 15Z"
                        fill="#453F3F" />
                      <path
                        d="M19.0909 26C19.0909 26 30 26 30 23.2308C30 19.9077 24.6818 16.3077 19.0909 16.3077C13.5 16.3077 8.18182 19.9077 8.18182 23.2308C8.18182 26 19.0909 26 19.0909 26ZM6.81818 12.1538V8H4.09091V12.1538H0V14.9231H4.09091V19.0769H6.81818V14.9231H10.9091V12.1538H6.81818Z"
                        fill="#453F3F" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#F6F0F0] p-4 rounded-t-3xl overflow-hidden mt-10">
            <div class="h-[calc(100vh-266px)] relative p-4">

              <div class="space-y-2">
                <div class="flex gap-2">
                  <div class="w-10 h-10 rounded-lg overflow-hidden flex justify-center items-center">
                    <img src="/images/profile.jpeg" alt="imagen de perfil" class="w-full h-full object-cover" />
                  </div>
                  <div class="bg-[#ECDCDC] p-2 rounded-r-2xl rounded-bl-2xl flex-1">
                    Cras consectetur nibh in sollicitudin auctor vitae condimentum dui
                  </div>
                </div>
              </div>

              <!-- send -->
              <div class="fixed bottom-20 left-4 right-4 z-50">
                <div class="bg-white p-2 rounded-2xl relative">
                  <input autofocus type="text" value="Cras consectetur nib" class="w-full focus:border-none focus:outline-none">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-2 right-2">
                    <path d="M2.64107 1.11979C1.75832 0.67987 0.788492 1.52146 1.04057 2.50746L2.88857 9.71167C2.93489 9.89273 3.03117 10.0556 3.16545 10.1801C3.29974 10.3045 3.46611 10.3851 3.64391 10.4117L12.7042 11.7621C12.9664 11.8003 12.9664 12.1963 12.7042 12.2355L3.64482 13.5849C3.46703 13.6115 3.30065 13.6921 3.16637 13.8166C3.03208 13.941 2.9358 14.1039 2.88949 14.2849L1.04057 21.493C0.788492 22.478 1.75832 23.3196 2.64107 22.8806L22.3476 13.079C23.2175 12.6467 23.2175 11.3537 22.3476 10.9205L2.64107 1.11979Z" fill="#FF9433"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { ref } from 'vue'
import { IonPage, IonPopover } from '@ionic/vue'

export default {
  data() {
    return {
      popoverOpen: false,
      event: null,
    }
  },
  components: {
    IonPage,
    IonPopover,
  },
  setup() {

    const count = ref(60);

    return {
      count
    }
  },
  methods: {
    openPopover(e: Event) {
      this.event = e as any;
      this.popoverOpen = true;
    },
  },
  async mounted() {
  }
};
</script>

<style>
  ion-popover::part(content) {
    border-radius: 16px;
    box-shadow: none;
  }
</style>