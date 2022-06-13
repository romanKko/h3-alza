<template>
  <ion-page style="--ion-background-color: white">
    <ion-content>
      <the-header />
      <div class="title">
        <h1>Frontend Developer</h1>
      </div>

      <div class="head">
        <img src="./img/office.png" alt="bugala je kokotko co ma maly penis">
      </div>

      <div class="content">
        <div class="ion-padding">
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
        <div class="ion-padding">
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
      <div class="basic-info">
        <div class="plat">$ 1.000 - $ 2.000 / month</div>
        <ion-button @click="apply()">Apply</ion-button>
        <p class="kontakt">Tel. c.: +421 921 837 293</p>
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
<style lang="scss" scoped>
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

.head{
  img {
      width: 100%;
      height: 30%;
  }  
}

.basic-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20vw;
  justify-content: center !important;
  margin: 0;
}

.plat {
  color: black !important;
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

.info {
  /* height: ; */
}

ion-button {
  min-width: 80px;
  max-width: 130px;
}

.pfp {
  width: 226px;
  margin-top: 480px;
}
</style>
