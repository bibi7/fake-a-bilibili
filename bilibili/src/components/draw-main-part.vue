<template lang="html">
  <div class="draw-bg">
    <div class="draw-main">
      <drawMainTop/>
    </div>
  </div>
</template>

<script>
import drawMainTop from './main-top.vue'

export default {
  name: 'drawMainPart',
  data () {
    return {

    }
  },
  components: {
    drawMainTop,
  }
}
</script>

<style lang="less">
  .draw-bg {
    background: url('../../static/img/draw-bg.jpg') no-repeat center -50px;
    min-height: 900px;

    .draw-main {
      width: 1096px;
      margin: 0 auto;
      padding-top: 30px;
    }
  }
</style>
