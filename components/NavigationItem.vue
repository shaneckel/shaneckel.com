<template lang="html">
  <div class="item" v-on:mouseover="mouseOver">
    <section>
      <h5>
        <nuxt-link v-if="url === 'history'" :to="'/' + url">work history</nuxt-link>
        <nuxt-link v-else-if="url === 'index'" :to="'/'">{{url}}</nuxt-link>
        <nuxt-link v-else :to="'/' + url">{{url}}</nuxt-link>
      </h5>
    </section>
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
        }).color_a, 0.9)
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
  @import '../assets/scss/vars.scss';

  h5 {
    margin: 0;
    z-index: 20;
    position: relative;
    padding: 0;
    text-transform: uppercase;
    a{
      width: 100%;
      display: block;
      padding: $base-line-height;
      &:hover{
        color:white;
      }
    }
  }
  div.item {
    overflow: hidden;
    position: relative;
    width: 100%;
    transition: all .3s;
    text-align: right;
    &:hover {
      padding: $base-line-height 0;
      transition: all .5s;
      transition-delay: .3s;
      div.color {
        transition: all .3s;
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
    @include breakpoint-max(laptop) {
      opacity: 1;
    }
  }

</style>
