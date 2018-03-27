<template>
  <main>
    <BackgroundNoise></BackgroundNoise>
    <BackgroundGradient></BackgroundGradient>
    <BackgroundAnimation></BackgroundAnimation>
    <Navigation></Navigation>
    <nuxt v-bind:class="{navactive: $store.state.navigation}" class="content-page"/>
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
</style>
