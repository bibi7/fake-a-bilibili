<template lang="html">
  <div class="top-right right right-section">
    <section class="right-section">
      <a href="#" v-for="(recommend, index) in recommends">
        <div class="recommend"
             :class="index == 0 ? 'recommend-one' : index == 1 ? 'recommend-two'
             :index == 2 ? 'recommend-three': index == 3 ? 'recommend-four' : '' ">
          <div>
            <div class="recommend-shadow">

            </div>
          </div>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
import {recommend} from '../../static/js/draw-recommend/recommend.js'
console.log(recommend)
export default {
  name: 'main-top-right',
  data () {
    return {
      recommends: recommend.recommendArray,
    }
  },
  methods: {
    click: () => {
      console.log(recommends)
    }
  }
}
</script>

<style lang="less" scoped>
  .top-right {
    width: 448px;
    height: 277px;

    .right-section {
      font-size: 0; /*解决a标签间距问题，下同*/
      // letter-spacing: -999px;

      .recommend-one {
        background: url('../../static/img/recommend/recommend-1.jpg');
        background-size: 100% 100%;
      }
      .recommend-two {
        background: url('../../static/img/recommend/recommend-2.jpg');
        background-size: 100% 100%;
      }
      .recommend-three {
        background: url('../../static/img/recommend/recommend-3.jpg');
        background-size: 100% 100%;
      }
      .recommend-four {
        background: url('../../static/img/recommend/recommend-4.jpg');
        background-size: 100% 100%;
      }
    }
    .right-section a {
      font-size: 12px;
      display: inline-block;

      .recommend {
        overflow: hidden;

        & > div {
          width: 100%;
          height: 100%;
          position: relative;
        }

        & > div:hover .recommend-shadow{
          display: block;
        }
      }

      .recommend-shadow {
        display: none;
        background-color: #000;
        position: absolute;
        width: 100%;
        height: 100%;
        animation: recommend-fade .45s cubic-bezier(0.28, 0.04, 0.18, 0.97);
        animation-fill-mode: forwards;
      }

    }
    .right-section a > div {
      position: relative;
      display: inline-block;
      width: 200px;
      height: 128px;
      margin-left: 24px;
      margin-bottom: 20px;
    }
  }
</style>
