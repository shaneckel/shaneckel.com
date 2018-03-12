<template>
  <section>
    <span class="sep"></span>
    <p>Information regarding prints, please <nuxt-link :to="'/about'">reach out</nuxt-link>.</p>
  </section>
</template>

<script>

</script>

<style scoped lang="scss">
@import '../assets/scss/vars.scss';

section{
  margin-top: $base-line-height * 4;
}
p{
  color: white;
}
a{
  color: #ccc;
}
</style>
