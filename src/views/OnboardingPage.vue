<template>
  <ion-page style="--ion-background-color: white">
    <ion-content :fullscreen="true">
      <the-header />

      <div class="head">
        <div class="head-title">
          <h1>SusAlza3</h1>
          <p
            >Use the GUI to enable/disable the meta access. You can check if meta access is enabled
            by calling the verifyMeta method again.</p
          >
        </div>
        <img src="./img/onboarding.svg" alt="" class="onboarding-img" />
      </div>

      <div class="searchbar">
        <ion-item>
          <ion-searchbar placeholder="Vyhľadajte stáž, stážistu alebo firmu"></ion-searchbar>
        </ion-item>
      </div>

      <section-title subUp="Spravna volba" title="Vyber najlepsich" />

      <div>
        <ion-grid class="qualities-grid">
          <ion-row>
            <ion-col>
              <div class="qualities-icon-div">
                <ion-icon
                  :icon="shieldCheckmarkOutline"
                  :style="{ marginRight: '4px', fontSize: '32px', marginTop: '10px' }"
                ></ion-icon>
                <h1>Bezpecnost</h1>
              </div>

              <p
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at aliquid
                veritatis dicta maiores itaque voluptates neque deserunt magni? Nobis eius eos sed
                esse, ipsum nam aliquid iste ipsa obcaecati!</p
              >
            </ion-col>

            <ion-col>
              <div class="qualities-icon-div">
                <ion-icon
                  :icon="schoolOutline"
                  :style="{ marginRight: '4px', fontSize: '32px', marginTop: '10px' }"
                ></ion-icon>
                <h1>Skusenosti</h1>
              </div>

              <p
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae eius sequi eum,
                pariatur officia maiores eligendi, velit quas hic consectetur dolorem provident!
                Enim quis corporis consectetur, incidunt vitae dolore sapiente?</p
              >
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <div class="qualities-icon-div">
                <ion-icon
                  :icon="diamondOutline"
                  :style="{ marginRight: '4px', fontSize: '32px', marginTop: '10px' }"
                ></ion-icon>
                <h1>Vyplata</h1>
              </div>

              <p
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos eveniet
                suscipit. Est culpa beatae molestias magnam debitis id tenetur doloribus blanditiis,
                odio quia omnis natus consequuntur sapiente veritatis sunt.</p
              >
            </ion-col>

            <ion-col>
              <div class="qualities-icon-div">
                <ion-icon
                  :icon="shieldCheckmarkOutline"
                  :style="{ marginRight: '4px', fontSize: '32px', marginTop: '10px' }"
                ></ion-icon>
                <h1>Hello</h1>
              </div>

              <p
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aliquam a
                doloribus quae exercitationem libero reiciendis. Quis pariatur, ea, nisi iure a
                quasi, possimus laborum rem quae dolorem incidunt itaque!</p
              >
            </ion-col>

            <ion-col>
              <div class="qualities-icon-div">
                <ion-icon
                  :icon="shieldCheckmarkOutline"
                  :style="{ marginRight: '4px', fontSize: '32px', marginTop: '10px' }"
                ></ion-icon>
                <h1>Hello</h1>
              </div>

              <p
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio qui architecto
                incidunt placeat cum atque esse quibusdam quas enim ea quod culpa alias amet dicta
                omnis, voluptates ipsa magni deserunt.</p
              >
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>

      <section-title subUp="Nieco" title="Sponsor" />

      <div class="sponsors">
        <ion-icon
          :icon="logoStackoverflow"
          :style="{ marginRight: '128px', fontSize: '72px', color: '#ed7d0c' }"
          class="sponsor-float"
        ></ion-icon>
        <ion-icon
          :icon="logoJavascript"
          :style="{ marginRight: '128px', fontSize: '72px', color: 'orange' }"
          class="sponsor-float"
        ></ion-icon>
        <ion-icon
          :icon="logoApple"
          :style="{ fontSize: '72px', color: '#aaa9ad' }"
          class="sponsor-float"
        ></ion-icon>
      </div>

      <div class="categories">
        <section-title
          subUp="Vybudujte si svoju budúcnosť"
          title="Vyberte si, čo si hľadáte"
        ></section-title>

        <div class="cards">
          <ion-card @click="findStaz()" class="card">
            <ion-card-header>
              <ion-card-title>Stáž</ion-card-title>
              <div class="hr"> </div>
            </ion-card-header>

            <ion-card-content>
              <img class="stazistov" src="./img/stazistov.png" alt="" />
            </ion-card-content>
          </ion-card>

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
import { IonContent, IonPage, IonIcon } from '@ionic/vue'
import {
  shieldCheckmarkOutline,
  schoolOutline,
  diamondOutline,
  logoStackoverflow,
  logoApple,
  logoJavascript
} from 'ionicons/icons'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import SectionTitle from '@/components/SectionTitle.vue'

export default {
  components: {
    IonContent,
    IonPage,
    TheHeader,
    TheFooter,
    SectionTitle,
    IonIcon
  },

  setup() {
    return {
      shieldCheckmarkOutline,
      diamondOutline,
      schoolOutline,
      logoStackoverflow,
      logoApple,
      logoJavascript
    }
  },

  methods: {
    findStaz() {
      this.$router.push({ name: 'List Stazi' })
    },
    findStazistov() {
      this.$router.push({ name: 'List Stazistov' })
    }
  }
}
</script>
<style lang="scss" scoped>
ion-card-header {
  padding-bottom: 0px !important;
}

ion-card-title {
  color: white;
  font-weight: 500;
}

.head {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

.head-title {
  width: 30vw;

  h1 {
    font-size: 6rem;
    font-weight: 600;
    margin-bottom: 0;
  }

  p {
    font-size: 3rem;
    margin-top: 0;
    font-weight: 300;
    color: rgb(43, 43, 43);
  }
}

.searchbar {
  margin: 1rem 25vw 5rem 25vw;
}

.onboarding-img {
  width: 50vw;
}

.categories {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.cards {
  display: flex;
  flex-direction: row;

  ion-card {
    border-radius: 10px;
  }

  ion-card:hover {
    cursor: pointer;
    background-color: rgb(35, 143, 220);
    transition: background-color 0.2s ease-out;
  }
}

.card {
  height: 250px;
  width: 300px;
  transition: background-color 0.2s ease-out;
  background: rgba(46, 156, 236, 1);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ion-card-content {
    display: flex;
    justify-content: center;
  }
}

.qualities-icon-div {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

.qualities-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ion-col {
    margin: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 20vw;
  }
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

// ---- SPONSORS ----
.sponsors {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

@keyframes floatSponsor {
  from {
    transform: translateY(calc(100% - 17px));
  }
  to {
    transform: translateY(calc(100% - 10px));
  }
}
.sponsor-float {
  animation: floatSponsor infinite alternate ease-in-out 1s;
}
</style>
