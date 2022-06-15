<template>
  <ion-page style="--ion-background-color: white">
    <the-header />
    <ion-content :fullscreen="true"> 
        
    </ion-content>
    <the-footer />
  </ion-page>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
    components: {
        TheHeader,
        TheFooter
    },
}
</script>

<style>

</style>