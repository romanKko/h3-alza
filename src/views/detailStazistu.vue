<template>
  <ion-page >
    <TheHeader />

    <ion-content>
        <br>
        <br>
        <br>
    <ion-list lines="none">
        <ion-grid class="ion-margin-bottom">
            <ion-row class="row-zarovnanie">
                <ion-col size="6">
                    <img
                        class="pfp"
                        src="@/views/img/stazista.jpg"
                        alt="Fotografia stazistu"
                    />
                </ion-col>
                <ion-col size="4">
                    <h1 class="size ion-margin-top">Roland Csiba 69 rokov</h1>
                    <p
                        >Bavi ma programovat a chcem sa v tom zlepsovat. mam rad zvieratka a hokej. v
                        programovani nemam moc velku prax ale som ochohotny tomu obetovat vsetok volny cas a
                        byt v tom najlepsi
                    </p>
                    <ion-grid>
                        <ion-row>
                            <ion-col size="12">
                                <h1>Kontakt</h1>
                                <p>Cisco CCNA 1</p>
                                <p>Email: pojebSaBugala@gmail.com</p>
                                <p>Number: 6969699969669</p>
                                <p>IG: ujo_matej</p>
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
                    <p>Bratislava, alebo remote odkialkolvek z domu</p>
                  </ion-col>
                  <ion-col class="zarovnanie" size="6">
                    <h1 class="size">Vzdelanie</h1>
                    <p>Halova, Skola pre mentalne retardovane deti</p>
                  </ion-col>
              </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-row>
                <ion-col class="zarovnanie" size="12">
                    <h1 class="size">Licencie a certifikaty</h1>
                    <p>Cisco CCNA 1</p>
                </ion-col>
            </ion-row>
        </ion-grid>
        <ion-grid>
            <ion-row>
                <ion-col class="zarovnanie" size="6">
                    <h1 class="size">Pozadovany plat</h1>
                    <p>Od 5E na hodinu</p>
                </ion-col>
                 <ion-col class="zarovnanie" size="6">
                     <h1 class="size">Prax</h1>
                     <p>Wezeo, IBM, Tvoja mamka s.r.o.</p>
                </ion-col>
            </ion-row>
        </ion-grid>
         <ion-grid>
            <ion-row>
                <ion-col class="zarovnanie " size="12">
                    <h1 class="size">Skills</h1>                 
                    <p>C++, C, Python, Web Dev</p>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { heartOutline, homeOutline  } from 'ionicons/icons'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'


export default {
  components: {TheHeader},
   data() {
    return {
      heartOutline,
      homeOutline,

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

.fotka{
    display: flex;
    flex-direction: column;
    
    
}

.name{
    display: flex;
    
    align-items: center;
}

.zarovnanie{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

.button{
    width: 10rem;
}

.icons-zarovnanie{
    display: flex;
    align-items: center;
    margin: 0px;
    justify-content: center;
}

.kokot{
    background: purple;
    background-color: purple ;
    width: 80%  ;
}

.pfp{
    border-radius: 5px;
}

.row-zarovnanie{
    display: flex;
    justify-content: center;
}
</style>
