<template>
  <div class="item">
    <label class="item__label">{{ label }}</label>
    <span class="item__amount">
      {{ `${prefix} ${formattedValue}` }}
    </span>
  </div>
</template>

<script>
	export default {
		name: 'TipResultItem',

		props: {
			label: {
				type: String,
				required: true
			},
			prefix: {
				type: String,
				required: true
			},
			value: {
				type: Number,
				default: 0
			},
			totalPeople: {
				type: Number,
				default: 0
			}
		},

		computed: {
			formattedValue() {
				if (this.totalPeople) {
					const totalAmountBRL = this.value.toFixed(2).replace('.', ',')
					const perPersonAmountBRL = (this.value / this.totalPeople)
						.toFixed(2)
						.replace('.', ',')

					return `${totalAmountBRL} (Por pessoa: ${this.prefix} ${perPersonAmountBRL})`
				}

				return this.value.toFixed(2)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		@apply flex flex-col text-center;

		&__label {
			@apply text-lg;
		}

		&__amount {
			@apply font-extrabold text-xl;
		}
	}
</style>
