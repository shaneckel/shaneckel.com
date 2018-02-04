import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      navigation: false,
      hover_colors: {
        color_a: '#7b4444',
        color_b: '#190b20'
      },
      set_colors: {
        color_a: '#333333',
        color_b: '#190b20'
      },
      colors: [
        {
          route: 'index',
          color_a: '#7b4444',
          color_b: '#190b20'
        },
        {
          route: 'abstracts',
          color_a: '#5671a5',
          color_b: '#3c195f'
        },
        {
          route: 'branding',
          color_a: '#b0aab7',
          color_b: '#584856'
        },
        {
          route: 'history',
          color_a: '#bfab7c',
          color_b: '#8a451d'
        },
        {
          route: 'projects',
          color_a: '#325a39',
          color_b: '#282f11'
        },
        {
          route: 'about',
          color_a: '#820f0f',
          color_b: '#3a1f17'
        },
        {
          route: 'sketchbook',
          color_a: '#b1abab',
          color_b: '#282f11'
        },
        {
          route: 'writing',
          color_a: '#b16aa8',
          color_b: '#2b1111'
        }
      ]
    },
    mutations: {
      setnavigation (state, status) {
        if (status === 'change') state.navigation = false
        else state.navigation = !state.navigation
      },
      setcolors (state) {
        state.hover_colors = state.set_colors
      },
      setroute (state, route) {
        let selectedColor = state.colors.find((item) => {
          return item.route === route
        })
        state.set_colors = selectedColor
        state.hover_colors = selectedColor
      },
      sethovercolors (state, route) {
        let selectedColor = state.colors.find((item) => {
          return item.route === route
        })
        state.hover_colors = selectedColor
      }
    }
  })
}

export default store
