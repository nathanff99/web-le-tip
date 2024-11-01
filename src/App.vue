<template>
  <div id="app">
    <main class="main-section">
      <h1 class="main-section__title">
        Le/Tip
      </h1>
      <div class="main-section__content">
        <TipForm />
        <TipResult />
      </div>
      <button
        class="main-section__float-button"
        @click="toggleShowResult"
      >
        {{ showResult ? '<' : '>' }}
      </button>
    </main>
  </div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	import TipForm from '@components/TipForm.vue'
	import TipResult from '@components/TipResult.vue'

	export default {
		components: {
			TipForm,
			TipResult
		},

		computed: {
			...mapGetters('tipCalculation', ['showResult'])
		},

		created() {
			// Hide result section if it was opened on mobile size and resized to desktop size
			window.addEventListener('resize', (event) => {
				if (event.target.innerWidth > 767) {
					this.setData({ key: 'showResult', value: false })
				}
			})

			// We can use lodash debounce at vuex when change any input
			// But I chose to fetch quote when start application, change currency or auto-update each 3 minutes
			this.fetchCurrencyQuoteBRL()
			setInterval(() => {
				this.fetchCurrencyQuoteBRL()
			}, 180 * 1000) // 3 minutes
		},

		methods: {
			...mapActions('tipCalculation', ['fetchCurrencyQuoteBRL', 'setData']),

			toggleShowResult() {
				this.setData({ key: 'showResult', value: !this.showResult })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main-section {
		@apply flex flex-col justify-center items-center gap-3 px-4;

		&__title {
			@apply text-6xl md:text-8xl font-extrabold text-slate-900 my-4 md:my-16;
		}

		&__content {
			@apply flex flex-col md:flex-row justify-center items-center gap-16 w-full max-w-3xl relative;
		}

		&__float-button {
			@apply flex md:hidden justify-center items-center absolute right-6 bottom-6 rounded-full bg-primary text-white w-12 h-12 text-4xl font-bold;
		}
	}
</style>
