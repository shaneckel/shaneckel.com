<template>
  <section>
    <header class="intro-head content">
      <h1>Branding</h1>
      <span class="sep"></span>
    </header>
    <div class="main logos">
      <div class="asset"></div>
      <div class="asset"></div>
      <div class="asset"></div>
      <div class="asset"></div>
      <div class="asset"></div>
      <div class="asset"></div>
      <div class="asset"></div>
      <div class="asset"></div>
    </div>
  </section>
</template>

<script>
import { TweenLite, TweenMax, Power3 } from 'gsap'

export default {
  name: 'projects',
  transition: {
    css: false,
    appear: true,
    beforeEnter (el) {
      TweenLite.set(el.querySelector('h1'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('.sep'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('.main'), {opacity: 0, x: '-200px'})
    },
    enter (el, done) {
      TweenLite.to(el.querySelector('h1'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.2)
      TweenLite.to(el.querySelector('.sep'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.4)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.6)
      TweenMax.staggerFrom('.asset', 2, {opacity: 0, delay: 0.15, ease: Power3.easeOut}, 0.2)
      done()
    },
    leave (el, done) {
      TweenLite.to(el.querySelector('h1'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn})
      TweenLite.to(el.querySelector('.sep'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn}).delay(0.2)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn, onComplete: done}).delay(0.4)
    }
  }
}
</script>

<style scoped lang="scss">

.logos{
  color: #aaa;
  position: relative;
  transition: background .4s;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .asset{
    display: block;
    z-index: -10;
    width: 50%;
    min-height: 32em;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    &:nth-child(1){
      background-image: url('~/assets/img/logo-superior1.png');
    }
    &:nth-child(2){
      background-image: url('~/assets/img/logo-gelman1.png');
    }
    &:nth-child(3){
      background-image: url('~/assets/img/logo-eden1.png');
    }
    &:nth-child(4){
      background-image: url('~/assets/img/logo-thick1.png');
    }
    &:nth-child(5){
      background-image: url('~/assets/img/logo-cruel1.png');
    }
    &:nth-child(6){
      background-image: url('~/assets/img/logo-always1.png');
    }
    &:nth-child(7){
      background-image: url('~/assets/img/logo-vidcam1.png');
    }
    &:nth-child(8){
      background-image: url('~/assets/img/logo-internet1.png');
    }
  }
}

</style>
