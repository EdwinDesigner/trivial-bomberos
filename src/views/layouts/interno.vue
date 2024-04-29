<template>
  <ion-page>
    <ion-menu menu-id="menu" content-id="main-content" side="end" class="bg-transparent">
      <ion-header class="ion-no-border border-b">
        <ion-toolbar>
          <div class="flex justify-between items-center px-4">
            <ion-title class="text-zinc-800 font-black">Menú</ion-title>
            <ion-menu-toggle class="cursor-pointer">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8L24 24" stroke="#27272a" stroke-width="2" stroke-linecap="round"/>
                <path d="M24 8L8 24" stroke="#27272a" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </ion-menu-toggle>
          </div>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ul class="px-4">
          <li>
            <ion-menu-toggle>
              <router-link :to="{ name: 'login', params: {} }" class="text-zinc-800 font-semibold flex items-center gap-4 py-4 border-b">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-zinc-800">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6C7.25 8.62335 9.37665 10.75 12 10.75C14.6234 10.75 16.75 8.62335 16.75 6C16.75 3.37665 14.6234 1.25 12 1.25ZM8.75 6C8.75 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6C15.25 7.79493 13.7949 9.25 12 9.25C10.2051 9.25 8.75 7.79493 8.75 6Z" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 12.25C9.96067 12.25 8.07752 12.7208 6.67815 13.5204C5.3 14.3079 4.25 15.5101 4.25 17C4.25 18.4899 5.3 19.6921 6.67815 20.4796C8.07752 21.2792 9.96067 21.75 12 21.75C14.0393 21.75 15.9225 21.2792 17.3219 20.4796C18.7 19.6921 19.75 18.4899 19.75 17C19.75 15.5101 18.7 14.3079 17.3219 13.5204C15.9225 12.7208 14.0393 12.25 12 12.25ZM5.75 17C5.75 16.2807 6.26701 15.483 7.42236 14.8228C8.55649 14.1747 10.1733 13.75 12 13.75C13.8267 13.75 15.4435 14.1747 16.5776 14.8228C17.733 15.483 18.25 16.2807 18.25 17C18.25 17.7193 17.733 18.517 16.5776 19.1772C15.4435 19.8253 13.8267 20.25 12 20.25C10.1733 20.25 8.55649 19.8253 7.42236 19.1772C6.26701 18.517 5.75 17.7193 5.75 17Z" />
                </svg>
                Perfil
              </router-link>
            </ion-menu-toggle>
          </li>
          <li>
            <ion-menu-toggle>
              <a href="#" class="text-zinc-800 font-semibold flex items-center gap-4 py-4">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-zinc-800">
                  <path d="M17.44 15.3699C17.25 15.3699 17.06 15.2999 16.91 15.1499C16.62 14.8599 16.62 14.3799 16.91 14.0899L18.94 12.0599L16.91 10.0299C16.62 9.73994 16.62 9.25994 16.91 8.96994C17.2 8.67994 17.68 8.67994 17.97 8.96994L20.53 11.5299C20.82 11.8199 20.82 12.2999 20.53 12.5899L17.97 15.1499C17.82 15.2999 17.63 15.3699 17.44 15.3699Z" />
                  <path d="M19.93 12.8101H9.76001C9.35001 12.8101 9.01001 12.4701 9.01001 12.0601C9.01001 11.6501 9.35001 11.3101 9.76001 11.3101H19.93C20.34 11.3101 20.68 11.6501 20.68 12.0601C20.68 12.4701 20.34 12.8101 19.93 12.8101Z" />
                  <path d="M11.76 20.75C6.61001 20.75 3.01001 17.15 3.01001 12C3.01001 6.85 6.61001 3.25 11.76 3.25C12.17 3.25 12.51 3.59 12.51 4C12.51 4.41 12.17 4.75 11.76 4.75C7.49001 4.75 4.51001 7.73 4.51001 12C4.51001 16.27 7.49001 19.25 11.76 19.25C12.17 19.25 12.51 19.59 12.51 20C12.51 20.41 12.17 20.75 11.76 20.75Z" />
                </svg>
                Cerrar Sesión
              </a>
            </ion-menu-toggle>
          </li>
        </ul>
      </ion-content>
    </ion-menu>

    <ion-page id="main-content">
      <ion-header class="ion-no-border">
        <ion-toolbar id="toolbar-main" class="px-4 py-1">
          <router-link v-if="user.navigatePath && user.currentPath != 'game-mode'" :to="{ name: user.navigatePath, params: {} }">
            <v-btn
              elevation="0"
              variant="plain"
              prepend-icon="mdi-chevron-left"
              color="white"
            >
              {{ user.navigateName }}
            </v-btn>
          </router-link>
          <ion-buttons slot="end">
            <!-- <button>
              otros
            </button> -->
            <div expand="block" @click="openMenu()" class="overflow-hidde min-w-10 min-h-10 max-w-10 max-h-10 rounded-lg overflow-hidden cursor-pointer">
              <img src="/images/profile.jpeg" alt="user name" class="w-10 h-10 object-cover">
            </div>
          </ion-buttons>
          
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-router-outlet></ion-router-outlet>
      </ion-content>
    </ion-page>
  </ion-page>
</template>

<script>
import {
  IonList,
  IonButtons,
  IonButton,
  IonItem,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRouterOutlet,
  IonMenuToggle,
  IonModal,
  menuController
} from "@ionic/vue"
import { ref } from 'vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    IonList,
    IonItem,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonRouterOutlet,
    IonMenuToggle,
    IonModal,
  },
  setup() {

    const openMenu = async () => {
      await menuController.open('menu');
    };

    return {
      openMenu,
    }

  },
  computed: {
      ...mapGetters('auth', ['getStatusUser']),
      user: {
        get() {
          return this.getStatusUser
        }
      }
    },
  methods: {
  },
  async mounted() {
  },
};
</script>

<style>
  ion-toolbar#toolbar-main {
    --background: #F94848;
  }
</style>