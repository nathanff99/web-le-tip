import Vue from 'vue'
import Vuex from 'vuex'
import tipCalculation from './modules/tipCalculation.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		tipCalculation
	}
})
