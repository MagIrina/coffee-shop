import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import bestsellers from './bestsellers'
import goods from './goods'
import coffee from './coffee'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    links, bestsellers, goods, coffee,
  },
  
  state: {
    isLoading: false
  },

  getters: {
    getIsLoading: (state) => state.isLoading
  },

  mutations: {
    setLoading(state, value) {
      state.isLoading = value;
    }
  },

  actions: {
    setLoading({ commit }, value) {
      commit('setLoading', value);
    }
  }
})

export default store