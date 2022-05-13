<template>
  <ion-page>
	<TheHeader />

	<ion-content>
		<div class="ion-text-center">
			<ion-list lines="none">
				<ion-item class="ion-text-center">
					<ion-label>user.name</ion-label>
				</ion-item>

				<ion-item class="img-wrapper">
					<img class="ion-margin-top" src="@/views/img/stazista.jpg" alt="Fotografia stazistu">
				</ion-item>
			</ion-list>

			<ion-row>
				<ion-col>
					<h1>O mne</h1>
					<ion-text>Bavi ma programovat a chcem sa  v tom zlepsovat. mam rad zvieratka a hokej. v programovani nemam moc velku prax ale som ochohotny tomu obetovat vsetok volny cas a byt v tom najlepsi </ion-text>
				</ion-col>
			</ion-row>

			<ion-row>
				<ion-col>
					<h1>Miesto staze</h1>
				</ion-col>
			</ion-row>
			<ion-row>
				<ion-col>
					<p>Bratislava, alebo remote odkialkolvek z domu</p>
				</ion-col>
			</ion-row>

			<ion-row>
				<ion-col>
					<h1>Vzdelanie</h1>
				</ion-col>
			</ion-row>
			<ion-row>
				<ion-col>
					<p>Halova, Skola pre mentalne retardovane deti</p>
				</ion-col>
			</ion-row>

			<ion-row>
				<ion-col>
					<h1>Pozadovany plat</h1>
				</ion-col>
			</ion-row>
			<ion-row>
				<ion-col>
					<p>Od 5E na hodinu</p>
				</ion-col>
			</ion-row>

			<ion-row>
				<ion-col>
					<h1>Prax</h1>
				</ion-col>
			</ion-row>
			<ion-row>
				<ion-col>
					<p>Wezeo, IBM, Tvoja mamka s.r.o.</p>
				</ion-col>
			</ion-row>

			<ion-row>
				<ion-col>
					<h1>Skills</h1>
				</ion-col>
			</ion-row>
			<ion-row>
				<ion-col>
					<p>C++, C, Python, Web Dev</p>
				</ion-col>
			</ion-row>

			<ion-row>
				<ion-col>
					<h1>Licencie a certifikaty</h1>
				</ion-col>
			</ion-row>
			<ion-row>
				<ion-col>
					<p>Cisco CCNA 1</p>
				</ion-col>
			</ion-row>

			<ion-row>
				<ion-col>
					<h1>Kontakt</h1>
				</ion-col>
			</ion-row>
			<ion-row>
				<ion-col>
					<p>Email: pojebSaBugala@gmail.com</p>
					<p>Number: 6969699969669</p>
					<p>IG: ujo_matej</p>
					<ion-button>Kontaktovat</ion-button>
				</ion-col>
			</ion-row>
		</div>

	</ion-content>

	<TheFooter />
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
</style>