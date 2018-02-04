<template lang="html">
  <nav class="mobile-toggle" v-on:mouseleave="toggle" v-on:mouseenter="toggle" v-bind:class="{navactive: $store.state.navigation}">
    <div class="toggle">|||</div>
    <div class="list">
      <NavigationItem :url="'about'"></NavigationItem>
      <NavigationItem :url="'abstracts'"></NavigationItem>
      <NavigationItem :url="'branding'"></NavigationItem>
      <NavigationItem :url="'history'"></NavigationItem>
      <NavigationItem :url="'sketchbook'"></NavigationItem>
      <NavigationItem :url="'writing'"></NavigationItem>
    </div>
  </nav>
</template>

<script>
import NavigationItem from '~/components/NavigationItem.vue'

export default {
  name: 'Navigation',

  components: {
    NavigationItem
  },

  data: () => ({
    loading: false,
    active: false
  }),

  methods: {
    toggle () {
      this.$store.commit('setnavigation')
      this.$store.commit('setcolors')
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
