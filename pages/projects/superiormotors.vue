<template>
  <section>
    <header class="intro-head content">
      <h1>Project/ Superior Motors</h1>
      <span class="sep"></span>
    </header>
    <article class="main">
      <section class="collection">
        <div class="top-asset">
          <figure class="display">
            <img src="/img/project_supmot1.jpg" alt="">
          </figure>
        </div>
        <div class="content">
          <h3>Superior Motors</h3>
          <p class="year">2014 - 2018</p>
          <p>The branding came out of researching the history of U.S. Steel, Braddock, and Pittsburgh. A great deal of branding back then was purpose driven. No cruft. It was stamped onto a piece of steel and sent down the Monongahela.</p>
          <p>The original style guide design was sparked by a night in Braddock by the Edgar Thomas steel plant. A blend of dark blues and muted oranges.</p>
          <p>I had the opportunity of spending a good deal of time in Braddock during the development of this project. It's clear that the opening of Superior Motors is a reflection of the people of Braddock's will to grow. But for me, it's a testimony to the truly unnerving vision and strength of Kevin Sousa.</p>
          <a href="https://superiormotors15104.com">
            <button class="btn-right" href="#">
              <p>superiormotors15104.com</p>
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
            <img src="/img/project_supmot2.jpg" alt="">
          </figure>
        </div>
        <div class="content">
          <h3>Code</h3>
          <p>The visual concept was a continued stem from the work done on the branding. Which grew out of the beautiful lines found inside the original building. The website is on a consistent tilt and has a responsive overlay at large sizes to focus attention on the center.</p>
          <p>The technology was originally built in angular and node.js but was later migrated to nuxt, a ssr rendered library for vue.js. A link to the github repository is below. Hosted on Zeit.co's Now  and the content of the website is managed by a 3rd party cms system.</p>
          <a href="https://github.com/shaneckel/superiormotors15104">
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
            <img src="/img/project_supmot3.jpg" alt="">
          </figure>
        </div>
        <div class="content">
          <h3>Print</h3>
          <p>The source material for the line work came from an experimentation in a 3d modelling application. Rendering a model with just lines created this almost chaotic engineering feel. Which, to me, is a good description of Kevin's food. It feels chaotic and spontaneous, but has a meticulous engineering quality to the construction. A meeting of left / right brain that is the best aspects of any expression.</p>
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
