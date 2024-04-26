<template>

  <ion-page>
    <ion-content>
      <ion-router-outlet></ion-router-outlet>
    </ion-content>
  </ion-page>

</template>

<script lang="ts">

import { IonContent, IonPage, IonRouterOutlet } from '@ionic/vue';

export default {
  components: {
    IonContent,
    IonPage,
    IonRouterOutlet
  },
  setup() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style scoped></style>