<template>
  <ion-page style="--ion-background-color: white">
    <ion-content :fullscreen="true">
      <the-header />

      <div class="head">
        <img src="./img/onboarding.svg" alt="" />
      </div>

      <div class="searchbar">
        <ion-item>
          <ion-searchbar placeholder="Vyhľadajte stáž, stážistu alebo firmu"></ion-searchbar>
        </ion-item>
      </div>

      <div class="categories">
        <h1 id="categories-title">Hľadám</h1>

        <div class="cards">


         
          <ion-card @click="findStaz()" class="card">
            <ion-card-header>
              <ion-card-title>Stáž</ion-card-title>
              <div class="hr"> </div>
            </ion-card-header>
             
            <ion-card-content class="card1">
                 <img class="stazistov" src="./img/stazistov.png" alt="" />
            </ion-card-content>
          </ion-card>



<div class="haha">

</div>



          <ion-card @click="findStazistov()" class="card">
            <ion-card-header>
              <ion-card-title>Stážistov</ion-card-title>
              <div class="hr"> </div>
            </ion-card-header>

            <ion-card-content>
                <img class="staz" src="./img/staz.png" alt="" />
            </ion-card-content>
          </ion-card>
  
        </div>
      </div>
      <the-footer />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    IonContent,
    IonPage,
    TheHeader,
    TheFooter
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

.card{
    min-width: 350px;
    min-height: 200px;
    max-height: 200px;
    background: rgba(46, 156, 236, 1) ;
}

#categories-title {
  font-size: 5rem;
  font-weight: bold;
  color: #152536;
}

.hr {
  border-bottom: 1px solid rgba(45, 130, 212, 1);
  margin: 10px 0;
  width: 100%;
}


.card1{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

ion-card-header{
    padding-bottom: 0px !important;
}

.staz{
    margin-top: -58px;
}

.stazistov{
    margin-top: -20px;
}

ion-card-title{
    color: white;
    font-weight: 500;
}

.haha{
    width: 300px;
}

</style>
