<template>
  <main>
    <BackgroundNoise></BackgroundNoise>
    <BackgroundGradient></BackgroundGradient>
    <BackgroundAnimation></BackgroundAnimation>
    <Navigation></Navigation>
    <nuxt v-bind:class="{navactive: $store.state.navigation}" />
  </main>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import BackgroundGradient from '~/components/BackgroundGradient.vue'
import BackgroundNoise from '~/components/BackgroundNoise.vue'
import BackgroundAnimation from '~/components/BackgroundAnimation.vue'

export default {
  components: {
    Navigation,
    BackgroundGradient,
    BackgroundNoise,
    BackgroundAnimation
  }
}
</script>

<style lang="scss" scoped>

main{
  overflow-x: hidden;
}

.button, .button:visited {
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus {
  color: #fff;
  background-color: #000;
}

h1 a{
  text-decoration: none;
}

.title {
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
