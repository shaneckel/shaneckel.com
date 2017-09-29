<template>
  <section class="container">
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Try again.
    </nuxt-link>
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
</style>
