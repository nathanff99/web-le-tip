// I chose to focus all logic within Vuex, using getters, actions and mutations.
const state = {
	showResult: false,
	currency: 'eur',
	amount: 0,
	tipPercentage: 10,
	peopleAmount: 2,
	currencyQuoteToBRL: 0,
	lastQuoteDate: null
}

const getters = {
	showResult: (state) => state.showResult,
	currency: (state) => state.currency,
	currencySymbol: (state) => {
		const currencySymbol = {
			eur: '€',
			usd: '$'
		}

		return currencySymbol[state.currency]
	},
	amount: (state) => state.amount,
	tipPercentage: (state) => state.tipPercentage,
	peopleAmount: (state) => state.peopleAmount,
	tipCalculated: (state) => (state.amount * state.tipPercentage) / 100,
	totalAmount: (state, getters) => state.amount + getters.tipCalculated,
	perPersonAmount: (state, getters) => getters.totalAmount / state.peopleAmount,
	currencyQuoteToBRL: (state) => state.currencyQuoteToBRL,
	lastQuoteDate: (state) => state.lastQuoteDate,
	totalAmountBRL: (state, getters) =>
		getters.totalAmount * getters.currencyQuoteToBRL
}

const mutations = {
	// I created a global mutation that I can use for any state, without need to create identical mutations.
	SET_DATA(state, payload) {
		state[payload.key] = payload.value
	}
}

const actions = {
	// Same logic as mutation, a reusable action to manipulate any state.
	setData({ commit, state, dispatch }, payload) {
		if (payload.value === state[payload.key]) {
			return
		}

		commit('SET_DATA', payload)

		// If change currency, I need to change quote between EUR and USD
		if (payload.key.includes('currency')) {
			dispatch('fetchCurrencyQuoteBRL')
		}
	},

	setLastQuoteDate({ commit }) {
		const dateNow = new Date()
		const [day, month, year, hours, minutes] = [
			dateNow.getDate(),
			dateNow.getMonth() + 1,
			dateNow.getFullYear().toString().slice(-2),
			dateNow.getHours(),
			dateNow.getMinutes()
		].map((num) => num.toString().padStart(2, '0'))

		commit('SET_DATA', {
			key: 'lastQuoteDate',
			value: `${day}/${month}/${year} ${hours}:${minutes}`
		})
	},

	async fetchCurrencyQuoteBRL({ commit, state, dispatch }) {
		try {
			const response = await fetch(
				// Endpoint
				`${import.meta.env.VITE_SWOP_API_URL}/rates/${state.currency}/brl`,
				// Headers
				{
					headers: {
						Authorization: `ApiKey ${import.meta.env.VITE_SWOP_API_KEY}`
					}
				}
			)
			// Error
			if (!response.ok) {
				throw new Error('Error when checking currency quote')
			}

			const data = await response.json()
			commit('SET_DATA', {
				key: 'currencyQuoteToBRL',
				value: data.quote
			})
			dispatch('setLastQuoteDate')
		} catch (error) {
			console.error('Error when checking currency quote:', error)
			alert('Erro ao checar conversão para R$.')
		}
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
