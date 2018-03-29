<template>
  <section>
    <header class="intro-head content">
      <h1>Project/ Gelman & Reisman</h1>
      <span class="sep"></span>
    </header>
    <article class="main">
      <section class="collection">
        <div class="top-asset">
          <figure class="display">
            <img src="/img/project_gelman1.jpg" alt="">
          </figure>
        </div>
        <div class="content">
          <h3>Gelman & Reisman Law Offices</h3>
          <p class="year">2014 - 2016</p>
          <p>One thing that stood out to me about Bruce Gelman and Marc Reisman was how much they genuinely cared about the people they helped. The balance when designing was between their impressive combined 50 years of experience and their ability to make difficult scenarios comfortable.</p>
          <p>We arrived at a softer logomark and a muted color palette. Which gave the sturdiness of their law firm, but kept it still feeling invitave. The content strategy was to keep things simple. Give each practice it's appropriate light and don't distract from the end goal. Which is to help those with an issue.</p>
          <a href="http://gelmanreisman.com">
            <button class="btn-right" href="#">
              <p>gelmanreisman.com</p>
              <span class="arrow">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g></svg>
              </span>
            </button>
          </a>
        </div>
      </section>
      <section class="collection">
        <div class="top-asset">
          <figure class="display">
            <img src="/img/project_gelman2.jpg" alt="">
          </figure>
        </div>
        <div class="content">
          <h3>Code</h3>
          <p>Built the website using a simple node script and the jade library. I've been using jade as a replacement for handlebars for a couple of years at this point and it really sped up the construction.</p>
          <a href="https://github.com/shaneckel/gelmanreisman">
            <button class="btn-right" href="#">
              <p>github</p>
              <span class="arrow">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g></svg>
              </span>
            </button>
          </a>
        </div>
      </section>
      <section class="collection">
        <div class="top-asset">
          <figure class="display">
            <img src="/img/project_gelman3.jpg" alt="">
          </figure>
        </div>
        <div class="content">
          <h3>Print</h3>
          <p>Working with a local print shop, we ran a box of these two color letterheads and envelopes with a local offset printer.</p>
        </div>
      </section>
    </article>
    <footer class="goback content">
      <nuxt-link :to="'/projects'">
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
  name: 'project',
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

<style scoped lang="scss">
  @import '../../assets/scss/vars.scss';
  article{
    background: rgba(255, 255, 255, .4);
  }

  .top-asset{
    padding: $base-line-height 0 $base-line-height 0;
    text-align: center;
    @include breakpoint-min(full){
      padding: $base-line-height $base-line-height * 4
    }
    img{
      box-shadow: .1rem .3rem .45rem rgba(0,0,0,.3);
      width: 100%;
    }
  }

  .content > p{
    @include breakpoint-min(tablet) {
      max-width: 50%;
    }
    &.year{
      font-style: italic;
    }
  }

</style>
