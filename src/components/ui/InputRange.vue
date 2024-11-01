<template>
  <div class="input-range">
    <input
      class="input-range__field"
      type="range"
      :value="value"
      :min="min"
      :max="max"
      step="1"
      @input="onInput"
    >
    <div class="input-range__numbers">
      <div>{{ `${min}${suffix}` }}</div>
      <div>{{ `${max}${suffix}` }}</div>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'InputRange',

		props: {
			value: {
				type: Number,
				required: true
			},
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 999999999
			},
			suffix: {
				type: String,
				default: ''
			}
		},

		methods: {
			onInput(event) {
				this.$emit('input', Number(event.target.value))
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input-range {
		&__numbers {
			@apply flex justify-between w-full font-semibold;
		}

		&__field {
			@apply h-5 w-full appearance-none rounded-md bg-gray-300;
		}
	}

	// Chrome - Edge
	@media screen and (-webkit-min-device-pixel-ratio: 0) {
		input[type='range']::-webkit-slider-runnable-track {
			@apply h-5 appearance-none text-primary overflow-hidden rounded-md;
		}

		input[type='range']::-webkit-slider-thumb {
			@apply w-5 h-5 appearance-none border-2 border-primary bg-primary rounded-full;
			box-shadow: -200px 0 0 200px #dbaeff;
		}
	}
	// Firefox
	input[type='range']::-moz-range-progress {
		@apply h-5 bg-primary rounded-md;
	}
</style>
