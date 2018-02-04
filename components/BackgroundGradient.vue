<template lang="html">
  <div class="background-gradient"></div>
</template>

<script>
import { TweenLite, Power3 } from 'gsap'

export default {
  name: 'BackgroundGradient',

  computed: {
    styledata: function () {
      return {
        'colors': this.$store.state.hover_colors
      }
    }
  },
  created: function () {
    this.$store.commit('setcolors')
  },
  watch: {
    styledata (store) {
      TweenLite.to(document.querySelector('.background-gradient'), 1, {
        backgroundImage: `linear-gradient(${store.colors.color_a}, ${store.colors.color_b})`,
        ease: Power3.easeOut
      }).delay(0.1)
    }
  }
}
</script>

<style scoped lang="scss">
.background-gradient{
  z-index: -10;
  transition: all .5;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
}
</style>
