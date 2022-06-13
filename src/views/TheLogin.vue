<template>
  <ion-page>
    <TheHeader />
    <ion-content>
      <form @submit.prevent="login()" id="form" class="d-flex ion-justify-content-evenly ion-align-items-center flex-collumn">

        <div class="image-wrapper d-flex-center">
          <p>Prihlásenie</p> 
        </div>
        
        <ion-list lines="none" class="custom-background">
          <ion-item class="ion-margin-bottom"> 
            <ion-input v-model="form.login" type="email" placeholder="E-mail"></ion-input>
          </ion-item>
          
          <ion-item class="ion-margin-bottom"> 
            <ion-input v-model="form.password" type="password" placeholder="Heslo"></ion-input>
          </ion-item>
        </ion-list>
        
        <ion-button type="submit" expand="block" shape="round">Prihlásiť sa</ion-button>
      
      </form>
    </ion-content>
    <TheFooter />
  </ion-page>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  components: {
    TheHeader, TheFooter
  },

  data() {
    return {
      form: {}
    }
  },
  methods: {
    async login() {
      //if ( !(await this.v$.$validate()) ) return
			this.$wLoader.startLoading('Logging in...')
			try {
				await this.$store.dispatch('wAuth/login', this.form)
				this.$router.replace('')
			} catch (error) {
				this.$wToast.error(error)
			}
			this.$wLoader.clearLoading()
    }
  }
} 
</script>

<style lang="scss" scoped>
  ion-content {  
    .image-wrapper {
      margin-top: 30px;
      width: 100%;
      height: fit-content;
      // img {
      //   margin: 0;
      //   height: auto;
      //   width: 75px;
      // }
      p {
        font-size: 30px;
        margin: 0 0 0 15px;
        font-weight: 700;
        line-height: 30px;
      }
    }
    #form {
      width: 100%;
      height: 100%;
      padding-left: 10%;
      padding-right: 10%;
    }
    ion-list {
      width: 100%;
      max-width: 700px;
    }
    .text-wrapper {
      width: fit-content;
      height: fit-content;
      margin: 30px auto 0;
      text-align: center;
      p {
        color: #628cff;
        font-size: 14px;
      }
      a {
        color: #628cff;
        text-decoration: underline;
        font-size: 14px;
      }
    }
    ion-button {
      width: 85%;
      max-width: 500px;
      font-size: 16px;
      text-transform: initial;
      border-radius: 50px;
      box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);
      --box-shadow: none;
    }
  }
  ion-item {
    height: 45px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    --background: #fafafa;
    ion-input {
      font-size: 16px;
    }
  }
  @media (prefers-color-scheme: dark) {
    ion-item {
      --background: #1c1c1d;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
</style>