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
      abstract_descipt: {
        modern: 'Continued exploration of design elements and principles, but with a focus on rhythm. The main goal of this work was in the tangible end result. Iterating on the end paper result, instead of adapting from digital. Still a work in progress.',
        incomplete: 'The development of these abstracts was strictly an exploration of the design elements and principles. Stemming from a loose association to an arbitrary theme / abstraction. Primarily for digital, but a few have been adapted for print.',
        untitled: 'These abstracts were for exploration of the design elements & principles in only the digital space. Of the eighty odd renderings, each took roughly a day to complete through many iterations. At some point, the work is considered done. The work is flattened, saved, and dated. Primarily for digital, but a few have been adapted for print.',
        pittsburgh: 'I\'ve always had an affinity for Pittsburgh. The culture, the mentality, the people, and especially it\'s architecture and layout. At any point of exploring this city you can find a perspective of a certain vantage point that can inspire design exploration. Spending time climbing bridges, I captured photographed lines and angles for these impressions. Still a work in progress.'
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
      closenav (state) {
        state.navigation = false
      },
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
