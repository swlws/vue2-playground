<template>
  <article id="app">
    <Demo001 />
  </article>
</template>

<script>
import Demo001 from './view/demo-001/index.vue';
export default {
  name: 'App',
  components: {
    Demo001,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
