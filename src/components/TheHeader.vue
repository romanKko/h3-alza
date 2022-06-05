<template>
  <ion-header>
    <ion-toolbar :style="{ paddingLeft: '2rem' }">
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-icon
        :icon="logoTableau"
        :style="{ marginRight: '4px', fontSize: '42px', marginTop: '10px', color: '#A760FF' }"
      ></ion-icon>

      <ion-title>WorkHub</ion-title>
      <a href="/onboarding">Onboarding</a>
      <a class="ion-margin" href="/detail-staze">Detail Staze</a>
      <a class="ion-margin" href="/detail-stazistu">Detail Stazistu</a>
      <a class="ion-margin" href="/list-stazistov">List Stazistov</a>

      <ion-button class="sign-up" slot="end" @click="signUp()" fill="outline">Sign Up</ion-button>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonHeader, IonTitle } from '@ionic/vue'
import { logoTableau } from 'ionicons/icons'

export default {
  components: {
    IonHeader,
    IonTitle
  },

  setup() {
    return {
      logoTableau
    }
  },

  methods: {
    signUp() {
      alert('signup')
    }
  }
}
</script>
<style lang="scss" scoped>
#logo {
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

.sign-up {
  max-width: 100px;
}

a {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  color: gray;
}
</style>
