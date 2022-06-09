<template>
  <ion-page style="--ion-background-color: white">
    <the-header />

    <ion-content :fullscreen="true">
      <div class="title">
        <h1>Frontend Developer</h1>
      </div>

      <div class="head">
        <img class="pfp" src="./img/expatriate.png" alt="" />
      </div>

      <div class="basic-info">
        <ion-button @click="apply()">Apply</ion-button>
        <p class="kontakt">Tel. c.: +421 921 837 293</p>
        <div class="plat">$ 1.000 - $ 2.000 / monthFf</div>
      </div>

      <div class="content">
        <div class="background ion-padding">
          <p class="info">
            Do nášho tímu hľadáme junior, medior aj senior Java Fullstack developerov na inovatívne
            projekty v oblasti digitalizácie nemeckých samospráv a s tým súvisiace nastavovanie
            trendov v tejto oblasti. Sme súčasťou komunity, ktorá pracuje na spoločnom frameworku, s
            cieľom posunúť digitálnu komunikáciu občana so štátom na novú úroveň. Aktuálne vytvárame
            nové systémy pre prihlasovanie a evidenciu motorových vozidiel, evidenciu vodičských
            oprávnení a ďalšie. Naše produkty používajú zákazníci vo viacerých nemeckých
            veľkomestách ako napr. Berlín, Hamburg, alebo Essen, ale aj súkromné spoločnosti ako
            Volkswagen.
          </p>
        </div>
        <br />
        <div class="background ion-padding">
          <p class="info">
            Pozícii vyhovujú uchádzači so vzdelaním stredoškolské s maturitou vysokoškolské I.
            stupňa vysokoškolské II. stupňa vysokoškolské III. stupňa Vzdelanie v odbore Informačné
            technológie Jazykové znalosti Anglický jazyk - Mierne pokročilý (B1) a Slovenský jazyk -
            Stredne pokročilý (B2) Pozícia je vhodná pre absolventa Áno Osobnostné predpoklady a
            zručnosti • Java – pokročilý • SQL – pokročilý • zodpovednosť a chuť pracovať v tíme
            Výhodou: • Solid, Clean Code, Design Patterns • Javascript • OSGI • Hibernate • HTML,
            CSS • Oracle • znalosť nemčiny
          </p>
        </div>
      </div>
      <the-footer />
    </ion-content>
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

  methods: {
    apply() {
      alert('Apply')
    }
  }
}
</script>
<style scoped>
.title {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}

.title > h1 {
  font-weight: bold;
  font-size: 2rem;
}

.head {
  background-image: url(./img/office.webp);
  margin: 1rem 10vw;
  background-repeat: no-repeat;
  height: 100%;
}

.basic-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20vw;
  justify-content: space-evenly;
  margin: 0 10vw 0 50vw;
}

.basic-info > div {
  padding: 1rem;
  border-radius: 15px;
  color: white;
}

.content {
  display: flex;
  margin: 2rem 10vw;
  flex-direction: column;
}

ion-button {
  min-width: 80px;
}

.pfp {
  width: 226px;
  margin-top: 480px;
}



</style>
