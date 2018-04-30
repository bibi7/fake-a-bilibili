<template lang="html">
  <div class="header-input right">
    <div>
      <input type="text" name="" value="" placeholder="许下你的愿望吧_(:з」∠)_">
      <button type="button">
        <i class="search-icon" @mousedown="searchMousedown" @mouseup="searchMouseup"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonInput',
  data () {
    return {

    }
  },
  methods: {
    searchMousedown: (e) => {
      e.target.style.backgroundSize = '80%';
    },
    searchMouseup: (e) => {
      e.target.style.backgroundSize = '100%';
    }
  }
}
</script>

<style lang="less" scoped>
  .header-input {
    position: relative;
    height: 100%;
    margin-right: 25px;
    width: 245px;

    & > div {
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      margin: auto 0;
      line-height: 30px;
      background-color: #F1F2F4;
      border-radius: 20px;
      height: 30px;
      & input {
        position: absolute;
        left: 0;
        width: 200px;
        font-family: 'Microsoft Yahei';
        background-color: transparent;
        border: none;
        height: 30px;
        padding-left: 20px;
        box-sizing: border-box;
      }

      & button {
        position: absolute;
        right: 0;
        border: none;
        background-color: transparent;
        height: 30px;
        cursor: pointer;

        .search-icon {
          position: absolute;
          left: -30px;
          top: 0;
          width: 20px;
          height: 30px;
          background: url('../../static/img/search.jpg') no-repeat center;
        }
      }
    }


  }
</style>
