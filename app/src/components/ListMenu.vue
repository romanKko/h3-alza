<template>
    <ion-menu side="end" menu-id="menu" content-id="main">
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="main-container">
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
            </div>
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
        },
        closeMenu() {
            menuController.enable(false, 'menu')
            menuController.close('menu')
        },
        signUp() {
            this.closeMenu();
            this.$router.push({ name: 'Sign Up' })
        }
    }
}
</script>

<style>
.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

ion-list {
    width: 100%;
}

ion-item {
    --padding-start: 20px;
    --padding-end: 20px;
}

a { 
    text-decoration: none;
    color: black !important;
}
.sign-up { 
    width: 80%;
    margin-top: 10px;
}
</style>