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
          <div v-if="accountType">
            <ion-item>
              <ion-label position="fixed">Nazov Firmy</ion-label>
              <ion-input v-model="form.firma"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="fixed">E-mail</ion-label>
              <ion-input v-model="form.email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="fixed">Password</ion-label>
              <ion-input v-model="form.pass"></ion-input>
            </ion-item>
          </div>

          <div v-if="!accountType">
            <ion-item>
              <ion-label position="fixed">Meno</ion-label>
              <ion-input v-model="form.meno"></ion-input>

              <ion-label position="fixed">Priezvisko</ion-label>
              <ion-input v-model="form.priezvisko"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="fixed">E-mail</ion-label>
              <ion-input v-model="form.email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="fixed">Password</ion-label>
              <ion-input v-model="form.pass"></ion-input>
            </ion-item>
          </div>
        </div>

        <div class="buttons">
          <ion-button @click="validateForm">Sign up</ion-button>
        </div>
        <div :style="{ marginTop: '2rem' }">
          <p id="title-about-me">OR</p>
        </div>

        <div class="other-signup" style="justify-between">
          <ion-icon
            :icon="logoFacebook"
            :style="{ fontSize: '60px', color: '#4267B2'}"
          ></ion-icon>
          <ion-icon
            :icon="logoGoogle"
            :style="{ fontSize: '60px', color: '#DB4437'}"
          ></ion-icon>
        </div>

        <p v-if="!form.isValid">Invalid Login</p>
      </div>
      <the-footer />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { IonContent, IonPage } from '@ionic/vue'
import { logoGoogle, logoFacebook } from 'ionicons/icons'

export default {
  components: { TheHeader, TheFooter, IonPage, IonContent },

  setup() {
    return {
      logoFacebook,
      logoGoogle
    }
  },

  data() {
    return {
      accountType: 'firma',
      form: {
        firma: '',
        meno: '',
        priezvisko: '',
        email: '',
        pass: '',
        isValid: true
      }
    }
  },

  methods: {
    segmentChanged(ev: CustomEvent) {
      this.accountType = ev.detail.value === 'firma'
    },

    validateForm() {
      const validFirma = !!this.form.firma && !!this.form.email && !!this.form.pass
      const validUser = !!this.form.meno && this.form.priezvisko && !!this.form.pass

      if ((this.accountType && validFirma) || (!this.accountType && validUser)) {
        this.form.isValid = true
        alert('good login')
      } else {
        this.form.isValid = false
        alert('bad login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.signup {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: center;
  flex-wrap: nowrap;
  align-items: center;
}

.searchbar {
  margin: 1rem 25vw 5rem 25vw;
}

.button {
  margin-top: 3rem;
}

#title-about-me {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(190, 190, 190);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  word-spacing: 0.3rem;
  margin: 0;
  text-align: center;
  justify-content: center;
}

#title-about-me::before {
  margin-right: 20px;
  content: '';
  display: block;
  width: 240px;
  height: 1px;
  background: rgb(190, 190, 190);
}

#title-about-me::after {
  margin-left: 20px;
  content: '';
  display: block;
  width: 240px;
  height: 1px;
  background: rgb(190, 190, 190);
}

.other-signup {
  display: center;
  padding: 0px 250px;
  
}
</style>
