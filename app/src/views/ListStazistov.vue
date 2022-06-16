<template>
  <ion-page>
    <ion-content>
      <the-header />
      <br />
      <br />
      <ion-grid class="ion-margin">
        <ion-row>
          <ion-col size="3">
            <ion-item>
              <ion-label>Typ</ion-label>
              <ion-select multiple="true">
                <ion-select-option value="">Front-End</ion-select-option>
                <ion-select-option value="">Backend</ion-select-option>
                <ion-select-option value="">Full Stack</ion-select-option>
                <ion-select-option value="">Iné</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>

          <ion-col size="3">
            <ion-item>
              <ion-label>Mesto</ion-label>
              <ion-select multiple="true">
                <ion-select-option value="">Bratislava</ion-select-option>
                <ion-select-option value="">Banská Bystrica</ion-select-option>
                <ion-select-option value="">Remote</ion-select-option>
                <ion-select-option value="">Other</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>

          <ion-col size="3">
            <ion-item>
              <ion-label>Plat</ion-label>
              <ion-select multiple="true">
                <ion-select-option value="">Do €200</ion-select-option>
                <ion-select-option value="">Do €400</ion-select-option>
                <ion-select-option value="">Do €1,000</ion-select-option>
                <ion-select-option value="">Nad €1,000</ion-select-option>
                <ion-select-option value="">Flexibilná</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>

          <ion-col size="3">
            <ion-item>
              <ion-label>Popularita</ion-label>
              <ion-select multiple="true">
                <ion-select-option value="">Najoblúbenejšie</ion-select-option>
                <ion-select-option value="">Najnovšie</ion-select-option>
                <ion-select-option value="">Relevantné</ion-select-option>
                <ion-select-option value="">Podľa počtu zamestnancov</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col size="4" class="width" v-for="intern in interns" :key="intern.id">
            <ion-card>
              <img src="./img/staz.png" />
              <ion-card-header class="d-flex">
                <ion-card-title class="name">{{ intern.meno }}</ion-card-title>
                <ion-icon class="icon" :icon="heartOutline"></ion-icon>
              </ion-card-header>
              <ion-card-content> Vek: {{ intern.vek }} </ion-card-content>
              <hr class="hr" />
              <ion-card-content class="info">Zameranie: {{ intern.vzdelanie }} </ion-card-content>
              <hr class="hr" />
              <ion-card-content class="info">Lokacia: {{ intern.bydlisko }}</ion-card-content>
              <hr class="hr" />
              <ion-card-content class="buttons">
                <ion-button @click="viewProfile()"> Zobraziť profil </ion-button>
                <ion-button> Kontaktovať </ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <div class="page-div">
        <ion-icon class="page-icon" :icon="arrowBackOutline"></ion-icon>
        <a href="" class="page">1</a>
        <a href="" class="page">2</a>
        <a href="" class="page">3</a>
        <ion-icon class="page-icon" :icon="arrowForwardOutline"></ion-icon>
      </div>

      <the-footer />
    </ion-content>
  </ion-page>
</template>

<script>
import { heartOutline, arrowBackOutline, arrowForwardOutline } from 'ionicons/icons'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: { TheHeader, TheFooter },
  data() {
    return {
      heartOutline,
      arrowBackOutline,
      arrowForwardOutline,
      interns: null
    }
  },

  async created() {
    try {
      this.interns = await this.$axios.get_data('/users')
      console.log(this.interns)
    } catch (error) {
      //this.$toast.error(error)
    }
  },
  methods: {
    viewProfile() {
      this.$router.push({ name: 'Detaily Stazistu' })
    }
  }
}
</script>

<style>
ion-card {
  border-radius: 0px;
}

.hr {
  border-bottom: 1px solid rgba(222, 226, 230, 1);
  width: 100%;
  margin: 0px;
}

.info {
  height: 50px;
  display: flex;
  align-items: center;
}

.name {
  margin-bottom: 30px;
}

ion-button {
  width: 100%;
}

.buttons {
  display: flex;
  flex-direction: row;
}

.width {
  width: 345px !important;
}

.d-flex {
  display: flex;

  justify-content: space-between;
}

.icon {
  font-size: 30px;
  color: red;
}

.page {
  text-decoration: none;
  font-size: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.page-div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-icon {
  color: var(--ion-color-primary, #3880ff);
  cursor: pointer;
}
</style>
