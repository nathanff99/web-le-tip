<template>
  <div class="quote">
    <label class="quote__label">{{ label }}</label>
    <span class="quote__amount">
      {{ `${prefix} ${value.toFixed(2)}` }}
    </span>
    <small v-if="lastQuoteDate">
      Última atualização em {{ lastQuoteDate }}.<br>Atualiza automaticamente a cada 3 minutos.
    </small>
  </div>
</template>

<script>
	export default {
		name: 'TipResultQuote',

		props: {
			label: {
				type: String,
				required: true
			},
			lastQuoteDate: {
				type: String,
				default: ''
			},
			prefix: {
				type: String,
				required: true
			},
			value: {
				type: Number,
				default: 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	.quote {
		@apply flex flex-col text-center;

		&__label {
			@apply text-lg;
		}

		&__amount {
			@apply font-extrabold text-xl;
		}
	}
</style>
