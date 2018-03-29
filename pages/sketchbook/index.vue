<template>
  <section>
    <header class="intro-head content">
      <h1>Sketchbooks</h1>
      <span class="sep"></span>
      <h4>2003 - 2017</h4>
    </header>
    <div class="main display">
      <article class="content">
        <p>I've been creating since before I could remember. For me, my life has just been a series of events that have improved my understanding on the human condition in order for me to render better insights. To the pursuit of true understanding. As of late, my focus has been on mathematics & computer technology. Which hasn't left a lot of room for rendering insights.</p>
        <p>These books allowed me to continue my work in short windows of opportunity. The secondary goal was to improve confidence with absolutes. The end result will be a limited run book. Also, a selected few will be printed in a short run of (5) and distributed.</p>
        <p>Below are a few pages.</p>
        <section class="collection">
          <div v-for="sketch in sketchs" class="asset">
            <img :src="'/sketch/' + sketch" alt="">
          </div>
        </section>
      </article>
    </div>
  </section>
</template>

<script>
import { TweenLite, Power3 } from 'gsap'

export default {
  name: 'projects',
  data () {
    return {
      sketchs: ['DSC_0192.JPG', 'DSC_0178.JPG', 'DSC_0212.JPG', 'DSC_0200.JPG', 'DSC_0187.JPG', 'DSC_0241.JPG', 'DSC_0229.JPG', 'DSC_0210.JPG', 'DSC_0199.JPG', 'DSC_0186.JPG', 'DSC_0240.JPG', 'DSC_0225.JPG', 'DSC_0209.JPG', 'DSC_0198.JPG', 'DSC_0184.JPG', 'DSC_0239.JPG', 'DSC_0223.JPG', 'DSC_0208.JPG', 'DSC_0197.JPG', 'DSC_0183.JPG', 'DSC_0238.JPG', 'DSC_0222.JPG', 'DSC_0207.JPG', 'DSC_0196.JPG', 'DSC_0182.JPG', 'DSC_0236.JPG', 'DSC_0221.JPG', 'DSC_0206.JPG', 'DSC_0195.JPG', 'DSC_0181.JPG', 'DSC_0235.JPG', 'DSC_0220.JPG', 'DSC_0205.JPG', 'DSC_0242.JPG', 'DSC_0180.JPG', 'DSC_0234.JPG', 'DSC_0204.JPG', 'DSC_0190.JPG', 'DSC_0179.JPG', 'DSC_0233.JPG', 'DSC_0216.JPG', 'DSC_0203.JPG', 'DSC_0189.JPG', 'DSC_0230.JPG', 'DSC_0232.JPG', 'DSC_0215.JPG', 'DSC_0202.JPG', 'DSC_0188.JPG']
    }
  },
  transition: {
    css: false,
    appear: true,
    beforeEnter (el) {
      TweenLite.set(el.querySelector('h1'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('.sep'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('h4'), {opacity: 0, x: '-200px'})
      TweenLite.set(el.querySelector('.main'), {opacity: 0})
    },
    enter (el, done) {
      TweenLite.to(el.querySelector('h1'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.2)
      TweenLite.to(el.querySelector('.sep'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.4)
      TweenLite.to(el.querySelector('h4'), 1, {opacity: 1, x: '0px', ease: Power3.easeOut}).delay(0.6)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 1, ease: Power3.easeOut}).delay(0.8)
      done()
    },
    leave (el, done) {
      TweenLite.to(el.querySelector('h1'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn})
      TweenLite.to(el.querySelector('.sep'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn}).delay(0.2)
      TweenLite.to(el.querySelector('h4'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn}).delay(0.4)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 0, ease: Power3.easeIn, onComplete: done}).delay(0.6)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/vars.scss';

article{
}

.main{
  background: rgba(255, 255, 255, .4);
}

.collection .content{
  position: relative;
  margin-bottom: 0;
}

.collection{
  display: flex;
  flex-wrap: wrap;
  padding: $base-line-height * 4 0 $base-line-height 0;
  text-align: center;
}
.asset{
  // border: 1px solid;
  flex: 1;
  flex-basis: 48%;
  margin: $base-line-height /4;
  // @include breakpoint-min(laptop){
  //   flex-basis: 30%;
  // }
}

img{
  // box-shadow: .1rem .3rem .45rem rgba(0,0,0,.3);
  max-width: 100%;
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
