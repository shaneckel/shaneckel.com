<template lang="html">
  <div class="loading-page">
    <div class="loader"></div>
  </div>
</template>

<script>
import { TweenLite, Power3 } from 'gsap'

export default {

  data: () => ({
    loading: false
  }),

  methods: {
    start (el) {
      TweenLite.set(document.querySelector('.loader'), {opacity: 0, y: '-20px'})
      TweenLite.to(document.querySelector('.loader'), 0.2, {opacity: 0.6, y: '0px', ease: Power3.easeOut})
    },
    finish (el) {
      TweenLite.to(document.querySelector('.loader'), 0.6, {opacity: 0, y: '-20px', ease: Power3.easeOut}).delay(1.2)
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  pointer-events: none;
  z-index: 30;
  left: 0;
  top: 0;
  background: rgba(255, 255, 255, 0);
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
}
.loader{
  opacity: 0;
  position: fixed;
  width: 2rem;
  height: 2rem;
  background: white;
  left: 0;
}
</style>
