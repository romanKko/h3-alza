<template>
  <ion-page>
    <TheHeader />

    <ion-content>
      <div class="pozadie">
          <br><br><br>
        <ion-grid class="">
          <ion-row class="flex justify align ion-margin">
            <ion-col size="5" class=" ">
              <H1 class="name-title">Roland Csibrei</H1>
              <p class="main-info">
                Bavi ma programovat a chcem sa v tom zlepsovat. mam rad zvieratka a hokej. v
                programovani nemam moc velku prax ale som ochohotny tomu obetovat vsetok volny cas a
                byt v tom najlepsi
              </p>
              <div class="kontakt-info flex">
                <p class="vyrovnanie main-text">Email</p>
                <p class="vyrovnanie">rolko@gmail.com</p>
              </div>
              
              <div class="kontakt-info flex">
                <p class="vyrovnanie main-text">Phone</p>
                <p class="vyrovnanie">39384333</p>
              </div>
              <br>
              <br>
              <ion-button class="button">kontaktovat</ion-button>
            </ion-col>
            <ion-col size="6" class="flex justify align">
              <div class="pfp-pozadie flex align justify">
                  <img src="https://chrien.sk/wp-content/uploads/2017/11/profile-clipart-end-user-20.png" alt="">
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>

      <div class="certifikaty flex aling justify">
        <h1 class="text-certifikaty flex align justify">Certifikaty</h1>

        <ion-grid>
          <ion-row>
            <ion-col size="">
              <img
                src="https://i.pinimg.com/736x/e8/8a/80/e88a800eb3485b6708127f042eab57e2.jpg"
                alt=""
              />
            </ion-col>
            <ion-col size="">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSc-KookOOVArSyS3kKW10RC_akAlCe5t4vw&usqp=CAU"
                alt=""
              />
            </ion-col>
            <ion-col size="">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZq411juNT4B_jJc_b6MqD3uRaY3E4pv_vQ&usqp=CAU"
                alt=""
              />
            </ion-col>
            <ion-col size="">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoA9XeyQ1rHyGZuzXQ7mMtgxAn9StwHfP8DQ&usqp=CAU"
                alt=""
              />
            </ion-col>
            <ion-col size="">
              <img
                src="https://pbs.twimg.com/profile_images/1534569078391808001/Zu8tn71k_400x400.jpg"
                alt=""
              />
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <div class="skills">
        <h1 class="flex align justify">Skills</h1>
        <ion-grid>
          <ion-row class="flex justify align">
            <ion-col size="3">
              <ion-card class="radius">
                <ion-card-header>
                  <div class="flex justify column align">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="">
                    <ion-card-title>Python</ion-card-title>
                  </div>
                </ion-card-header>
                <ion-card-content>
                  Venujem sa tomu dlho ale stále je čo zlepšovať
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col size="3">
              <ion-card class="radius">
                <ion-card-header>
                  <div class="flex justify column align">
                      <img src="data:image/png;base64,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" alt="">
                    <ion-card-title>Js</ion-card-title>
                  </div>
                </ion-card-header>
                <ion-card-content>
                  niesom v tom moc skúsený ale baví ma to a chcem sa to naučiť
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col size="3">
              <ion-card class="radius">
                <ion-card-header>
                  <div class="flex justify column align">
                      <img src="data:image/png;base64,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" alt="">
                    <ion-card-title>Css</ion-card-title>
                  </div>
                </ion-card-header>
                <ion-card-content>
                  nieje tu čo zlepšovať poznám tento jazyk uplne dokonale
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <h1 class="flex justify align odporucany">Prečo práve ja?</h1>
          <p class="flex justify align odporucany-text">
              Moje chapanie a vzdelávanie je uplne na inom levelly, určite to neolutujete ak si práve mňa vyberiete
          </p>
      <div class="miesto">
        <ion-grid>
          <ion-row>
            <ion-col class="flex align justify" size="">
              <img
                class="place-img"
                src="https://www.greatplacetowork.com/images/kapost/hospitality.png"
              />
            </ion-col>
            <ion-col size="" class="flex column justify">
              <div class="miesto-div">
                <p class="miestos">Miesto stáže</p>
                <p class="place">Dunajska Streda alebo hociaky remote z domu</p>
              </div>
              <div class="miesto-div">
                <p class="miestos">Vzdelanie</p>
                <p class="place">Halova 16, Komenského</p>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
