<template lang="html">
  <div class="middle">
    <div class="draw-title clear">
      <div class="left">
        <h1>绘画直播</h1>
      </div>
    </div>
    <div class="draw-main">
      <a v-for="item in totalDrawer.drawerInfo" :href="item.url" target="_blank">
        <div class="draw-independent">
          <!--drawer背景，宽高200 128-->
          <div :style="{background: item.path}"></div>
          <!--鼠标悬浮部分-->
          <div class="shadow">
            <div class="shadow-info">
              <div class="shadow-info-main">
                <div class="info-radius" :style="{background: item.smallPath}"></div>
                <span class="live">Live</span>
              </div>
            </div>
          </div>
          <!--个人信息部分-->
          <div class="draw-info-title">
            <p>{{item.title}}</p>
          </div>
          <!--drawer id部分-->
          <div class="draw-info-id">
            <i class="little-draw-man"></i>
            <span>{{item.userName}}</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import {totalDrawer} from '@/../static/js/draw-recommend/totalDrawer.js'

export default {
  name: 'under-drawer',
  data () {
    return {
      totalDrawer: totalDrawer
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../static/css/draw.less';
.middle {
  padding-top: 30px;

  .draw-title {
    padding: 16px 0;

    & > div {
      font-size: 24px;
    }
  }
}


</style>
