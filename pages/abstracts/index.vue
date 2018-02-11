<template>
  <section>
    <header>
      <div class="info">
        <h1>Abstracts</h1>
        <span class="sep"></span>
      </div>
    </header>
    <article class="main">
      <div>
        <h3>Modern Untitled</h3>
        <h4>2011 - 2014</h4>
        <h3>—</h3>
        <p>The development of these abstracts was primarly in exploration of design principles.</p>
        <p>Each took roughly a day to complete and go through many iterations. At some point, the work is done. Saved, flattened, and dated.</p>
        <p>Primarely for digital, but have been adapted for print.</p>
      </div>
      <div>
        <h3>Incomplete</h3>
        <h4>2007</h4>
        <h3>—</h3>
        <p>The development of these abstracts was primarly in exploration of design principles.</p>
        <p>Each took roughly a day to complete and go through many iterations. At some point, the work is done. Saved, flattened, and dated.</p>
        <p>Primarely for digital, but have been adapted for print.</p>
      </div>
      <div>
        <h3>Pittsburgh Bridges</h3>
        <h4>2007</h4>
        <h3>—</h3>
        <p>The development of these abstracts was primarly in exploration of design principles.</p>
        <p>Each took roughly a day to complete and go through many iterations. At some point, the work is done. Saved, flattened, and dated.</p>
        <p>Primarely for digital, but have been adapted for print.</p>
      </div>
      <div>
        <h3>Untitled</h3>
        <h4>2003 - 2006</h4>
        <h3>—</h3>
        <p>These abstracts were for exploration of the design elements & principles. </p>
        <p>Of the eighty renderings, each took roughly a day to complete through many iterations. At some point, the work is considered done. Saved, flattened, and dated.</p>
        <p>Primarily for digital, but have been adapted for print.</p>
      </div>
    </article>
  </section>
</template>

<script>
import { TweenLite, Power3 } from 'gsap'

export default {
  name: 'abstracts',
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
    },
    leave (el, done) {
      TweenLite.to(el.querySelector('h1'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn})
      TweenLite.to(el.querySelector('.sep'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn}).delay(0.2)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn, onComplete: done}).delay(0.4)
    }

  }
}
</script>

<style scoped lang="scss">
  .main{
    max-width: 1280px;
    margin: 0 auto;
    padding: 5em;
    background: none;
  }

</style>
