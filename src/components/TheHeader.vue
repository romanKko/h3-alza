<template>
  <ion-header>
    <ion-toolbar color="secondary">
      <img src="../views/img/expatriate.png" id="expat" />
      <ion-title>SusAlza 3</ion-title>
      <ion-button slot="end">Sign Up</ion-button>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonHeader, IonTitle, IonToolbar } from '@ionic/vue'

export default {
  components: {
    IonHeader,
    IonTitle,
    IonToolbar
  }
}
</script>
<style scoped>
#expat {
  width: 50px;
  height: 50px;
}
</style>
