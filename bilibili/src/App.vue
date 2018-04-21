<template>
  <div id="app">
    <biliHeader/>
  </div>
</template>

<script>
import biliHeader from './components/b_header.vue'
export default {
  name: 'App',
  components: {
    biliHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
