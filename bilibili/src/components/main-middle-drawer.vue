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
  </div>
</template>

<script>
export default {
  name: 'middle-drawer',
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
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
          transition: all .4s cubic-bezier(.22,.58,.12,.98);
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
  }
</style>
