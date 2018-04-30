<template lang="html">
  <div class="top-right right right-section">
    <section class="right-section">
      <a href="#">
        <div class="">
          1
        </div>
      </a>
      <a href="#">
        <div class="">
          2
        </div>
      </a>
      <a href="#">
        <div class="">
          3
        </div>
      </a>
      <a href="#">
        <div class="">
          4
        </div>
      </a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'main-top-right'
}
</script>

<style lang="less" scoped>
  .top-right {
    width: 448px;
    height: 277px;

    .right-section {
      font-size: 0; /*解决a标签间距问题，下同*/
      // letter-spacing: -999px;
    }
    .right-section a{
      font-size: 12px;
      display: inline-block;
    }
    .right-section a div {
      position: relative;
      display: inline-block;
      width: 200px;
      height: 128px;
      margin-left: 24px;
      margin-bottom: 20px;
    }
  }
</style>
