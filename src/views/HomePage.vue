<template>
  <ion-page style="--ion-background-color: white">
    <the-header />

    <ion-content :fullscreen="true"> </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue'
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    IonContent,
    IonPage,
    TheHeader
  }
}
</script>
<style scoped>
img {
  height: 50px;
  width: 50px;
}
</style>
