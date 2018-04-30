<template lang="html">
  <div class="header">
    <div class="header-in">
      <div class="left">
        <a href="https://www.bilibili.com/" target="_blank">
          <div class="main-station">
            <span>主站</span>
          </div>
        </a>
        <nav>
          <a href="https://live.bilibili.com/" target="_blank">
            <div>
              <span>直播</span>
            </div>
          </a>
          <a href="https://live.bilibili.com/all" target="_blank">
            <div>
              <span>全部</span>
            </div>
          </a>
          <a href="https://live.bilibili.com/pages/area/ent" target="_blank" class="entertainment">
            <div>
              <span>娱乐</span>
              <div class="drop-down drop-entertainment">
                <div class="drop-down-content">
                  <span v-for="entertainmentInfo in headerLinkList.entertainment">
                    <a :href="entertainmentInfo.entertainmentLink" target="_blank">{{entertainmentInfo.entertainmentName}}</a>
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a href="https://live.bilibili.com/p/eden/area-tags#/2/0" target="_blank" class="game">
            <div>
              <span>游戏</span>
              <div class="drop-down drop-game">
                <div class="drop-down-content">
                  <span v-for="gameInfo in headerLinkList.game">
                    <a :href="gameInfo.gameLink" target="_blank">{{gameInfo.gameName}}</a>
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a href="https://live.bilibili.com/p/eden/area-tags#/3/0" target="_blank" class="phone-game">
            <div>
              <span>手游</span>
              <div class="drop-down drop-phoneGame">
                <div class="drop-down-content">
                  <span v-for="phoneGameInfo in headerLinkList.phoneGame">
                    <a :href="phoneGameInfo.phoneGameLink" target="_blank">{{phoneGameInfo.phoneGameName}}</a>
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a href="https://live.bilibili.com/pages/area/draw" target="_blank" class="draw">
            <div>
              <span>绘画</span>
              <div class="drop-down drop-draw">
                <div class="drop-down-content">
                  <span v-for="drawInfo in headerLinkList.draw">
                    <a :href="drawInfo.drawLink" target="_blank">{{drawInfo.drawName}}</a>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </nav>
      </div>
      <div class="right">
        <a href="#" class="user left">
          <div class="user-box">
            <div class="user-hover-shadow"></div>
          </div>
          <div class="user-dropdown">
            <!--id以及经验条区域-->
            <div class="id-experience-content">
              <span>{{ueseName}}</span>
              <i class="icon-father"></i>
              <div class="experience">
                <span>{{levelFrom}}</span>
                <div class="ex-line">
                  <div class="ex-line-in"></div>
                </div>
                <span>{{levelTo}}</span>
              </div>
            </div>
            <!-- 金瓜子、银瓜子、成就值 -->
            <div class="gode-silver-achievement">
              <div class="gode-silver common-text-gray-hover-blue">
                <div class="clear">
                  <div class="left">
                    <div>
                      <img src="@/../static/img/gold.jpg">
                      <span>金瓜子</span>
                    </div>
                  </div>
                  <div class="right">
                    <span>{{goldMoney}}</span>
                  </div>
                </div>
                <div class="clear">
                  <div class="left">
                    <div>
                      <img src="@/../static/img/silver.jpg">
                      <span>银瓜子</span>
                    </div>
                  </div>
                  <div class="right">
                    <span>{{silverMoney}}</span>
                  </div>
                </div>
              </div>
              <div class="achievement common-text-gray-hover-blue">
                <div class="clear">
                  <div class="left">
                    <div>
                      <img src="@/../static/img/achievement.jpg">
                      <span>成就值</span>
                    </div>
                  </div>
                  <div class="right">
                    <span>{{achievement}}</span>
                  </div>
                </div>
              </div>
            </div>
            <!--直播中心信息-->
            <div class="broadcast-content">
              <div class="broadcast-content-in">
                <div class="clear">
                  <div class="broadcast-in left">
                    <a href="#" class="a-broadcast">
                      <span class="bro-center">直播中心</span>
                    </a>
                  </div>
                  <div class="broadcast-in right">
                    <a href="#" class="a-space">
                      <span class="main-space">主站空间</span>
                    </a>
                  </div>
                </div>
                <div class="clear">
                  <div class="broadcast-in left">
                    <a href="#" class="a-message">
                      <span class="message-center">消息中心</span>
                    </a>
                  </div>
                  <div class="broadcast-in right">
                    <a href="#" class="a-live">
                      <span class="my-live">我的直播间</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--退出-->
            <div class="exit common-text-gray-hover-blue">
              <span>退出登陆</span>
            </div>
          </div>
        </a>
        <nav>
          <a href="#">
            <div>
              <span>动态</span>
            </div>
          </a>
          <a href="#">
            <div>
              <span>签到</span>
            </div>
          </a>
          <a href="#">
            <div>
              <span>下载</span>
            </div>
          </a>
        </nav>
      </div>
      <headerInput/>
    </div>
  </div>
