<template>
  <ion-page>
    <div class="bg-bombero-400 w-full min-h-screen">
      <div class="w-full min-h-screen bg-no-repeat bg-contain bg-bottom" :style="{
        backgroundImage: 'url(/images/red-cloud.png)',
      }">
        <header class="p-4 w-full relative">
          <div class="absolute top-2 right-2">
            <v-btn density="default" icon="" variant="plain">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-bombero-950">
                <path d="M11 17.5C10.9984 16.2594 11.3535 15.0445 12.023 14H4.25299C3.95748 13.9999 3.66484 14.058 3.3918 14.171C3.11876 14.284 2.87067 14.4498 2.66171 14.6587C2.45275 14.8677 2.28702 15.1158 2.17399 15.3888C2.06097 15.6619 2.00286 15.9545 2.00299 16.25V17.169C2.00299 17.741 2.18299 18.299 2.51399 18.765C4.05599 20.929 6.57999 22 9.99999 22C10.932 22 11.797 21.92 12.592 21.76C11.5642 20.5797 10.9986 19.0671 11 17.502V17.5ZM15 7.005C15 5.67892 14.4732 4.40715 13.5355 3.46947C12.5978 2.53179 11.3261 2.005 9.99999 2.005C8.67391 2.005 7.40214 2.53179 6.46446 3.46947C5.52678 4.40715 4.99999 5.67892 4.99999 7.005C4.99999 8.33109 5.52678 9.60286 6.46446 10.5405C7.40214 11.4782 8.67391 12.005 9.99999 12.005C11.3261 12.005 12.5978 11.4782 13.5355 10.5405C14.4732 9.60286 15 8.33109 15 7.005ZM23 17.5C23 16.0413 22.4205 14.6424 21.3891 13.6109C20.3576 12.5795 18.9587 12 17.5 12C16.0413 12 14.6424 12.5795 13.6109 13.6109C12.5795 14.6424 12 16.0413 12 17.5C12 18.9587 12.5795 20.3576 13.6109 21.3891C14.6424 22.4205 16.0413 23 17.5 23C18.9587 23 20.3576 22.4205 21.3891 21.3891C22.4205 20.3576 23 18.9587 23 17.5ZM17.41 14.008L17.5 14L17.59 14.008C17.6899 14.0263 17.7819 14.0745 17.8537 14.1463C17.9255 14.2181 17.9737 14.3101 17.992 14.41L18 14.5V17H20.504L20.594 17.008C20.6939 17.0263 20.7859 17.0745 20.8577 17.1463C20.9295 17.2181 20.9777 17.3101 20.996 17.41L21.004 17.5L20.996 17.59C20.9777 17.6899 20.9295 17.7819 20.8577 17.8537C20.7859 17.9255 20.6939 17.9738 20.594 17.992L20.504 18H18V20.5L17.992 20.59C17.9737 20.6899 17.9255 20.7819 17.8537 20.8537C17.7819 20.9255 17.6899 20.9738 17.59 20.992L17.5 21L17.41 20.992C17.3101 20.9738 17.2181 20.9255 17.1463 20.8537C17.0745 20.7819 17.0262 20.6899 17.008 20.59L17 20.5V18H14.504L14.414 17.992C14.3141 17.9738 14.2221 17.9255 14.1503 17.8537C14.0785 17.7819 14.0302 17.6899 14.012 17.59L14.004 17.5L14.012 17.41C14.0302 17.3101 14.0785 17.2181 14.1503 17.1463C14.2221 17.0745 14.3141 17.0263 14.414 17.008L14.504 17H17V14.5L17.008 14.41C17.0262 14.3101 17.0745 14.2181 17.1463 14.1463C17.2181 14.0745 17.3101 14.0263 17.41 14.008Z"/>
              </svg>
            </v-btn>
          </div>
          <img src="/images/logo.png" alt="logo" class="w-36 h-36 absolute top-4 left-2/4 -translate-x-2/4">
          <img src="/images/image_1.png" alt="image1" class="mt-10">
        </header>
        <main class="px-4 mt-10">
          <h1 class="text-base text-bombero-50 text-center">Inicio de sesión</h1>
          <v-form validate-on="submit lazy" @submit.prevent="submit">
            <v-text-field
              v-model="email"
              :rules="rules"
              label="Email"
              class="rounded-pill"
            ></v-text-field>

            <v-btn
              :loading="loading"
              class="mt-2"
              text="Submit"
              type="submit"
              block
            ></v-btn> 
          </v-form>
        </main>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
  import { IonPage } from '@ionic/vue';

  export default {
    components: {
      IonPage,
    },
    data: vm => ({
      loading: false,
      rules: [value => vm.checkApi(value)],
      timeout: null,
      email: '',
    }),
    setup() {
    },
    methods: {
      async submit(event) {
        this.loading = true

        const results = await event

        this.loading = false

        alert(JSON.stringify(results, null, 2))
      },
      async checkApi(email) {
        return new Promise(resolve => {
          clearTimeout(this.timeout)

          this.timeout = setTimeout(() => {
            if (!email) return resolve('Please enter a user name.')
            if (email === 'johnleider')
              return resolve('User name already taken. Please try another one.')

            return resolve(true)
          }, 1000)
        })
      },
    },
    async mounted() {
    }
  };
</script>
