<template>
  <article class="main pittsburgh-series">
    <section class="description">
      <div>
        <h3>Modern Untitled</h3>
        <h4>2011 - 2014</h4>
        <h3>—</h3>
        <p>The development of these abstracts was primarly in exploration of design principles.</p>
        <p>Each took roughly a day to complete and go through many iterations. At some point, the work is done. Saved, flattened, and dated.</p>
        <p>Primarely for digital, but have been adapted for print.</p>
        <h3>—</h3>
      </div>
      <div class="nav">
        <button class="arrow prev-button-mod" href="#">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g></svg>
        </button>
        <button class="arrow next-button-mod" href="#">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g></svg>
        </button>
      </div>
    </section>
    <section v-swiper:mySwiper="swiperOption" class="images">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="image in modern">
          <div class="asset" :style="{ 'background-image': 'url(' + image.src + ')'}">
            <div class="content">
              <p class="title">{{image.title}} / <span>{{image.year}}</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>

</template>

<script>

export default {
  name: 'abstracts',
  data () {
    return {
      modern: [
        {
          src: '/img/abstract-modern-2014.jpg',
          year: '2014',
          title: 'Modern Untitled 7'
        },
        {
          src: '/img/abstract-modern-2011.jpg',
          year: '2011',
          title: 'Modern Untitled 5'
        }
      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        nextButton: '.next-button-mod',
        prevButton: '.prev-button-mod'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main{
  background: rgba(52, 16, 34, 0.23);
}

.prev-button-mod svg{
  transform: rotate(180deg);
}

.pittsburgh-series{
  color: #aaa;
  transition: background .4s;
  display: flex;
  .description{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    max-width: 30%;
    padding: 3em;
    padding-left: 10em;
    padding-right: 1em;
    padding-top: 5em;
    p{
      padding-bottom: 1.05em;
    }
    h4{
      font-weight: 300;
      font-style: italic;
    }
    .nav{
      text-align: right;
      margin-top: 1em;
      z-index: 99;
    }
  }

  .images{
    overflow: hidden;
    background: black;
    flex: 1;
    min-height: 60vw;
    clip-path: polygon(0 0,20% 100%,100% 100%,100% 0);
  }

  .asset{
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: rgba(87, 81, 95, .4);
    background-color: black;
    position: relative;

    .content{
      position: absolute;
      z-index: 20;
      top: 1em;
      left: 0;
      padding: .2em 1em .2em 2em;
      background: black;
      p{
        color: white;
        font-size: .75em;
        text-transform: uppercase;
        span{
          font-size: .9em;
          font-weight: 900;
        }
      }
    }
  }
}

</style>
