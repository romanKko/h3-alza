<template>
  <ion-page>
    <ion-content>
      <the-header />
<br>
<br>
      <ion-grid class="ion-margin">
          <ion-row>

              <ion-col size="3">
                    <ion-item>
                        <ion-label>Typ</ion-label>
                            <ion-select multiple="true">
                            <ion-select-option value="">frontend</ion-select-option>
                            <ion-select-option value="">backend</ion-select-option>
                            <ion-select-option value="">styl</ion-select-option>
                            <ion-select-option value="">ine</ion-select-option>
                        </ion-select>
                    </ion-item>
              </ion-col>

              <ion-col size="3">
                    <ion-item>
                        <ion-label>Mesto</ion-label>
                            <ion-select multiple="true">
                            <ion-select-option value="">Dunajska</ion-select-option>
                            <ion-select-option value="">Gyor</ion-select-option>
                            <ion-select-option value="">Dedo</ion-select-option>
                            <ion-select-option value="">Bratislava</ion-select-option>
                        </ion-select>
                    </ion-item>
              </ion-col>

               <ion-col size="3">
                    <ion-item>
                        <ion-label>Plat</ion-label>
                            <ion-select multiple="true">
                            <ion-select-option value="">neviem</ion-select-option>
                            <ion-select-option value="">neviem</ion-select-option>
                            <ion-select-option value="">neviem</ion-select-option>
                            <ion-select-option value="">neviem</ion-select-option>
                        </ion-select>
                    </ion-item>
              </ion-col>

               <ion-col size="3">
                    <ion-item>
                        <ion-label>Popularita</ion-label>
                            <ion-select multiple="true">
                            <ion-select-option value="">Najoblubenejsie</ion-select-option>
                            <ion-select-option value="">Najnovsie</ion-select-option>
                            <ion-select-option value="">Odporucane</ion-select-option>
                            <ion-select-option value="">Exoticke zeny</ion-select-option>
                        </ion-select>
                    </ion-item>
              </ion-col>
          </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col size="4" class="width" v-for="firm in firms" :key="firm.id">
            <ion-card>
              <img src="./img/staz.png" />
              <ion-card-header class="d-flex">
                <ion-card-title class="name">{{ firm.name }}</ion-card-title>
                <ion-icon class="icon" :icon="heartOutline"></ion-icon>
              </ion-card-header> 
              <ion-card-content>
                Lokacia firmy: {{ firm.location }}
              </ion-card-content>
              <hr class="hr" />
              <ion-card-content class="info">Ponukany plat: {{ firm.wage }} </ion-card-content>
              <hr class="hr" />
              <ion-card-content class="info">
                Popis: {{ firm.description }}</ion-card-content>
              <hr class="hr" />
              <ion-card-content class="buttons">
                <ion-button> Zobraziť profil </ion-button>
                <ion-button> Kontaktovať </ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <div class="page-div">
        <ion-icon class="page-icon" :icon="arrowBackOutline"></ion-icon>
        <a href="" class="page" >1</a>
        <a href="" class="page" >2</a>
        <a href="" class="page" >3</a>
        <ion-icon class="page-icon" :icon="arrowForwardOutline"></ion-icon>
      </div>

      <the-footer />
    </ion-content>
  </ion-page>
</template>

<script>
import { heartOutline, arrowBackOutline, arrowForwardOutline  } from 'ionicons/icons'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: { TheHeader, TheFooter },
  data() {
    return {
      heartOutline,
      arrowBackOutline,
      arrowForwardOutline,
      firms: null
    }
  },

    async created() {
    try {
      this.firms = await this.$axios.get_data('/firms')
      console.log(this.firms)
    } catch (error) {
      //this.$toast.error(error)
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

.page-div{
    display: flex;
    justify-content: center;
    align-items: center;
}

.page-icon{
    color: var(--ion-color-primary, #3880ff);
    cursor: pointer;
}
</style>
