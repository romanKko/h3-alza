<template>
  <ion-page>
    <ion-content>
        <ion-grid>
            <ion-row>
                <ion-col size="4" class="width" v-for="card in 10" :key="card">
                    <ion-card>
                        <img src="./img/staz.png" />
                        <ion-card-header class="d-flex">
                        <ion-card-title class="name">Roland Csibrei</ion-card-title>
                        <ion-icon class="icon" :icon="heartOutline"></ion-icon>
                        </ion-card-header>
                        <ion-card-content>
                        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the
                        capital of the Wisconsin Territory in 1836.
                        </ion-card-content>
                        <hr class="hr">
                        <ion-card-content class="info">
                            Front-end
                        </ion-card-content>
                        <hr class="hr">
                        <ion-card-content class="info">
                            Dunajska Streda
                        </ion-card-content>
                        <hr class="hr">
                        <ion-card-content class="info">
                            5$
                        </ion-card-content>
                        <ion-card-content class="buttons">
                            <ion-button>
                            Zobraziť profil
                            </ion-button>
                            <ion-button>
                            Kontaktovať
                            </ion-button>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {heartOutline} from 'ionicons/icons';


export default {
    data() {
        return{
            heartOutline,
        }
    }

}
</script>

<style>

ion-card{
    border-radius: 0px;
}

.hr {
  border-bottom: 1px solid rgba(222, 226, 230, 1);
  width: 100%;
  margin: 0px;
}

.info{
    height: 50px;
    display: flex;
    align-items: center;
}

.name{
    margin-bottom: 30px;
}

ion-button{
    width: 100%;
}

.buttons{
    display: flex;
    flex-direction: row;
}

.width{
    width: 345px !important;
}

.d-flex{
    display: flex;
    
    justify-content: space-between;
}

.icon{
    font-size: 30px;
    color: red;
}
</style>
