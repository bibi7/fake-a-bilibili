<template>
  <div id="app">
    <biliHeader/>
    <drawMainPart/>
    <biliFooter/>
  </div>
</template>

<script>
import biliHeader from './components/b_header.vue'
import drawMainPart from './components/draw-main-part.vue'
import biliFooter from './components/footer.vue'

export default {
  name: 'App',
  components: {
    biliHeader,
    drawMainPart,
    biliFooter,
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
