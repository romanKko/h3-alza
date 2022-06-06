<template>
  <ion-header>
    <ion-toolbar color="secondary" class="idk">
      <img src="../views/img/expatriate.png" id="expat" />

      <div slot="end" class="ion-m-3">
        <a class="nav-text" href="/onboarding">Onboarding</a>
        <a class="nav-text ion-margin" href="/detailstaze">Detail Staze</a>
        <a class="nav-text ion-margin" href="/detail-stazistu">Detail Stazistu</a>
      </div>
      <ion-title slot="start" class="ion-title">SusAlza 3</ion-title>

      <ion-button class="sign-up" slot="end" @click="signUp()">Sign Up</ion-button>
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

ion-title {
  width: 18rem;
  padding-left: 0px !important;
}

.nav-text {
  color: white !important;
  text-decoration: none;
}

.idk {
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
  align-items: center !important;
}
</style>
