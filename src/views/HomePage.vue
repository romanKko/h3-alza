<template>
  <ion-page style="--ion-background-color: white">
    <the-header />

    <ion-content :fullscreen="true"> </ion-content>
    <the-footer />
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    IonContent,
    IonPage,
    TheHeader,
    TheFooter
  }
}
</script>
<style scoped>
img {
  height: 50px;
  width: 50px;
}
</style>
