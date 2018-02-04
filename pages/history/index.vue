<template>
  <section>
    <header>
      <div class="info">
        <h1>History</h1>
        <span class="sep"></span>
      </div>
    </header>
    <div class="main">
      <ul>
        <li>testing</li>
      </ul>
    </div>
  </section>
</template>

<script>
import { TweenLite, TweenMax, Power3 } from 'gsap'

export default {
  name: 'programming',
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
    }
  }
}
</script>

<style scoped lang="scss">


</style>
