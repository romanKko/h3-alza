<template>
  <ion-page style="--ion-background-color: white">
    <the-header />

    <ion-content :fullscreen="true">
      <div class="head">
        <img src="./img/onboarding.svg" alt="" />
      </div>

      <div class="searchbar">
        <ion-item>
          <ion-searchbar></ion-searchbar>
        </ion-item>
      </div>

      <div class="categories">
        <h1 id="categories-title">Hľadám</h1>

        <div class="cards">
          <ion-card @click="findStaz()">
            <ion-card-header>
              <ion-card-title>Stáž</ion-card-title>
            </ion-card-header>

            <ion-card-content> Bugala nastyluj dik </ion-card-content>
          </ion-card>

          <ion-card @click="findStazistov()">
            <ion-card-header>
              <ion-card-title>Stážistov</ion-card-title>
            </ion-card-header>

            <ion-card-content> Bugala nastyluj dik </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
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
  },

  methods: {
    findStaz() {
      alert('staz')
    },
    findStazistov() {
      alert('stazisti')
    }
  }
}
</script>
<style scoped>
#expat {
  height: 50px;
  width: 50px;
}

.head {
  display: flex;
  justify-content: center;
  align-items: center;
}

.searchbar {
  margin: 1rem 25vw 5rem 25vw;
}

.categories {
  margin-top: 2rem;
  border-top: 1px gainsboro solid;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.cards {
  display: flex;
  flex-direction: row;
}

.cards ion-card:hover {
  cursor: pointer;
}

#categories-title {
  font-size: 5rem;
  font-weight: bold;
  color: #152536;
}
</style>