</template>

<script>
import headerInput from './commonInput.vue'
export default {
  name: 'header_',
  data () {
    return {
      ueseName: '盐哔-',
      levelFrom: 'UL.20',
      levelTo: 'UL.21',
      goldMoney: '1000',
      silverMoney: '1.8万',
      achievement: '275',
      headerLinkList: {
        game:[
          {gameName: '绝地求生' ,gameLink: 'https://live.bilibili.com/p/eden/area-tags#/2/80'},
          {gameName: '英雄联盟' ,gameLink: 'https://live.bilibili.com/p/eden/area-tags#/2/86'},
          {gameName: 'DOTA2' ,gameLink: 'https://live.bilibili.com/p/eden/area-tags#/2/92'},
          {gameName: '炉石传说' ,gameLink: 'https://live.bilibili.com/p/eden/area-tags#/2/91'},
          {gameName: '守望先锋' ,gameLink: 'https://live.bilibili.com/p/eden/area-tags#/2/87'}
        ],
        draw:[
          {drawName: '原创绘画' ,drawLink: 'https://live.bilibili.com/p/eden/area-tags#/4/51'},
          {drawName: '同人绘画' ,drawLink: 'https://live.bilibili.com/p/eden/area-tags#/4/94'},
          {drawName: '临摹绘画' ,drawLink: 'https://live.bilibili.com/p/eden/area-tags#/4/95'},
          {drawName: '其他绘画' ,drawLink: 'https://live.bilibili.com/p/eden/area-tags#/4/96'},
        ],
        entertainment:[
          {entertainmentName: '美少女' ,entertainmentLink: 'https://live.bilibili.com/pages/area/ent-all#1/139'},
          {entertainmentName: '唱见' ,entertainmentLink: 'https://live.bilibili.com/pages/area/ent-all#12/21'},
          {entertainmentName: '才艺' ,entertainmentLink: 'https://live.bilibili.com/pages/area/ent-all#12/143'},
          {entertainmentName: 'ASMR' ,entertainmentLink: 'https://live.bilibili.com/pages/area/ent-all#1/30'},
          {entertainmentName: '声优' ,entertainmentLink: 'https://live.bilibili.com/pages/area/ent-all#12/24'},
          {entertainmentName: '户外' ,entertainmentLink: 'https://live.bilibili.com/pages/area/ent-all#2/123'},
          {entertainmentName: '美食' ,entertainmentLink: 'https://live.bilibili.com/pages/area/ent-all#2/136'},
        ],
        phoneGame:[
          {phoneGameName: 'FGO' ,phoneGameLink: 'https://live.bilibili.com/p/eden/area-tags#/3/37'},
          {phoneGameName: '王者荣耀' ,phoneGameLink: 'https://live.bilibili.com/p/eden/area-tags#/3/35'},
          {phoneGameName: '碧蓝航线' ,phoneGameLink: 'https://live.bilibili.com/p/eden/area-tags#/3/113'},
          {phoneGameName: '崩坏3' ,phoneGameLink: 'https://live.bilibili.com/p/eden/area-tags#/3/40'},
          {phoneGameName: '其他手游' ,phoneGameLink: 'https://live.bilibili.com/p/eden/area-tags#/3/98'},
        ]
      }
    }
  },
  components: {
    headerInput
  }
}
</script>

