<template>
  <ion-page style="--ion-background-color: white;">
    <ion-header>
     
      <ion-toolbar color="secondary">
        <img src="./img/expatriate.png"/>
        <ion-title>romanKko</ion-title>
        <ion-button slot="end">Sign up</ion-button>
        
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
       
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
}
</script>
<style scoped>
  img {
    height: 50px;
    width: 50px;
  }
</style>