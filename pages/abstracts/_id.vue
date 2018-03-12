<template>
  <section>
    <header class="goback content">
      <nuxt-link :to="'/abstracts'">
        <button class="btn-left" href="#">
          <span class="arrow">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g></svg>
          </span>
          <p>back</p>
        </button>
      </nuxt-link>
    </header>
    <article class="main content">
      <div v-for="image in images">
        <h2>{{image.name}}</h2>
        <p>{{image.year}}</p>
        <p>{{image.description}}</p>
        <img :src="image.src" />
      </div>
      <Print></Print>
    </article>
  </section>
</template>

<script>
import { TweenLite, Power3 } from 'gsap'
import Print from '~/components/PrintInquery.vue'

export default {
  components: {
    Print
  },
  async asyncData ({ app, params }) {
    let images = await app.$axios.$get(`/api/abstracts/${params.id}`)
    return { images }
  },
  transition: {
    css: false,
    appear: true,
    beforeEnter (el) {
      // TweenLite.set(el.querySelector('h1'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('.goback'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('.main'), {opacity: 0})
    },
    enter (el, done) {
      // TweenLite.to(el.querySelector('h1'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.2)
      TweenLite.to(el.querySelector('.goback'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 1, ease: Power3.easeOut}).delay(0.2)
      done()
    },
    leave (el, done) {
      // TweenLite.to(el.querySelector('h1'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn})
      TweenLite.to(el.querySelector('.goback'), 1, {opacity: 0, x: '-100px', ease: Power3.easeIn}).delay(0)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 0, ease: Power3.easeIn, onComplete: done}).delay(0.2)
    }
  }
}
</script>
