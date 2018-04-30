<template>
  <div id="app">
    <biliHeader/>
    <drawMainPart/>
  </div>
</template>

<script>
import biliHeader from './components/b_header.vue'
import drawMainPart from './components/draw-main-part.vue'
export default {
  name: 'App',
  components: {
    biliHeader,
    drawMainPart,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
