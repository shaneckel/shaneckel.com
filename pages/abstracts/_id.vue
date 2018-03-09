<template>
  <section>
    <header class="intro-head content">
      <h1>{{$route.params.id}}</h1>
      <span class="sep"></span>
    </header>
    <article class="main content">
      <p>{{images}}</p>
    </article>
  </section>
</template>

<script>
import { TweenLite, Power3 } from 'gsap'

export default {
  async asyncData ({ app, params }) {
    let images = await app.$axios.$get(`/api/abstracts/${params.id}`)
    return { images }
  },
  transition: {
    css: false,
    appear: true,
    beforeEnter (el) {
      TweenLite.set(el.querySelector('h1'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('.sep'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('.main'), {opacity: 0})
    },
    enter (el, done) {
      TweenLite.to(el.querySelector('h1'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.2)
      TweenLite.to(el.querySelector('.sep'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.4)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 1, ease: Power3.easeOut}).delay(0.6)
      done()
    },
    leave (el, done) {
      TweenLite.to(el.querySelector('h1'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn})
      TweenLite.to(el.querySelector('.sep'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn}).delay(0.2)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 0, ease: Power3.easeIn, onComplete: done}).delay(0.4)
    }
  }
}
</script>
