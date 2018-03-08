<template lang="html">
  <nav class="mobile-toggle" v-bind:class="{navactive: $store.state.navigation}">
    <div v-if="!$store.state.navigation" class="toggle" @mousedown="toggle"><span>|||</span></div>
    <div class="list" v-on:mouseleave="togglecolors">
      <NavigationItem :url="'index'"></NavigationItem>
      <NavigationItem :url="'about'"></NavigationItem>
      <NavigationItem :url="'abstracts'"></NavigationItem>
      <NavigationItem :url="'projects'"></NavigationItem>
      <NavigationItem :url="'history'"></NavigationItem>
      <NavigationItem :url="'sketchbook'"></NavigationItem>
      <NavigationItem :url="'writing'"></NavigationItem>
    </div>
    <div class="bgtoggle" @mousedown="toggle"></div>
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
    width: 50%;
    height: 100%;
    left: -50%;
    transition: background .4s, left 1.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    .item{
      transition: all .4s;
      opacity: 0;
    }
    &.navactive{
      transition: background .8s, left .4s ease-out;
      left: 0%;
      background: rgba(255, 255, 255, .5);
      .item{
        transition: all .4s;
        opacity: 1;
      }
      .toggle{
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
        background: rgba(255, 255, 255, .9);
      }
    }
  }
  .list{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
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
    opacity: .1;
    @include breakpoint-max(laptop) {
      opacity: .5;
    }
    &.navactive{
      top: 0%;
    }
    &:hover{
      transition: opacity .4s;
      opacity: .3;
    }
    @include breakpoint-max(laptop) {
      height: 2em;
      width: 100%;
      right: 0;
      left: 0;
      top: auto;
      bottom: -2em;
      span{
        transform: rotate(90deg);
      }
    }
  }

  .navactive .bgtoggle{
    width: 100%;
  }

  .bgtoggle{
    position: fixed;
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -20;
    opacity: 0;
  }

</style>
