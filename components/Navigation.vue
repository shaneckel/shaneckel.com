<template lang="html">
  <nav class="mobile-toggle" v-on:mouseleave="togglecolors" v-bind:class="{navactive: $store.state.navigation}">
    <div class="toggle" @mousedown="toggle"><span>|||</span></div>
    <div class="list">
      <NavigationItem :url="'about'"></NavigationItem>
      <NavigationItem :url="'abstracts'"></NavigationItem>
      <NavigationItem :url="'projects'"></NavigationItem>
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
    togglecolors () {
      this.$store.commit('setcolors')
    },
    toggle () {
      this.$store.commit('setnavigation')
      this.$store.commit('setcolors')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/vars.scss';

  nav{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 20;
    background: rgba(255, 255, 255, .2);
    text-align: center;
    width: 60%;
    height: 100%;
    left: -60%;
    transition: all .4s;
    padding-left: 2em;
    &.navactive{
      transition: all .4s;
      left: 0%;
      background: rgba(255, 255, 255, .6);
      .toggle{
        opacity: 1;
        left: 0;
        @include breakpoint-max(laptop) {
          bottom: 0em;
          padding: 2em 0;
        }
      }
    }
    @include breakpoint-max(laptop) {
      width: 100%;
      height: 100%;
      left: 0%;
      top: -100%;
      padding-left: 0em;
      &.navactive {
        top: 0%;
        background: rgba(255, 255, 255, .8);
      }
    }
  }
  .list{
    // padding-top: 4em;
    display: flex;
    align-items: center;
    flex-direction: column;
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
    span{
      transform: rotate(90deg);
    }
    &.navactive{
      top: 0%;
    }
    @include breakpoint-max(laptop) {
      height: 2em;
      width: 100%;
      right: 0;
      left: 0;
      top: auto;
      bottom: -2em;
    }
  }
</style>
