<template>
  <ion-header>
    <div class="header" :style="{ paddingLeft: '2rem' }">
      <ion-buttons>
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-icon
        :icon="logoAmplify"
        :style="{ marginRight: '4px', fontSize: '42px', marginTop: '10px', color: '#A760FF' }"
      ></ion-icon>

      <h2 :style="{ marginLeft: '1rem' }">WorkHub</h2>

      <div class="links">
        <a href="/onboarding">Onboarding</a>
        <a class="ion-margin" href="/detail-staze">Detail Staze</a>
        <a class="ion-margin" href="/detail-stazistu">Detail Stazistu</a>
        <a class="ion-margin" href="/list-stazistov">List Stazistov</a>
      </div>

      <ion-button class="sign-up" @click="signUp()" fill="outline">Sign Up</ion-button>
    </div>
  </ion-header>
</template>

<script>
import { IonHeader } from '@ionic/vue'
import { logoAmplify } from 'ionicons/icons'

export default {
  components: {
    IonHeader
  },

  setup() {
    return {
      logoAmplify
    }
  },

  methods: {
    signUp() {
      alert('signup')
      this.$router.push({ name: 'Sign Up' })
    }
  }
}
</script>
<style lang="scss" scoped>
#logo {
  width: 50px;
  height: 50px;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  padding-top: 0.5rem;
}

.links {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  margin-left: 8vw;

  a {
    margin: 0 2rem 0 0;
  }
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
  margin-left: 30vw;
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
