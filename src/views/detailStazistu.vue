<template>
  <ion-page>
    <TheHeader />

    <ion-content>
      <br />
      <br />
      <br />
      <ion-list lines="none">
        <ion-grid class="ion-margin-bottom">
          <ion-row class="row-zarovnanie">
            <ion-col size="6">
              <img class="pfp" src="@/views/img/stazista.jpg" alt="Fotografia stazistu" />
            </ion-col>
            <ion-col size="4">
              <h1 class="name-title ion-margin-top">Roland Csiba 69 rokov</h1>
              <p
                >Bavi ma programovat a chcem sa v tom zlepsovat. mam rad zvieratka a hokej. v
                programovani nemam moc velku prax ale som ochohotny tomu obetovat vsetok volny cas a
                byt v tom najlepsi
              </p>
              <ion-grid>
                <ion-row>
                  <ion-col size="12">
                    <div class="kontakt-info">
                      <p class="title">Email</p>
                      <p>pojebSaBugala@gmail.com</p>
                    </div>
                    <div class="kontakt-info ion-margin-top">
                      <p class="title">Number</p>
                      <p>934820390</p>
                    </div>
                    <div class="kontakt-info">
                      <p class="title">IG</p>
                      <p>sladky_rolko</p>
                    </div>
                    <ion-button class="button">Kontaktovat</ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-list>
      <ion-grid>
        <ion-row>
          <ion-col class="zarovnanie" size="6">
            <h1 class="size">Miesto staze</h1>
            <p class="sub-title">Bratislava, alebo remote odkialkolvek z domu</p>
          </ion-col>
          <ion-col class="zarovnanie" size="6">
            <h1 class="size">Vzdelanie</h1>
            <p class="sub-title">Halova, Skola pre mentalne retardovane deti</p>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col class="zarovnanie" size="12">
            <h1 class="size">Licencie a certifikaty</h1>
            <p class="sub-title">Cisco CCNA 1</p>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col class="zarovnanie" size="6">
            <h1 class="size">Pozadovany plat</h1>
            <p class="sub-title">Od 5E na hodinu</p>
          </ion-col>
          <ion-col class="zarovnanie" size="6">
            <h1 class="size">Prax</h1>
            <p class="sub-title">Wezeo, IBM, Tvoja mamka s.r.o.</p>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col class="zarovnanie" size="12">
            <h1 class="size">Skills</h1>
            <p class="sub-title">C++, C, Python, Web Dev</p>
          </ion-col>
        </ion-row>
      </ion-grid>
      <section-title subUp="Nieco" title="Sponsor" />

      <div class="sponsors" :style="{ marginBottom: '6rem' }">
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
      <the-footer />
    </ion-content>
  </ion-page>
</template>

<script>
import { logoStackoverflow, logoApple, logoJavascript } from 'ionicons/icons'
import { heartOutline, homeOutline } from 'ionicons/icons'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import SectionTitle from '@/components/SectionTitle.vue'

export default {
  components: { TheHeader, SectionTitle, TheFooter },
  data() {
    return {
      heartOutline,
      homeOutline
    }
  },

  setup() {
    return {
      logoStackoverflow,
      logoApple,
      logoJavascript
    }
  },

  async created() {
    try {
      this.interns = await this.$axios.get_data('interns')
    } catch (error) {
      this.$toast.error(error)
    }
  }
}
</script>

<style lang="scss" scoped>
.img-wrapper {
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5%;
    width: 20%;
  }
}

.fotka {
  display: flex;
  flex-direction: column;
}

.name {
  display: flex;

  align-items: center;
}

.zarovnanie {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  width: 10rem;
}

.icons-zarovnanie {
  display: flex;
  align-items: center;
  margin: 0px;
  justify-content: center;
}

.kokot {
  background: purple;
  background-color: purple;
  width: 80%;
}

.pfp {
  border-radius: 5px;
}

.row-zarovnanie {
  display: flex;
  justify-content: center;
}

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

.title {
  font-weight: 600;
}

.size {
  margin: 0;
  font-size: 2.2rem;
  font-weight: 600;
}

.sub-title {
  font-size: 0.9rem;
  word-spacing: 0.2rem;

  letter-spacing: 0.1rem;
  color: rgb(127, 132, 148);
  font-weight: 500;
}

.name-title {
  font-weight: 700;
}
</style>
