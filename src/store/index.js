import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    bankname: '上海',
    bankid: '001',
  },
  mutations: {
    bankname(state, bankname) {
      state.bankname = bankname
    },
    bankid(state, bankid) {
      state.bankid = bankid
    },
  },
  getters: {
    bankid(state) {
      return state.bankid
    },
    bankname(state) {
      return state.bankname
    }
  },
  actions: {}
})

export default store
