<template>
  <main class='wholething'>
    <Background></Background>
    <Navigation></Navigation>
    <nuxt v-bind:class="{navactive: $store.state.navigation}" />
  </main>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Background from '../components/Background.vue'

export default {
  components: {
    Navigation,
    Background
  }
}
</script>

<style lang="scss">

.wholething{
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
