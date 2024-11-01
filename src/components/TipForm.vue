<template>
  <section class="tip-form">
    <div class="tip-form__input tip-form__input--center">
      <ChoiceSelector
        :options="currencyOptions"
        :value="currency"
        @change="setData({ key: 'currency', value: $event })"
      />
    </div>
    <div class="tip-form__input tip-form__input--center">
      <label class="tip-form__input-label">Valor</label>
      <InputMoney
        :prefix="currencySymbol"
        :value="amount"
        @input="setData({ key: 'amount', value: $event })"
      />
    </div>
    <div class="tip-form__input">
      <label class="tip-form__input-label">
        Gorjeta: <strong>{{ tipPercentage }}%</strong>
      </label>
      <InputRange
        :min="10"
        :max="20"
        suffix="%"
        :value="tipPercentage"
        @input="setData({ key: 'tipPercentage', value: $event })"
      />
    </div>
    <div class="tip-form__input">
      <label class="tip-form__input-label">
        Pessoas: <strong>{{ peopleAmount }}</strong>
      </label>
      <InputRange
        :min="2"
        :max="16"
        :value="peopleAmount"
        @input="setData({ key: 'peopleAmount', value: $event })"
      />
    </div>
  </section>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	import ChoiceSelector from '@ui/ChoiceSelector.vue'
	import InputMoney from '@ui/InputMoney.vue'
	import InputRange from '@ui/InputRange.vue'

	export default {
		name: 'TipForm',

		components: {
			ChoiceSelector,
			InputMoney,
			InputRange
		},

		data() {
			return {
				currencyOptions: [
					{ label: 'EUR', value: 'eur' },
					{ label: 'USD', value: 'usd' }
				]
			}
		},

		computed: {
			...mapGetters('tipCalculation', [
				'currency',
				'currencySymbol',
				'amount',
				'tipPercentage',
				'peopleAmount'
			])
		},

		methods: {
			...mapActions('tipCalculation', ['setData'])
		}
	}
</script>

<style lang="scss" scoped>
	.tip-form {
		@apply flex flex-col items-center gap-8 w-full sm:w-3/5 md:w-1/2;

		&__input {
			@apply w-full;

			&--center {
				@apply flex justify-center items-center gap-3;
			}

			&-label {
				@apply text-lg;

				strong {
					@apply font-extrabold text-xl;
				}
			}
		}
	}
</style>
