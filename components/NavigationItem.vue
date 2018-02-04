<template lang="html">
  <div class="item" v-on:mouseover="mouseOver">
    <p>
      <nuxt-link :to="'/' + url">{{url}}</nuxt-link>
    </p>
    <div class="color" :style="styledata"></div>
  </div>
</template>

<script>

function hexToRgbA (hex, opacity) {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    let c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity + ')'
  }
  throw new Error('Bad Hex')
}

export default {
  name: 'NavigationItem',

  props: [
    'url'
  ],
  computed: {
    styledata: function () {
      return {
        'backgroundColor': hexToRgbA(this.$store.state.colors.find((item) => {
          return item.route === this.url
        }).color_a, 0.25)
      }
    }
  },

  methods: {
    mouseOver () {
      this.$store.commit('sethovercolors', this.url)
    }
  }
}
</script>

<style lang="scss" scoped>
  p {
    margin: 0;
    z-index: 20;
    position: relative;
    a{
      padding: .5em;
      width: 100%;
      display: block;
    }
  }
  div.item {
    overflow: hidden;
    position: relative;
    &:hover {
      div.color {
        transition: .2s;
        opacity: 1;
      }
    }
  }
  div.color {
    transition: .6s;
    z-index: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

</style>
