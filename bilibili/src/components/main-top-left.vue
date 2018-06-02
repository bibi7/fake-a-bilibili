<template lang="html">
  <div class="top-left left">
    <!--  TODO  滑动banner  -->
    <!-- <div class="banner-ar"> -->
      <!-- <ul class="banner-ul">
        <li>
          <a href="#">
            <img src="../../static/img/banner/banner1.jpg">
          </a>
        </li>
      </ul> -->
    <!-- </div> -->
    <!--  固定 banner  -->
    <div class="banner">
      <a href="http://live.bilibili.com/hd/guide?visit_id=7dn8ak2gtl40">
        <img src="../../static/img/banner/banner-big.jpg">
      </a>
      <div class="banner-p-bg"></div>
      <p class="banner-info">当红主播的成长之路</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-top-left'
}
</script>

<style lang="less" scoped>
  .top-left {
    overflow: hidden;
    width: 648px;
    height: 277px;

    .banner {
      position: relative;
      height: 100%;
      border-radius: 5px;

      & img {
        width: 100%;
        height: 100%;
      }

      & .banner-p-bg {
        height: 35px;
        left: 0;
        bottom: 0;
        position: absolute;
        width: 100%;
        opacity: .5;
        background: linear-gradient(to bottom, transparent, #000);
      }
      & > p {
        line-height: 35px;
        color: #fff;
        font-size: 14px;
        padding-left: 20px;
        left: 0;
        bottom: 0;
        position: absolute;
        width: 100%;
      }
    }
    // .banner-ar {
    //   height: 100%;
    //   width: 500%;
    //   border-radius: 4px;
    //
    //   .banner-ul {
    //     width: 101%;
    //     height: 101%;
    //   }
    //   .banner-ul li {
    //     width: 20%;
    //     height: 100%;
    //
    //     & > img {
    //       width: 100%;
    //       height: 100%;
    //     }
    //   }
    // }
  }
</style>
