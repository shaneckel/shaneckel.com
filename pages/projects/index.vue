<template>
  <section>
    <header class="intro-head content">
      <h1>Projects</h1>
      <span class="sep"></span>
    </header>
    <div class="main">
      <div class="content">
        <nuxt-link :to="'/projects/eden'">
          <h2>Eden
            <span class="svg-arrow">
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g></svg>
            </span>
          </h2>
        </nuxt-link>
        <nuxt-link :to="'/projects/superiormotors'">
          <h2>Superior Motors
            <span class="svg-arrow">
              <svg viewBox="0 0 24 24" preserveAspectsvg-arrowRatio="xMidYMid meet"><g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g></svg>
            </span>
          </h2>
        </nuxt-link>
        <nuxt-link :to="'/projects/gelmanreisman'">
          <h2>Gelman & Reisman
            <span class="svg-arrow">
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g></svg>
            </span>
          </h2>
        </nuxt-link>
        <nuxt-link :to="'/projects/thickbikes'">
          <h2>Thick Bikes
            <span class="svg-arrow">
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g></svg>
            </span>
          </h2>
        </nuxt-link>
      </div>
    </div>

  </section>
</template>

<script>
import { TweenLite, Power3 } from 'gsap'

export default {
  name: 'projects',
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
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.6)
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

<style scoped lang="scss">
@import '../../assets/scss/vars.scss';

.main{
  background: rgba(255, 255, 255, .4);
}
.svg-arrow{
  width: .75em;
  height: .75em;
  display: inline-block;
  position: relative;
  transition: margin-left .2s;
  position: relative;
  top: 0.05em;
  transition: left .2s;
  left: 0em;
}
a{
  display: block;
  padding: $base-line-height 0;
}
a:hover{
  color: white;
  .svg-arrow{
    transition: left .2s;
    left: $base-line-height;
    fill: white;
  }
}
.content{
  margin-top: 0;
  @include breakpoint-max(tablet) {
    font-size: .75em;
  }
}
.component{
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
