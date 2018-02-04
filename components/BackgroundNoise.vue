<template lang="html">
  <div class="background-noise"></div>
</template>

<script>
export default {
  name: 'BackgroundNoise'
}
</script>

<style scoped lang="scss">
.background-noise{
  background: url('~assets/img/noisy300.png');
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -5;
  opacity: .1;
}
</style>
