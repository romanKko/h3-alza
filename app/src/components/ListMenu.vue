<template>
    <ion-menu side="end" menu-id="menu" content-id="main">
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>
                    <a href="/onboarding">Onboarding</a>
                </ion-item>
                <ion-item>
                    <a class="" href="/detail-staze">Detail Staze</a>
                </ion-item>
                <ion-item>
                    <a class="" href="/detail-stazistu">Detail Stazistu</a>
                </ion-item>
                <ion-item>
                    <a class="" href="/list-stazistov">List Stazistov</a>
                </ion-item>
                <ion-item>
                    <a class="" href="/list-stazi">List Stazi</a>
                </ion-item>
            </ion-list>
            <ion-button class="sign-up" @click="signUp()" fill="outline">Prihlasiť sa</ion-button>
        </ion-content>
    </ion-menu>
</template>

<script>
import { menuController } from '@ionic/vue';

export default {
    data() {
        return {
            menuController
        }
        
    },

    methods: {
        openMenu() {
            menuController.enable(true, 'menu');
            menuController.open('menu');
        }
    }
}
</script>

<style>

</style>