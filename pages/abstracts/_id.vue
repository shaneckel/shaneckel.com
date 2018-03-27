<template>
  <section>
    <header class="content intro-head">
      <h1>abstracts / {{title}}</h1>
    </header>
    <article class="main">
      <section class="content" v-for="image in images">
        <div class="info">
          <span class="sep"></span>
          <h3>{{image.name}}</h3>
          <p class="year">{{image.year}}</p>
          <p v-if="image.description">{{image.description}}</p>
        </div>
        <div class="image">
          <img :src="image.src" />
        </div>
      </section>
    </article>
    <footer class="goback content">
      <nuxt-link :to="'/abstracts'">
        <button class="btn-left" href="#">
          <span class="arrow">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g></svg>
          </span>
          <p>back</p>
        </button>
      </nuxt-link>
    </footer>
  </section>
</template>

<script>
import { TweenLite, Power3 } from 'gsap'

export default {
  async asyncData ({ app, params, store }) {
    let images = await app.$axios.$get(`/api/abstracts/${params.id}`)
    let info = store.state.abstract_descipt[params.id]
    let title = params.id
    return {
      images,
      info,
      title
    }
  },
  transition: {
    css: false,
    appear: true,
    beforeEnter (el) {
      TweenLite.set(el.querySelector('.btn-left'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('h1'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('footer'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('.main'), {opacity: 0})
    },
    enter (el, done) {
      TweenLite.to(el.querySelector('.btn-left'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0)
      TweenLite.to(el.querySelector('h1'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.2)
      TweenLite.to(el.querySelector('footer'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.4)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 1, ease: Power3.easeOut}).delay(0.4)
      done()
    },
    leave (el, done) {
      TweenLite.to(el.querySelector('.btn-left'), 1, {opacity: 0, x: '-100px', ease: Power3.easeIn}).delay(0)
      TweenLite.to(el.querySelector('h1'), 1, {opacity: 0, x: '-100px', ease: Power3.easeIn}).delay(0)
      TweenLite.to(el.querySelector('footer'), 1, {opacity: 0, x: '-100px', ease: Power3.easeIn}).delay(0)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 0, ease: Power3.easeIn, onComplete: done}).delay(0)
    }
  }
}
</script>
<style scoped lang="scss">
@import '../../assets/scss/vars.scss';

.main{
  background: rgba(255, 255, 255, .4);
}
.main > section {
  display: flex;
  width: 100%;
  padding-top: $base-line-height * 8;
  @include breakpoint-max(tablet){
    display: block;
  }
  .sep{
    background: black;
  }
}

footer a{
  display: block;
}

.year{
  font-style: italic;
}

.main .info{
  width: 60%;
  padding-right: $base-line-height * 4;
  @include breakpoint-max(tablet){
    width: 100%;
  }
}
.main .image{
  width: 100%;
  @include breakpoint-max(tablet){
    padding-top: $base-line-height * 2;
  }
  img{
    box-shadow: .1rem .3rem .45rem rgba(0,0,0,.3);
    width: 100%;
  }
}
</style>