<br>
<br>
<h1 class="flex justify align odporucany">Hľadáš si letnú stáž?</h1>
<p class="flex justify align odporucany-text"
    >Pokiaľ si hladáš letnú stáž si na správnom mieste, tu si môžeš vybrať z najlepších slovenských firiem
</p>
<br>
<br>
      <div class="flex justify align">
        <div class="prax">
          <h1 class="flex justify margin prax-text">Prax</h1>
          <br />
          <br />
          <ion-grid class="flex column align justify">
            <ion-row>
              <ion-col>
                <ion-card class="radius radius-card">
                  <ion-card-header>
                    <div class="flex justify column align">
                      <img
                        class="prax-img"
                        src="data:image/png;base64,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"
                        alt=""
                      />
                    </div>
                  </ion-card-header>
                  <div>
                    <ion-card-content class="padding-dopice">
                      <ion-card-title>Wezeo</ion-card-title>
                    </ion-card-content>
                    <ion-card-content>
                      Stážoval som tu celé minulé leto na pozicii stylera
                    </ion-card-content>
                  </div>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card class="radius radius-card">
                  <ion-card-header>
                    <div class="flex justify column align">
                      <img
                        class="prax-img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKv1gaxT1OVK5IeniRHetBhorqWRhhoeKJRA&usqp=CAU"
                        alt=""
                      />
                    </div>
                  </ion-card-header>
                  <div>
                    <ion-card-content class="padding-dopice">
                      <ion-card-title>Alza</ion-card-title>
                    </ion-card-content>
                    <ion-card-content>
                      Pracoval som na pozícii upratovača ale iba chvílu, pretože ma táto práca nenapĺňala
                    </ion-card-content>
                  </div>
                </ion-card>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-card class="radius radius-card">
                  <ion-card-header>
                    <div class="flex justify column align">
                      <img
                        class="prax-img"
                        src="https://www.najzamestnavatel.sk/wp-content/uploads/ultimatemember/110/stream_photo_c8183ccf_a6741637773b5e1f952580d2c55728109d525474.png"
                        alt=""
                      />
                    </div>
                  </ion-card-header>
                  <div>
                    <ion-card-content class="padding-dopice">
                      <ion-card-title>Ibm</ion-card-title>
                    </ion-card-content>
                    <ion-card-content>
                      Popri škole tam dochádzam 
                    </ion-card-content>
                  </div>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card class="radius radius-card">
                  <ion-card-header>
                    <div class="flex justify column align">
                      <img
                        class="prax-img"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </div>
                  </ion-card-header>
                  <div>
                    <ion-card-content class="padding-dopice">
                      <ion-card-title>Apple</ion-card-title>
                    </ion-card-content>
                    <ion-card-content>
                      Spolupracoval som s Elonom Muskom na vývoji noveho ajfonu
                    </ion-card-content>
                  </div>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <div class="flex justify align">
        <div class="stazisti">
          <h1 class="flex justify align odporucany">Odporúčaný stážisti</h1>
          <p class="flex justify align odporucany-text"
            >Tu vám odporúčame najoblúbenejších stažistov
          </p>
         
          
          <ion-grid class="flex column align justify">
            <ion-row>
              <ion-col>
                <ion-card class="radius odporucany">
                  <ion-card-header>
                    <div class="flex justify column align">
                      <ion-card-content class="radius-info">
                        Hľadám si letnú stáž, baví ma programovať a chcem sa v tom nadalej zlepšovať
                      </ion-card-content>
                    </div>
                  </ion-card-header>
                  <div class="img-text flex align">
                    <img
                      class="img-card"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <div>
                      <ion-card-title class="title-radius">Roman Kravárik</ion-card-title>
                      <p>backend deweloper</p>
                    </div>
                  </div>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card class="radius odporucany">
                  <ion-card-header>
                    <div class="flex justify column align">
                      <ion-card-content class="radius-info">
                        Už sa neviem dočkať kedy si ma niaka firma vyberie, som zapálený programátor ktorý sa nebojí ukázať svoje skills
                      </ion-card-content>
                    </div>
                  </ion-card-header>
                  <div class="img-text flex align">
                    <img
                      class="img-card"
                      src="https://media-exp1.licdn.com/dms/image/C4D03AQFW6hLJBZTQFw/profile-displayphoto-shrink_200_200/0/1643929415835?e=1659571200&v=beta&t=iQY4GxM8am65ocAi6WkWlqwx9WPWkq4swG3lUQi41QA"
                      alt=""
                    />
                    <div>
                      <ion-card-title class="title-radius">Roland Csibrei</ion-card-title>
                      <p>štýler</p>
                    </div>
                  </div>
                </ion-card>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-card class="radius odporucany">
                  <ion-card-header>
                    <div class="flex justify column align">
                      <ion-card-content class="radius-info">
                        Som vásnivý programátor, neexistuje pre mňa žiadna prekážka na všetko sa pozerám s chladnou hlavou a v klude to vyriešim
                      </ion-card-content>
                    </div>
                  </ion-card-header>
                  <div class="img-text flex align">
                    <img
                      class="img-card"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <div>
                      <ion-card-title class="title-radius">Adam Brix</ion-card-title>
                      <p>Rager</p>
                    </div>
                  </div>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card class="radius odporucany">
                  <ion-card-header>
                    <div class="flex justify column align">
                      <ion-card-content class="radius-info">
                        venujem sa tomu už dlho, som v tom najlepší, čo viac dodať
                      </ion-card-content>
                    </div>
                  </ion-card-header>
                  <div class="img-text flex align">
                    <img
                      class="img-card"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-r0yizU5TyrnLSzR5OvLrIg7Uf1NFcROhYptgJnRlF4HOOeZ-Yn82Cs-zNczbhijGR34&usqp=CAU"
                      alt=""
                    />
                    <div>
                      <ion-card-title class="title-radius">Matej Glasnak</ion-card-title>
                      <p>backend deweloper</p>
                    </div>
                  </div>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </div>
      <the-footer />
    </ion-content>
  </ion-page>
