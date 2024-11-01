<template>
  <div class="choice-selector">
    <div
      v-for="(option, key) in options"
      :key="`choice-${key}`"
      class="choice-selector__option"
      :class="{ 'choice-selector__option--selected': value === option.value }"
      @click="onClick(option.value)"
    >
      {{ option.label }}
    </div>
  </div>
</template>

<script>
	export default {
		name: 'ChoiceSelector',

		props: {
			options: {
				type: Array,
				required: true
			},
			value: {
				type: String,
				required: true
			}
		},

		methods: {
			onClick(value) {
				this.$emit('change', value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.choice-selector {
		@apply flex items-center gap-2 bg-gray-200 p-1 rounded-md text-xl max-w-max;

		&__option {
			@apply font-semibold cursor-pointer px-2 py-1 rounded-md hover:bg-gray-300;

			&--selected {
				@apply bg-primary hover:bg-primary text-white font-bold;
			}
		}
	}
</style>
