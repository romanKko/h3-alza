<template>
  <ion-page>
    <ion-content>
      <the-header />
      <div class="signup">
        <h1>Registracia</h1>
        <p>Typ</p>
      </div>

      <div class="searchbar">
        <ion-segment @ionChange="segmentChanged($event)">
          <ion-segment-button value="firma">
            <ion-label>Firma</ion-label>
          </ion-segment-button>
          <ion-segment-button value="stazista">
            <ion-label>Stazista</ion-label>
          </ion-segment-button>
        </ion-segment>

        <div :style="{ marginTop: '2rem' }">
          <div v-if="firma">
            <ion-item>
              <ion-label position="fixed">Nazov Firmy</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="fixed">E-mail</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="fixed">Password</ion-label>
              <ion-input></ion-input>
            </ion-item>
          </div>

          <div v-if="!firma">
            <ion-item>
              <ion-label position="fixed">Meno</ion-label>
              <ion-input></ion-input>

              <ion-label position="fixed">Priezvisko</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="fixed">E-mail</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="fixed">Password</ion-label>
              <ion-input></ion-input>
            </ion-item>
          </div>
        </div>
      </div>
      <the-footer />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { IonContent, IonPage } from '@ionic/vue'

export default {
  components: { TheHeader, TheFooter, IonPage, IonContent },

  data() {
    return {
      firma: false
    }
  },

  methods: {
    segmentChanged(ev: CustomEvent) {
      console.log('Segment changed', ev)
      this.firma = ev.detail.value === 'firma'
    }
  }
}
</script>

<style lang="scss" scoped>
.signup {
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: nowrap;
  align-items: center;
}

.searchbar {
  margin: 1rem 25vw 5rem 25vw;
}
</style>
