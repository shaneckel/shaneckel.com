<template lang="html">
  <nav class="mobile-toggle" v-on:mouseleave="toggle" v-on:mouseenter="toggle" v-bind:class="{navactive: $store.state.navigation}">
    <div class="toggle">|||</div>
    <div class="list" >
      <p><nuxt-link :to="'/'">index</nuxt-link></p>
      <p><nuxt-link :to="'/abstracts'">abstracts</nuxt-link></p>
      <p><nuxt-link :to="'/logos'">logos</nuxt-link></p>
      <p><nuxt-link :to="'/history'">work history</nuxt-link></p>
      <p><nuxt-link :to="'/projects'">projects</nuxt-link></p>
      <p>about</p>
      <p>writing</p>
      <p>sketchbook</p>
      <p>photography</p>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',

  data: () => ({
    loading: false,
    active: false
  }),

  methods: {
    toggle () {
      this.$store.commit('setnavigation')
    }
  }
}
</script>

<style lang="scss" scoped>
  nav{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 20;
    background: rgba(255, 255, 255, .3);
    text-align: center;
    width: 12em;
    height: 100%;
    left: -12em;
    transition: left .2s;
    &.navactive{
      transition: left .2s;
      left: 0;
    }
  }
  .list{
    padding-top: 4em;
  }
  .toggle{
    cursor: pointer;
    width: 2em;
    height: 100%;
    position: absolute;
    right: -2em;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: .2;
  }
</style>
