<template>
  <ion-page class="neviem">
    <ion-content>
      <the-header />
      <div class="width">
        <ion-list lines="none" class="vsetko" v-for="intern in interns" :key="intern.id">
          <ion-item>
            <div class="background">
				<h1>{{ intern.meno }}</h1>
              <img
                class="ion-margin-top sirka"
                src="@/views/img/stazista.jpg"
                alt="Fotografia stazistu"
              />
            </div>
          </ion-item>
        </ion-list>
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

  data() {
	return {
			interns: null,
		}
	},

  async created() {
    try {
      this.interns = await this.$axios.get_data('/users') //firms, jobs
      console.log(this.interns)
    } catch (error) {
      // this.$toast.error(error)
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
  }
}

.background {
  width: 10000px !important;
  background-color: blue;
}
</style>
