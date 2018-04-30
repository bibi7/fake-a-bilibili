<template lang="html">
  <div class="top clear">
    <!-- <mainTopLeft/> -->
    <mainTopRight/>
  </div>
</template>

<script>
import mainTopLeft from './main-top-left.vue'
import mainTopRight from './main-top-right.vue'
export default {
  name: 'main-top',
  data () {
    return {

    }
  },
  components: {
    mainTopLeft,
    mainTopRight
  }
}
</script>

<style lang="less" scoped>
  .top {
    height: 277px;
  }
</style>
