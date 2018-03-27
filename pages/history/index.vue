<template>
  <section>
    <header class="intro-head content">
      <h1>Work History</h1>
      <span class="sep"></span>
    </header>
    <div class="main content">
      <article class="years" v-for="year in years">
        <h2>{{year}}</h2>
        <div class="project" v-if="year == getYear(project.date)" v-for="project in data">
          <section class="project-topbar">
            <div>
              <div class="box code" v-if="project.code === 'TRUE'"><span>code</span></div>
              <div class="box design" v-if="project.design === 'TRUE'"><span>design</span></div>
              <div class="box fulltime" v-if="project.fulltime === 'TRUE'"><span>fulltime</span></div>
            </div>
            <div>
              <div class="box link" v-if="project.project_link"><nuxt-link :to="project.project_link">view</nuxt-link></div>
              <div class="box link" v-if="project.external_link"><a :href="project.external_link">link</a></div>
              <div class="box link" v-if="project.github"><a :href="project.github">github</a></div>
            </div>
          </section>
          <section>
            <h6 class="client">{{project.client}}</h6>
            <p class="information">
              <span class="date">{{getDayMonth(project.date)}}</span>
              <span class="space">—</span>
              <span class="project_info">{{project.project}}. </span>
              <span> {{project.description}}</span>
            </p>
          </section>
          <section>
            <p class="description"></p>
          </section>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { TweenLite, Power3 } from 'gsap'
import format from 'date-fns/format'

export default {
  async asyncData ({ app, params, store }) {
    let data = await app.$axios.$get(`/api/history`)
    let years = await app.$axios.$get(`/api/history_years`)
    return {
      data,
      years
    }
  },
  name: 'history',
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
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 1, ease: Power3.easeOut, onComplete: done}).delay(0.6)
    },
    leave (el, done) {
      TweenLite.to(el.querySelector('h1'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn})
      TweenLite.to(el.querySelector('.sep'), 1, {opacity: 0, x: '100px', ease: Power3.easeIn}).delay(0.2)
      TweenLite.to(el.querySelector('.main'), 1, {opacity: 0, ease: Power3.easeIn, onComplete: done}).delay(0.4)
    }
  },
  computed: {
    styledata: function () {
      return {
        'colors': this.$store.state.hover_colors
      }
    }
  },
  created: function () {
    this.$store.commit('setcolors')
  },
  watch: {
    styledata (store) {
      TweenLite.to(document.querySelectorAll('.project-topbar'), 1, {
        color: `${store.colors.color_b}`,
        ease: Power3.easeOut
      }).delay(0.1)
    }
  },
  methods: {
    shorten (arg, n) {
      return (arg.match(RegExp('.{' + n + '}\\S*')) || [arg])[0]
    },
    getYear (arg) {
      return format(arg, 'YYYY')
    },
    getDayMonth (arg) {
      return format(arg, 'M.DD.YYYY')
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/scss/vars.scss';

  .years{
    font-size: .75em;
    @include breakpoint-max(laptop) {
      font-size: .9em;
    }
    padding-bottom: $base-line-height *2;
  }

  .project{
    padding: $base-line-height / 2;
    transition: background .8s;
    margin-left: -$base-line-height/2;
    p{
      padding-bottom: 0;
    }

  }
  .project:hover{
    background: rgba(255, 255, 255, .1);
    transition: background .2s;
    a{
      color: white;
    }
  }

  .project-topbar{
    color: #8a451d;
    border-bottom: 1px dotted;
    display: flex;
    font-size: .8em;
    justify-content: space-between;
  }

  .space{
    padding: 0 $base-line-height /2;
  }

  .date{
    font-style: italic;
  }

  .client{
    font-weight: 500;
  }

  .project_info {
    display: inline-block;
    text-transform: capitalize;
    font-style: italic;
  }

  .information{
    padding: $base-line-height /2;
    padding-left: 0;
  }

  .box{
    display: flex;
    align-items: center;
    justify-content: center;
    display: inline-block;

    a, span{
      display: inline-block;
      text-transform: uppercase;
      letter-spacing: .1em;
      padding: $base-line-height / 2 $base-line-height ;
      padding-left: 0;
    }
    span{
      font-weight: 800;
    }
    a{
      padding-left: $base-line-height;
      padding-right: 0;
    }
  }

</style>
