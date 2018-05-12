<template lang="html">
  <div class="draw-bg">
    <div class="draw-main">
      <drawMainTop/>
      <drawMiddleDrawer/>
      <drawUnderDrawer/>
    </div>
  </div>
</template>

<script>
import drawMainTop from './main-top.vue'
import drawMiddleDrawer from './main-middle-drawer.vue'
import drawUnderDrawer from './main-under-drawer.vue'
export default {

  name: 'drawMainPart',
  data () {
    return {

    }
  },
  components: {
    drawMainTop,
    drawMiddleDrawer,
    drawUnderDrawer,
  }
}
</script>

<style lang="less" scoped>
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
