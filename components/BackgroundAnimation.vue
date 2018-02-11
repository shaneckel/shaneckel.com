<template lang="html">
  <div class="background-animation">
    <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="none" class="full">
      <polygon width="100%" :points="rendered_points"></polygon>
    </svg>
  </div>
</template>

<script>
import { TweenLite } from 'gsap'

function valueToPoint (value, index, total) {
  var x = (value * 2)
  var y = (value * 2)
  var angle = 3.14 / total * index
  var cos = Math.cos(angle)
  var sin = Math.sin(angle)
  var tx = x * cos - y * sin + 40
  var ty = x * sin + y * cos + 200
  return {
    x: Math.abs(tx) >= 100 ? 100 : Math.abs(tx),
    y: Math.abs(ty)
  }
}

function generatePoints (stats) {
  var total = stats.length
  var funStuff = stats.map(function (stat, index) {
    var point = valueToPoint(stat, index, total)
    return Math.floor(point.x) + ',' + Math.floor(point.y)
  }).join(' ')
  return '40 0,200 0,200 200,100 200, ' + funStuff
}

export default {
  data: function () {
    let stats = Array.apply(null, { length: 11 })
      .map(function () { return 100 })
    return {
      stats: stats,
      rendered_points: generatePoints(stats),
      interval: null,
      updateInterval: 5000
    }
  },

  watch: {
    stats: function (newStats) {
      TweenLite.to(this.$data, this.updateInterval / 1000,
        { rendered_points: generatePoints(newStats) }
      )
    },
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
      this.stats = this.stats.map(function () {
        return vm.newRandomValue()
      })
    },
    newRandomValue: function () {
      return Math.ceil(38 + Math.random() * 18)
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
.background-animation{
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -10;
  // overflow: hidden;
}

.full {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -10;
  left: 0;
  top: 0;
}

svg {
  display: block;
  width: 100%;
  height: 100%
}

polygon {
  width: 100%;
  fill: #b5c5c7;
  opacity: .25;
  // transform: translate(45%,0px);
}
</style>
