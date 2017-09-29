import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      navigation: false
    },
    mutations: {
      setnavigation (state, status) {
        if (status === 'change') state.navigation = false
        else state.navigation = !state.navigation
      }
    }
  })
}

export default store
