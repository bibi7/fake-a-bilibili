<template lang="html">
  <div class="top-right right right-section">
    <section class="right-section">
      <a :href="recommend.url" v-for="(recommend, index) in recommends">
        <div class="recommend"
             :class="index == 0 ? 'recommend-one' : index == 1 ? 'recommend-two'
             :index == 2 ? 'recommend-three': index == 3 ? 'recommend-four' : '' ">
          <div>
            <div class="recommend-shadow"></div>
            <div class="recommend-info">
              <p>{{recommend.recommendTitle}}</p>
              <div class="clear">
                <div class="left">
                  <span>{{recommend.recommendOwner}}</span>
                </div>
                <div class="right">
                  <i class="watch-people po-re"></i>
                  <span>{{recommend.recommendWatchPeople}}</span>
                </div>
              </div>
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
          overflow: hidden;
        }

        & > div:hover .recommend-shadow {
          display: block;
        }

        & > div:hover .recommend-info {
          bottom: 0;
        }
      }

      .recommend-shadow {
        display: none;
        background-color: #000;
        position: absolute;
        width: 100%;
        height: 100%;
        transition: all .35s cubic-bezier(0.28, 0.04, 0.18, 0.97);
        animation: recommend-fade .45s cubic-bezier(0.28, 0.04, 0.18, 0.97);
        animation-fill-mode: forwards;
      }
      .recommend-info {
        padding-left: 10px;
        position: absolute;
        font-size: 14px;
        color: #fff;
        width: 100%;
        bottom: -23px;
        transition: all .35s cubic-bezier(0.28, 0.04, 0.18, 0.97);

        & > div{
          margin-top: 2px;
          line-height: 30px;

          & > div:nth-child(2) {
            margin-right: 50px;
          }
        }

        .watch-people::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 2px;
          width: 16px;
          height: 16px;
          background: url('../../static/img/recommend/watch.png')
        }
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
