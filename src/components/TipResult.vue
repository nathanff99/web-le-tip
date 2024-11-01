<template>
  <section
    class="tip-result"
    :class="{ 'tip-result--show-mobile': showResult }"
  >
    <TipResultItem
      label="Conta"
      :prefix="currencySymbol"
      :value="amount"
    />
    <TipResultItem
      label="Gorjeta"
      :prefix="currencySymbol"
      :value="tipCalculated"
    />
    <TipResultItem
      label="Total"
      :prefix="currencySymbol"
      :value="totalAmount"
    />
    <TipResultItem
      label="Por pessoa"
      :prefix="currencySymbol"
      :value="perPersonAmount"
    />
    <TipResultItem
      label="Em R$"
      prefix="R$"
      :value="totalAmountBRL"
      :total-people="peopleAmount"
    />
    <TipResultQuote
      :label="`Cotação do ${currencyFormatted[currency]}`"
      :last-quote-date="lastQuoteDate"
      prefix="R$"
      :value="currencyQuoteToBRL"
    />
  </section>
</template>

<script>
	import { mapGetters } from 'vuex'

	import TipResultItem from '@components/TipResultItem.vue'
	import TipResultQuote from '@components/TipResultQuote.vue'

	export default {
		name: 'TipResult',

		components: {
			TipResultItem,
			TipResultQuote
		},

		data() {
			return {
				currencyFormatted: {
					eur: 'EUR',
					usd: 'USD'
				}
			}
		},

		computed: {
			...mapGetters('tipCalculation', [
				'currency',
				'currencySymbol',
				'amount',
				'tipCalculated',
				'totalAmount',
				'perPersonAmount',
				'totalAmountBRL',
				'peopleAmount',
				'currencyQuoteToBRL',
				'lastQuoteDate',
				'showResult'
			])
		}
	}
</script>

<style lang="scss" scoped>
	.tip-result {
		@apply hidden md:flex flex-col gap-8 w-full sm:w-3/5 md:w-1/2 absolute md:relative bg-white h-full;

		&--show-mobile {
			@apply flex;
		}

		&__quote {
		}
	}
</style>
