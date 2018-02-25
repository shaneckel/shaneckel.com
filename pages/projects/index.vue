<template>
  <section>
    <header class="intro-head content">
      <h1>Projects</h1>
      <span class="sep"></span>
    </header>
    <div class="main content">
      <div class="component superior">
        <h1>Superior Motors</h1>
        <p>2014 - 2017</p>
      </div>
      <div class="component thick">
        <h1>Thick Bikes</h1>
        <p>2008 - 2017</p>
      </div>
      <div class="component gelman">
        <h1>Gelman & Reisman</h1>
        <p>2015 - 2016</p>
      </div>
      <div class="component eden">
        <h1>Eden</h1>
        <p>2012 - 2016</p>
      </div>
      <div class="component always">
        <h1>Always Boardshop</h1>
        <p>2010</p>
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
      TweenLite.set(el.querySelector('.main'), {opacity: 0, x: '-200px'})
    },
    enter (el, done) {
      TweenLite.to(el.querySelector('h1'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.2)
      TweenLite.to(el.querySelector('.sep'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.4)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.6)
      done()
    }
  }
}
</script>

<style scoped lang="scss">

.component{
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}

.superior{
  background-image: url('~/assets/img/project-supmot-asset1.jpg');
}
.thick{
  background-image: url('~/assets/img/project-thick-asset1.jpg');
}
.gelman{
  background-image: url('~/assets/img/project-gelman-asset1.jpg');
}
.eden{
  background-image: url('~/assets/img/project-eden-asset1.jpg');
}
.always{
  background-image: url('~/assets/img/project-always-asset1.jpg');
}
</style>
