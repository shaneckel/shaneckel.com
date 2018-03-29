<template>
  <section>
    <header class="intro-head content">
      <h1>Project/ Eden</h1>
      <span class="sep"></span>
    </header>
    <article class="main">
      <section class="collection">
        <div class="top-asset">
          <figure class="display">
            <img src="/img/project_eden1.jpg" alt="">
          </figure>
        </div>
        <div class="content">
          <h3>Eden</h3>
          <p class="year">2011 - 2017</p>
          <p>Eden was truly first of its kind in the city of Pittsburgh. A fine dining raw vegan restaurant. The sole founder, owner, and head chef of the restaurant created the concept to elevate vegan food to a level above casual eating. She's a genius in a kitchen. Her ability to construct dynamic and intricate plates using vegan ingredients is inspiring. On top of being a talented chef, she's a very talented artist. Which led to the importance of the branding and styling quality to never fall below the level that the chef was running at. From the sign out front, to the decor, to how the menu felt in your hands. It was all there to carry you to a dining experience that the talent in the back created from scratch.</p>
        </div>
      </section>
      <section class="collection">
        <div class="top-asset">
          <figure class="display">
            <img src="/img/project_eden2.jpg" alt="">
          </figure>
        </div>
        <div class="content">
          <h3>Code</h3>
          <p>A great deal of the web experience was focused on carrying the same experience with the menu to the web. Whether it be with a cellphone or a desktop. Each page had to sit with you and prepare you for a great meal.</p>
          <p>Written in php with a json export to power Angular (1) application. The website evolved many times throughout the years, but it was always built with an eye on the details.</p>
          <a href="https://github.com/shaneckel/edenpittsburgh">
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
            <img src="/img/project_eden4.jpg" alt="">
          </figure>
        </div>
        <div class="content">
          <h3>Print</h3>
          <p>Eden changed their entire menu every season. So we created a unique menu and photography set every season. This allowed us to evolve the design iteratively, and not get locked into a specific theme. Our goal was to make our regular guests feel like we care about them, and that we appreciate their return. Also that we deliver food directly from local farms. The photography was taken with a macro lens with minimal lighting. After shooting, I would then explore lines and visual movement to create that season's theme.</p>
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
