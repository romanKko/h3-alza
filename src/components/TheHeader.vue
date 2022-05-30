<template>
  <ion-header>
    <ion-toolbar color="secondary">
      <img src="../views/img/expatriate.png" id="expat" />

      <!-- docasne linky aby sme to nemuseli nonstop pisat -->
      <a href="/onboarding">Onboarding</a>
      <a href="/detailstaze">Detail Staze</a>
      <a href="/detail-stazistu">Detail Stazistu</a>

      <ion-title>SusAlza 3</ion-title>

      <ion-button slot="end" @click="signUp()">Sign Up</ion-button>
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
  },

  methods: {
    signUp() {
      alert('signup')
    }
  }
}
</script>
<style scoped>
#expat {
  width: 50px;
  height: 50px;
}
</style>
