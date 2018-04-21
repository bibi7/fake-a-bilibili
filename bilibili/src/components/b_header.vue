<template lang="html">
  <div class="header">
    <div class="header-in">
      <div class="left">
        <a href="#">
          <div class="main-station">
            <span>主站</span>
          </div>
        </a>
        <nav>
          <a href="#">
            <div>
              <span>直播</span>
            </div>
          </a>
          <a href="#">
            <div>
              <span>全部</span>
            </div>
          </a>
          <a href="#">
            <div>
              <span>娱乐</span>
            </div>
          </a>
          <a href="#" class="game">
            <div>
              <span>游戏</span>
              <div class="drop-down drop-game">
                <div class="drop-down-content">
                  <span>
                    <a href="#">绝地求生</a>
                  </span>
                  <span>
                    <a href="#">英雄联盟</a>
                  </span>
                  <span>
                    <a href="#">DOTA2</a>
                  </span>
                  <span>
                    <a href="#">炉石传说</a>
                  </span>
                  <span>
                    <a href="#">守望先锋</a>
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a href="#">
            <div>
              <span>手游</span>
            </div>
          </a>
          <a href="#">
            <div>
              <span>绘画</span>
            </div>
          </a>
        </nav>
      </div>
      <div class="right">
        2
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="less" scoped>
@height: 55px;
  .header {
    height: @height;
    background-color: #fff;

    .header-in {
      width: 80%;
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
          border-radius: 5px;
          top: 55px;
          left: -15px;
          line-height: 35px;
        }
        .drop-game {
          display: none;
        }
      }
      .game:hover .drop-game {
        display: block;
      }
    }
  }

  .drop-down-content {
    border: 1px red solid;
    margin: 5px 0;
    width: 120px;
  }

  .drop-down-content span {
    display: block;
    text-align: left;
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
</style>
