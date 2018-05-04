<template lang="html">
  <div class="middle">
    <div class="draw-title clear">
      <div class="left">
        <h1>萌新画师</h1>
      </div>
      <div class="right">
        <i class="rotate"></i>
        <span>换一批</span>
      </div>
    </div>
    <div class="draw-main">
      <a v-for="item in newDrawer.drawerInfo">
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
import {newDrawer} from '@/../static/js/draw-recommend/newDrawer.js'

export default {
  name: 'middle-drawer',
  data () {
    return {
      newDrawer: newDrawer
    }
  }
}
</script>

<style lang="less" scoped>
  .middle {
    padding-top: 30px;

    .draw-title {
      padding: 16px 0;

      & > div:first-child {
        font-size: 24px;
      }

      & > div:nth-child(2) {
        color: #666;
        position: relative;

        & span {
          width: 72px;
          box-sizing: border-box;
          padding-left: 10px;
          line-height: 20px;
          cursor: pointer;
          font-size: 12px;
          border-radius: 10px;
          border: 1px #666 solid;
          display: block;
        }

        &:hover {
          color: #4FC1E9;
        }

        &:hover .rotate::before{
          transform: rotate(1turn);
        }

        .rotate::before {
          transform: rotate(0turn);
          transition: all .4s cubic-bezier(.22, .58, .12, .98);
          content: '';
          position: absolute;
          background: url('../../static/img/rotate.png') no-repeat;
          width: 14px;
          height: 14px;
          top: 5px;
          right: 7px;
        }
      }
    }

    .draw-main {
      display: flex;
      justify-content: space-between;

      & > a {
        cursor: pointer;
        display: block;

        .draw-independent {
          color: #000;
          position: relative;
          width: 200px;
          height: 177px;

          .draw-info-title {
            padding: 10px 0;
            font-size: 14px;
          }

          .shadow {
            overflow: hidden;
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 128px;
            background-color: #4FC1E9;

            .shadow-info {
              position: relative;
              height: 100%;
              animation: move-right .3s cubic-bezier(0.28, 0.04, 0.18, 0.97);
              animation-fill-mode: forwards;
              color: #fff;

              .shadow-info-main {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);

                .info-radius {
                  display: inline-block;
                  background-size: 100%!important;
                  width: 60px;
                  height: 60px;
                  border-radius: 50%;
                }

                .live {
                  position: relative;
                  display: inline-block;
                  padding: 0 0 0 20px;
                  box-sizing: border-box;
                  font-size: 12px;
                  transform: translateY(-25px);
                  margin-left: 15px;
                  border: 1px #fff solid;
                  border-radius: 20px;
                  width: 52px;
                  line-height: 17px;
                  height: 20px;

                  &::before {
                    content: '\25CF';
                    position: absolute;
                    top: 0;
                    left: 7px;
                    display: block;
                  }
                }
              }
            }
          }

          .draw-info-id {
            position: relative;

            .little-draw-man::before {
              content: '';
              position: absolute;
              background: url('../../static/img/drawer-man.jpg');
              width: 14px;
              height: 14px;
              top: 2px;
              left: 0;
              display: block;
            }

            & > span {
              color: #9F9F9F;
              font-size: 12px;
              margin-left: 20px;
            }
          }

          & > div:first-child {
            width: 200px;
            height: 128px;
            background-size: 100% 100%!important;
          }

          &:hover {
            color: #4FC1E9;
          }

          &:hover .shadow {
            display: block;
          }
        }


      }
    }
  }
</style>
