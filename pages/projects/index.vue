<template>
  <section>
    <header>
      <div class="info">
        <h1>Projects</h1>
        <span class="sep"></span>
      </div>
    </header>
    <div class="main">
      <div class="component superior">
        <div class="inner">
          <h1>Superior Motors</h1>
          <p>2014 - 2017</p>
          <div class="asset"></div>
        </div>
      </div>
      <div class="component thick">
        <div class="inner">
          <h1>Thick Bikes</h1>
          <p>2008 - 2017</p>
          <div class="asset"></div>
        </div>
      </div>
      <div class="component gelman">
        <div class="inner">
          <h1>Gelman & Reisman</h1>
          <p>2015 - 2016</p>
          <div class="asset"></div>
        </div>
      </div>
      <div class="component eden">
        <div class="inner">
          <h1>Eden</h1>
          <p>2012 - 2016</p>
          <div class="asset"></div>
        </div>
      </div>
      <div class="component always">
        <div class="inner">
          <h1>Always Boardshop</h1>
          <p>2010</p>
          <div class="asset"></div>
        </div>
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
  padding: 8em 0;
  color: #aaa;
  position: relative;
  transition: background .4s;
  background-color: rgba(87, 81, 95, 0);;
  &:hover{
    transition: background .4s;
    background-color: rgba(87, 81, 95, 0.81);;
  }
  h1{
    font-size: 2.8em;
    font-family: 'Gotham Narrow SSm A', 'Gotham Narrow SSm B';
  }
  .inner{
    margin-left: 20%;
    margin-right: 10%;
    padding: 2em 0;
    .asset{
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -10;
      width: 50%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}

.superior .asset{
  background-image: url('~/assets/img/project-supmot-asset1.jpg');
  clip-path: polygon(0 100%, 50% 0, 100% 0, 100% 100%);
}
.thick .asset{
  background-image: url('~/assets/img/project-thick-asset1.jpg');
  clip-path: polygon(0 0, 50% 100%, 100% 100%, 100% 0);
}
.gelman .asset{
  background-image: url('~/assets/img/project-gelman-asset1.jpg');
  clip-path: polygon(0 100%, 50% 0, 100% 0, 100% 100%);
}
.eden .asset{
  background-image: url('~/assets/img/project-eden-asset1.jpg');
  clip-path: polygon(0 0, 50% 100%, 100% 100%, 100% 0);
}
.always .asset{
  background-image: url('~/assets/img/project-always-asset1.jpg');
  clip-path: polygon(0 100%, 50% 0, 100% 0, 100% 100%);
}
</style>
