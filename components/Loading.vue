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

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.loading-page {
  position: fixed;
  pointer-events: none;
  z-index: 30;
  left: 0;
  top: 0;
  background: rgba(255, 255, 255, 0);
  text-align: center;
  /* font-size: 30px; */
  font-family: sans-serif;
}
.loader{
  opacity: 0;
  position: fixed;
  width: 2em;
  height: 2em;
  @include breakpoint-max(laptop) {
    width: 3em;
    height: 3em;
  }
  background: white;
  left: 0;
  /* margin: auto; */
  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-rotateplane {
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}

@keyframes sk-rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
  } 50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
  } 100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}


</style>
