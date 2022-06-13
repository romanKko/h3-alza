<template>
  <ion-header>
    <ion-toolbar>
      <div class="header-wrapper d-flex justify-between">
        <div class="d-flex justify-between">
          <h2><a href="/onboarding">WorkHub</a></h2>
          <ion-icon
            :icon="logoAmplify"
            :style="{ fontSize: '40px', color: '#A760FF' }"
          ></ion-icon>
          <div class="links">
            <ul class="d-flex">
              <li>
                <a href="/onboarding">Home</a>
              </li>
              <li>
                <a class="" href="/detail-staze">Detail Staze</a>
              </li>
              <li>
                <a class="" href="/detail-stazistu">Detail Stazistu</a>
              </li>
              <li>
                <a class="" href="/list-stazistov">List Stazistov</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="d-flex ion-justify-content-around">

          <ion-button class="sign-up button-native" href="login" fill="outline">Prihlásiť sa</ion-button>
          <ion-icon @click="openMenu()" class="menu-button" style="display: none" :icon="menu"/> 
        </div>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { IonHeader } from '@ionic/vue'
import { logoAmplify, menu } from 'ionicons/icons'
import { menuController } from '@ionic/vue';

export default {
  components: {
    IonHeader
  },

  setup() {
    return {
      logoAmplify,
      menu,
      menuController
    }
  },

  methods: {
    signUp() {
      this.$router.push({ name: 'Sign Up' })
    },

    openMenu() {
      menuController.enable(true, 'menu');
      menuController.open('menu');
    }
  }
}
</script>
<style lang="scss" scoped>
#logo {
  width: 50px;
  height: 50px;
}

.header-wrapper {
  // display: flex;
  // justify-content: space-between;
  padding: 0px 20px;
}



ul {
  list-style: none;
}

li {
  padding: 0px 10px;
}

h2 {
 margin: 0px;
}

a {
  text-decoration: none;
  color: black;
}

.sign-up {
  transition-duration: 300ms;
  color: red !important;
  fill: blue;
}

.sign-up:hover {
 --background: blue;
}
// .header {
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   align-content: center;
//   padding-top: 0.5rem;
// }

.links {
  
  width: 100%;
}


//   a {
//     margin: 0 2rem 0 0;
//   }
// }

// ion-title {
//   width: 18rem;
//   padding-left: 0px !important;
// }

// .nav-text {
//   color: white !important;
//   text-decoration: none;
// }

// .sign-up {
//   max-width: 100px;
//   margin-left: 30vw;
// }

// a {
//   color: black;
//   text-decoration: none;
//   font-weight: bold;
// }

// .searchbar {
  
// }

// a:hover {
//   color: gray;
// }

@media (max-width: 800px) {
  .links {
    display: none;
  }
  .sign-up {
    display: none;
  }
  .menu-button{
    display: block !important;
  }
}


</style>
