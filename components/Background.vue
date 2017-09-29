<template lang="html">
  <div class="background-cover">
    <div class="cover"></div>
    <svg class="full" >
      <polygon :points="pointsa"></polygon>
      <!-- <polygon class="poly1" :points="pointsb"></polygon> -->
      <!-- <polygon class="poly2" :points="pointsc"></polygon> -->
    </svg>
  </div>
</template>

<script>
import { TweenLite } from 'gsap'

function valueToPoint (value, index, total) {
  var x = 1200
  var y = -value * 10.9
  var angle = Math.PI * 2 / total * index
  var cos = Math.cos(angle)
  var sin = Math.sin(angle)
  var tx = x * cos - y * sin + 10
  var ty = x * sin + y * cos + 200
  return { x: tx, y: ty }
}

function generatePoints (stats) {
  var total = stats.length
  return stats.map(function (stat, index) {
    var point = valueToPoint(stat, index, total)
    return point.x + ',' + point.y
  }).join(' ')
}

export default {
  data: function () {
    var defaultSides = 80
    let statsa = Array.apply(null, { length: defaultSides })
      .map(function () { return 100 })
    // let statsb = Array.apply(null, { length: defaultSides })
    //   .map(function () { return 100 })
    return {
      statsa: statsa,
      // statsb: statsb,
      pointsa: generatePoints(statsa),
      // pointsb: generatePoints(statsb),
      interval: null,
      updateInterval: 6000
    }
  },

  watch: {
    statsa: function (newStats) {
      TweenLite.to(
        this.$data,
        this.updateInterval / 1000,
        { pointsa: generatePoints(newStats) }
      )
    },
    // statsb: function (newStats) {
    //   TweenLite.to(
    //     this.$data,
    //     this.updateInterval / 1000,
    //     { pointsb: generatePoints(newStats) }
    //   )
    // },

    updateInterval: function () {
      this.resetInterval()
    }
  },

  mounted: function () {
    this.resetInterval()
  },

  methods: {
    randomizeStats: function () {
      var vm = this
      this.statsa = this.statsa.map(function () {
        return vm.newRandomValue()
      })
      // this.statsb = this.statsb.map(function () {
      //   return vm.newRandomValue()
      // })
      // this.statsc = this.statsc.map(function () {
      //   return vm.newRandomValue()
      // })
    },
    newRandomValue: function () {
      return Math.ceil(40 + Math.random() * 20)
    },
    resetInterval: function () {
      var vm = this
      clearInterval(this.interval)
      this.randomizeStats()
      this.interval = setInterval(function () {
        vm.randomizeStats()
      }, this.updateInterval)
    }
  }
}
</script>

<style scoped lang="scss">
.background-cover{
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -10;
}

.full {
  height: 100%;
  position: absolute;
  z-index: -10;
  left: 0;
  top: 0;
}

.cover{
  background: red;
  background: url('~assets/img/noisy300.png');
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
  opacity: .1;
}
svg {
  display: block;
  width: 100%;
  height: 100%
}
polygon {
  width: 100%;
  fill: #b5c5c7;
  opacity: .3;
  transform: translate(45%,0px);
  &.poly1 {
    transform: translate(50%,0px);
  }
  &.poly2 {
    transform: translate(56%,0px);
  }
}

</style>
