<template>
  <section class="content">
    <h1>{{ error.statusCode }}</h1>
    <p>I'm sure I did something wrong. Life is full of ups and downs. Try going to the <a href="/">index</a> and trying again. Look... Nobody said I was perfect.</p>
  </section>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
  .content{
    text-align: center;
    padding-top: 12em;
  }
  p{
    max-width: 18em;
    margin: 0 auto;
  }
  a{
    font-weight: 800;
  }
</style>
