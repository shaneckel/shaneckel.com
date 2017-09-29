<template>
  <article class="main untitled-series">
    <section class="description">
      <div>
        <h3>Untitled</h3>
        <h4>2003 - 2006</h4>
        <h3>—</h3>
        <p>These abstracts were for exploration of the design elements & principles. </p>
        <p>Of the eighty renderings, each took roughly a day to complete through many iterations. At some point, the work is considered done. Saved, flattened, and dated.</p>
        <p>Primarily for digital, but have been adapted for print.</p>
        <h3>—</h3>
      </div>
      <div class="nav">
        <button class="arrow prev-button-un" href="#">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g></svg>
        </button>
        <button class="arrow next-button-un" href="#">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g></svg>
        </button>
      </div>
    </section>
    <section v-swiper:mySwiper="swiperOption" class="images">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="image in untitled">
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

      untitled: [
        {
          src: '/img/abstract-untitled79-2006.jpg',
          year: '2006',
          title: 'untitled 79'
        },
        {
          src: '/img/abstract-untitled75-2006.jpg',
          year: '2006',
          title: 'untitled 75'
        },
        {
          src: '/img/abstract-untitled71-2005.jpg',
          year: '2005',
          title: 'untitled 71'
        },
        {
          src: '/img/abstract-untitled70-2005.jpg',
          year: '2005',
          title: 'untitled 70'
        },
        {
          src: '/img/abstract-untitled68-2005.jpg',
          year: '2005',
          title: 'untitled 68'
        },
        {
          src: '/img/abstract-untitled65-2005.jpg',
          year: '2005',
          title: 'untitled 65'
        },
        {
          src: '/img/abstract-untitled59-2004.jpg',
          year: '2004',
          title: 'untitled 59'
        },
        {
          src: '/img/abstract-untitled31-2003.jpg',
          year: '2003',
          title: 'untitled 31'
        }

      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        nextButton: '.next-button-un',
        prevButton: '.prev-button-un'
      }
    }
  }

}
</script>

<style scoped lang="scss">
.main{
  background: rgba(133, 85, 85, 0.43);
}

.prev-button-un svg{
  transform: rotate(180deg);
}

.untitled-series{
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
    clip-path: polygon(0 100%,20% 0,100% 0,100% 100%);
  }

  .asset{
    display: block;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: rgba(87, 81, 95, .4);
    background-color: black;
    position: relative;
    &:hover{
      background-size: contain;
      &:after{
        transition: all .4s;
        background-color: rgba(196, 186, 186, 0.61);
      }
    }
    .content{
      position: absolute;
      z-index: 20;
      bottom: 1em;
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
