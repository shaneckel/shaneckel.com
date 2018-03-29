<template>
  <section>
    <header class="intro-head content">
      <h1>Hello.</h1>
      <span class="sep"></span>
    </header>
    <main class="main content">
      <div class="image">
        <img src="/img/me.jpg" alt="" />
      </div>
      <div class="info">
        <h2>I'm Shane.</h2>
        <p>I do a lot of things. I write <a href="https://github.com/shaneckel">code</a>. I design. I help business owners in my home of Pittsburgh. I research technology. I raise children. I create art. I do husband stuff. I also greatly enjoy working with my hands. You might catch me wandering Pittsburgh on a skateboard or trying to get in shape on Strava.</p>
        <p>Currently, I work at <a href="http://www.bessemeralliance.com/about-us">Bessemer Alliance</a> as a Senior Software Engineer.</p>
        <p>If you need anything from me, please send me an email <span>(shaneckel@gmail.com)</span> or a <a href="https://twitter.com/shaneckel">tweet</a>.</p>
      </div>
    </main>
  </section>
</template>

<script>
import { TweenLite, Power3 } from 'gsap'
export default {
  name: 'about',

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

  main {
    color: white;
    display: flex;
    justify-content: flex-start;
    flex-flow: row-reverse;
    @include breakpoint-max(laptop) {
      display: block;
    }
    div{
      max-width: 50%;
      padding-right: $base-line-height* 2;
      padding-left: 0;
      @include breakpoint-max(laptop) {
        max-width: 100%;
      }
    }
    .image{
      padding-left: $base-line-height* 2;
      max-width: 50%;
      padding-top: 0;
      @include breakpoint-max(laptop) {
        border-radius: 20em;
        width: $base-line-height * 8;
        height: $base-line-height * 8;
        padding: 0;
        margin-bottom: $base-line-height *2;
        padding-left: 0;
        display: block;
        overflow: hidden;
        box-shadow: .1rem .3rem .45rem rgba(0,0,0,.3);
      }
      img{
        max-width: 100%;
        box-shadow: .1rem .3rem .45rem rgba(0,0,0,.3);

      }
    }
  }
  a, span{
    color: white;
    font-weight: 900;
  }
  a:hover{

  }
</style>