</template>

<script>
import { heartOutline, homeOutline } from 'ionicons/icons'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: { TheHeader, TheFooter },
  data() {
    return {
      heartOutline,
      homeOutline,
      interns: null
    }
  },

  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex !important;
}

.column {
  flex-direction: column;
}

.justify {
  justify-content: center !important;
}

.align {
  align-items: center !important;
}

.pozadie {
  height: 30rem;
  background-color: rgba(243, 248, 255, 1);
}

.pfp-pozadie {
  background-color: white;
  border-radius: 1000px;
  height: 18rem;
  width: 18rem;
}

.certifikaty {
  background-color: #e2edff;
  flex-direction: column;
}

.text-certifikaty{
    font-weight: 700;
}
img {
  width: 8.25rem;
  height: 8rem;
  margin: 1rem;
}

.img-skills {
  height: 5rem;
  width: 5rem;
  background-color: red;
  border-radius: 1000px;
}



.prax {
  background: linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%);
  width: 60rem;
  height: 70rem;
  border-radius: 80px;
}

.radius-card{
    width: 20rem;
    height: 25rem !important;
    box-shadow: 0px 24px 32px -3px rgba(3, 9, 50, 0.04);
}

.button{
    width: 10rem;
}




.img-card {
  border-radius: 10000px;
}

.radius {
  border-radius: 30px;
  cursor: pointer;
  height: 20rem;
}

.radius-info {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.25rem;
  font-style: italic;
}

.title-radius {
  color: #3a8ef6;
}

.odporucany {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  font-style: normal;
}

.odporucany-text {
    color: #6c87ae;
  font-style: italic;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
}

.prax-img {
  border-radius: 200px;
}

.padding-dopice {
  padding-bottom: 0px !important;
}

.prax-text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 500;
  color: white;
}

.miestos {
  padding-right: 0.25rem;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 0px;
}

.place {
  color: #6c87ae;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
}

.place-img {
  height: 35rem;
  width: 40rem;
}

.name-title{
    color: rgba(58, 142, 246, 1);
    font-size: 2.5rem;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.vyrovnanie{
    margin: 0px !important;
    padding: 0px !important;
}

.main-text{
    color: rgba(58, 142, 246, 1);
    font-weight: 700;
    margin-right: 0.25rem !important; 
}

.main-info{
    font-weight: 400;
    color: #6c87ae;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
}

.odporucany{
    height: 20rem !important ;
}



</style>
