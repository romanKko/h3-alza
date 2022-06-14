<template>
  <ion-page style="--ion-background-color: white">
    <the-header />
    <ion-content :fullscreen="true">
      <div class="not-found">
        <h1>404</h1>
        <h2>The resource you are looking for does not exist :(</h2>
      </div>
    </ion-content>
    <the-footer />
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
  }
}
</script>
<style lang="scss" scoped>
.not-found {
  margin-top: 10rem;
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;

  h1 {
    margin-left: 250px;
    margin-top: -120px;
    position: absolute;
    font-weight: 900;
    font-size: 15rem;
    line-height: 204px;
    opacity: 0.05;
    text-shadow: 0px 6px 4px rgb(0 0 0 / 32%);
  }

  h2 {
    font-size: 3rem;
    font-weight: 200;
  }
}
</style>
