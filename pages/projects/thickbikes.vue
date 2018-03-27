<template>
  <section>
    <header class="intro-head content">
      <h1>Project/ Thick Bikes</h1>
      <span class="sep"></span>
    </header>
    <article class="main">
      <section class="collection">
        <div class="top-asset">
          <figure class="display">
            <img src="/img/project_thick1.jpg" alt="">
          </figure>
        </div>
        <div class="content">
          <h3>Thick Bikes</h3>
          <p class="year">2009 - 2018</p>
          <p>thick bikes info</p>
          <a href="https://thickbikes.com">
            <button class="btn-right" href="#">
              <p>thickbikes.com</p>
              <span class="arrow">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g></svg>
              </span>
            </button>
          </a>
        </div>
      </section>
    </article>
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
    padding: $base-line-height * 4 0 $base-line-height 0;
    text-align: center;
    @include breakpoint-min(full){
      padding: $base-line-height * 4
    }
    img{
      box-shadow: .1rem .3rem .45rem rgba(0,0,0,.3);
      width: 100%;
    }
  }
  button{
    padding-left: 0;
    padding-right: 0;
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
