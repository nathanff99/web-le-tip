<template>
  <money
    class="input-money"
    :value="value"
    v-bind="options"
    @input="onInput"
  />
</template>

<script>
	import { Money } from 'v-money'

	export default {
		name: 'InputMoney',

		components: { Money },

		props: {
			value: {
				type: Number,
				required: true
			},
			prefix: {
				type: String,
				required: true
			}
		},

		computed: {
			options() {
				return {
					decimal: '.',
					thousands: '',
					prefix: `${this.prefix} `,
					precision: 2,
					masked: false
				}
			}
		},

		methods: {
			onInput(value) {
				this.$emit('input', value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input-money {
		@apply bg-gray-200 h-12 px-4 rounded-md border-gray-200 outline-none text-xl;
	}
</style>
