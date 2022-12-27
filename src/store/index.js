import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/store/modules/cart'

import getters from '@/store/getters'

Vue.use(Vuex)

const modules = {
  cart
}

export default new Vuex.Store({
  getters,
  modules
})
