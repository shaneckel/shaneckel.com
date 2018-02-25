<template>
  <section class="container">
    <header class="intro-head content">
      <h1>Shane Eckel</h1>
      <span class="sep"></span>
      <h4>Creative Developer</h4>
    </header>
    <div class="main">

    </div>
  </section>
</template>

<script>
import { TweenLite, Power3 } from 'gsap'

export default {
  transition: {
    css: false,
    appear: true,
    mode: 'out-in',
    beforeEnter (el) {
      TweenLite.set(el.querySelector('h1'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('h4'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('.sep'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('.main'), {opacity: 0, x: '-200px'})
    },
    enter (el, done) {
      TweenLite.to(el.querySelector('h1'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.2)
      TweenLite.to(el.querySelector('.sep'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.4)
      TweenLite.to(el.querySelector('h4'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.6)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.8)
      done()
    },
    leave (el, done) {
      TweenLite.to(el.querySelector('h1'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn})
      TweenLite.to(el.querySelector('.sep'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn}).delay(0.2)
      TweenLite.to(el.querySelector('h4'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn}).delay(0.4)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn, onComplete: done}).delay(0.5)
    }
  }
}
</script>