<style lang="less" scoped>
@height: 55px;
.user-hover-shadow {
  z-index: 50;
  display: none;
  position: absolute;
  border-radius: 50%;
  animation: bg-animation .5s cubic-bezier(0.28, 0.04, 0.18, 0.97);
}

  .header {
    height: @height;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    .header-in {
      width: 65%;
      margin: 0 auto;
      height: 100%;
      color: #646C7A;
      font-size: 12px;
      line-height: @height;

      &::after {
        content: '';
        display: block;
        clear: both;
        visibility: hidden;
      }

      nav {
        display: inline-block;
        margin-left: 15px;
      }

      nav > a{
        display: inline-block;
        padding: 0 15px;
        color: #646C7A;
        & > div:first-child {
          position: relative;
        }

        &:hover {
          background-color: #A6A9AB;
          color: #fff;
        }

        .drop-down {
          position: absolute;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          top: 55px;
          background-color: #fff;
          z-index: 10;
          left: -15px;
          line-height: 35px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
          height: 0;
          overflow: hidden;
          transition: height .3s cubic-bezier(0, 0, 0, .79);
        }
      }

      .game:hover .drop-game {
        height: 180px;
      }

      .game:hover .drop-down-content {
        opacity: 1;
        display: block;
        height: 180px;
        transition: height .8s cubic-bezier(0, 0, 0, .79) .2s;
      }

      .draw:hover .drop-draw {
        height: 150px;
      }

      .draw:hover .drop-down-content {
        opacity: 1;
        display: block;
        height: 150px;
        transition: height .8s cubic-bezier(0, 0, 0, .79) .2s;
      }

      .entertainment:hover .drop-entertainment {
        height: 250px;
      }

      .entertainment:hover .drop-down-content {
        opacity: 1;
        display: block;
        height: 250px;
        transition: height .8s cubic-bezier(0, 0, 0, .79) .2s;
      }

      .phone-game:hover .drop-phoneGame {
        height: 180px;
      }

      .phone-game:hover .drop-down-content {
        opacity: 1;
        display: block;
        height: 180px;
        transition: height .8s cubic-bezier(0, 0, 0, .79) .2s;
      }
    }
  }

  .drop-down-content {
    display: none;
    opacity: 0;
    height: 0;
    transition: all .3s linear;
    border-radius: 5px;
    margin: 5px 0;
    width: 120px;
  }

  .drop-down-content span {
    display: block;
    text-align: left;
  }

  .drop-down-content span:nth-child(1) {
    animation: moveLeft-one .6s cubic-bezier(0.28, 0.04, 0.2, 1.02);
  }

  .drop-down-content span:nth-child(2) {
    animation: moveLeft-two .62s cubic-bezier(0.28, 0.04, 0.2, 1.02);
  }

  .drop-down-content span:nth-child(3) {
    animation: moveLeft-three .65s cubic-bezier(0.28, 0.04, 0.2, 1.02);
  }

  .drop-down-content span:nth-child(4) {
    animation: moveLeft-fore .68s cubic-bezier(0.28, 0.04, 0.2, 1.02);
  }

  .drop-down-content span:nth-child(5) {
    animation: moveLeft-five .7s cubic-bezier(0.28, 0.04, 0.2, 1.02);
  }

  .drop-down-content span:nth-child(6) {
    animation: moveLeft-six .73s cubic-bezier(0.28, 0.04, 0.2, 1.02);
  }

  .drop-down-content span:nth-child(7) {
    animation: moveLeft-seven .78s cubic-bezier(0.28, 0.04, 0.2, 1.02);
  }

  .drop-down-content span a {
    color: #646c7a;
    margin-left: 18px;
  }

  .drop-down-content span:hover {
    background-color: #F1F2F4;
  }

  .drop-down-content span:hover a {
    color: #34B3E6;
  }


  .main-station {
    color: #646C7A;
    display: inline-block;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      background: url('../../static/img/tv.png') no-repeat;
      background-size: 100%;
      width: 16px;
      height:16px;
      left: -19px;
      top: 19px;
    }
  }

  .user {
    line-height: normal;
    position: relative;
    width: 55px;
    height: 55px;
    display: inline-block;

    .user-box {
      z-index: 100;
      position: absolute;
      border-radius: 50%;
      background: url('../../static/img/user.jpg') no-repeat center;
      background-size: 60%;
      width: 55px;
      height: 55px;
      transition: all .2s linear;
    }

    .user-dropdown {
      position: relative;
      display: none;
      overflow: hidden;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      position: absolute;
      background-color: #fff;
      width: 295px;
      height: 360px;
      top: 55px;
      left: -117px;
      box-shadow: 0 5px 1em .2em rgba(221, 227, 232, .9);
      /*弹出样式总是不对，需要更改，包括header左侧的弹出也不对，太生硬了。*/
      animation: user-box-display .3s cubic-bezier(0.28, 0.04, 0.2, 1.02);

      .id-experience-content {
        overflow: hidden;
        text-align: center;
        margin-top: 50px;
        font-size: 16px;
        color: #646C7A;
        animation: move-left-in .45s cubic-bezier(0.28, 0.04, 0.18, 0.97);

        .icon-father {
          width: 17px;
          height: 17px;
          display: inline-block;
          background: url('../../static/img/grandfather.png') no-repeat center;
          background-size: 100%;
          margin-left: 2px;
          transform: translateY(2px);
        }

        .experience {
          width: 85%;
          margin: 10px auto 0;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .ex-line {
            position: relative;
            background-color: #E6EDF3;
            height: 8px;
            border-radius: 10px;
            width: 160px;
          }

          .ex-line-in {
            border-radius: 10px;
            position: absolute;
            background: linear-gradient(to right, #1AF6F7, #08A3FF);
            height: 100%;
            width: 70%;
            top: 0;
            left: 0;
            animation: experience-to-right .4s cubic-bezier(0.28, 0.04, 0.18, 0.97);
          }
        }

        .experience span {
          font-size: 12px;
          color: #36B4E7;
        }
      }

      .gode-silver-achievement {
        line-height: normal;
        width: 90%;
        margin: 20px auto 0;
        animation: move-left-in-b .45s cubic-bezier(0.28, 0.04, 0.18, 0.97) .1s;
        animation-fill-mode: backwards;

        & > div {
          border-bottom: 1px #e5e5e5 solid;
        }

        .gode-silver {
          margin-top: 5px;
          padding-bottom: 7px;
          line-height: 20px;

          & img {
            vertical-align: bottom;
          }

          & > div:first-child {
            margin-bottom: 10px;
          }
        }

        .achievement {
          line-height: 45px;

          & img {
            vertical-align: middle;
            transform: translateY(-1px);
          }
        }
      }

      .broadcast-content {
        width: 90%;
        margin: 0 auto;
        animation: move-left-in-b .45s cubic-bezier(0.28, 0.04, 0.18, 0.97) .2s;
        animation-fill-mode: backwards;

        .broadcast-content-in {
          margin: 10px auto;
          & > div {
            padding-left: 20px;

            & > div {
              .common-text-gray-hover-blue;
              width: 50%;
            }
          }
          & > div > div:nth-child(1) {
            text-align: left;
          }
          & > div > div:nth-child(2){
            text-align: right;
          }

          .broadcast-in {

            & a {
              position: relative;
              line-height: 35px;
              .common-text-gray-hover-blue
            }

            .a-broadcast:hover .bro-center::before{
              position: absolute;
              width: 16px;
              height: 16px;
              background: url('../../static/img/broadcast-center-active.png') center;
              transform: translateY(55%);
              left: -20px;
              content: '';
            }

            .a-space:hover .main-space::before{
              position: absolute;
              width: 16px;
              height: 16px;
              background: url('../../static/img/main-space-active.png') center;
              transform: translateY(55%);
              left: -20px;
              content: '';
            }

            .a-message:hover .message-center::before{
              position: absolute;
              width: 16px;
              height: 16px;
              background: url('../../static/img/message-center-active.png') center;
              transform: translateY(55%);
              left: -20px;
              content: '';
            }

            .a-live:hover .my-live::before{
              position: absolute;
              width: 16px;
              height: 16px;
              background: url('../../static/img/my-live-active.png') center;
              transform: translateY(55%);
              left: -20px;
              content: '';
            }

            .bro-center::before {
              position: absolute;
              width: 16px;
              height: 16px;
              background: url('../../static/img/broadcast-center.png') center;
              transform: translateY(55%);
              left: -20px;
              content: '';
            }
            .main-space::before {
              position: absolute;
              width: 16px;
              height: 16px;
              background: url('../../static/img/main-space.png') center;
              transform: translateY(55%);
              left: -20px;
              content: '';
            }
            .message-center::before {
              position: absolute;
              width: 16px;
              height: 16px;
              background: url('../../static/img/message-center.png') center;
              transform: translateY(55%);
              left: -20px;
              content: '';
            }
            .my-live::before {
              position: absolute;
              width: 16px;
              height: 16px;
              background: url('../../static/img/my-live.png') center;
              transform: translateY(55%);
              left: -20px;
              content: '';
            }
          }
        }

      }

      .common-text-gray-hover-blue {
        color: #9FA2A9;

        &:hover {
          color: #35B4E7;
        }
      }

      .exit {
        position: absolute;
        // transform: translateY(50px);
        width: 100%;
        height: 50px;
        bottom: 0;
        background: #F1F2F4;
        color: #B8B8B8;
        text-align: center;
        line-height: 50px;
        animation: login-out .45s cubic-bezier(0.28, 0.04, 0.18, 0.97) .3s;
        animation-fill-mode: backwards;
      }
    }

    &:hover .user-box {
      background-size: 110%;
      transform: translateY(50%);
      box-shadow: 0 0 1em .1em rgba(35, 173, 229, .3)
    }

    &:hover .user-hover-shadow {
      display: block;
    }

    &:hover .user-dropdown {
      display: block;
    }
  }
</style>
