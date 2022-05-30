<template>
  <ion-page>
    <ion-content>
      <ion-card v-for="card in 10" :key="card">
        <img src="./img/staz.png" />
        <ion-card-header>
          <ion-card-subtitle>Destination</ion-card-subtitle>
          <ion-card-title>Madison, WI</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the
          capital of the Wisconsin Territory in 1836.
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
export default {}
</script>

<style></style>
