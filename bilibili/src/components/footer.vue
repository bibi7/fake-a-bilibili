<template lang="html">
  <div class="footer">
    <div class="clear">
      <!--左侧，包含各种合作信息和连接-->
      <div class="info left">
        <div class="left">
          <dl>
            <dt></dt>
            <dd>
              <a href="http://www.bilibili.com/html/aboutUs.html" target="_blank">关于我们</a>
            </dd>
            <dd>
              <a href="http://www.bilibili.com/html/friends-links.html" target="_blank">友情链接</a>
            </dd>
            <dd>
              <a href="http://bmall.bilibili.com/#!/" target="_blank">哔哩哔哩周边</a>
            </dd>
            <dd>
              <a href="http://www.bilibili.com/html/contact.html" target="_blank">联系我们</a>
            </dd>
            <dd>
              <a href="http://www.bilibili.com/html/join.html" target="_blank">加入我们</a>
            </dd>
          </dl>
        </div>
        <div class="left"></div>
        <div class="left">
          <dl>
            <dd>
              <a href="http://www.bilibili.com/html/aboutUs.html" target="_blank">帮助中心</a>
            </dd>
            <dd>
              <a href="http://www.bilibili.com/html/friends-links.html" target="_blank">工具使用教程</a>
            </dd>
            <dd>
              <a href="http://bmall.bilibili.com/#!/" target="_blank">招聘公告</a>
            </dd>
            <dd>
              <a href="http://www.bilibili.com/html/contact.html" target="_blank">如何成为主播</a>
            </dd>

          </dl>
        </div>
      </div>
      <!--右侧，二维码部分-->
      <div class="right">
        2
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer_'
}
</script>

<style lang="less" scoped>
.footer {
  background-color: #F5F6F8;

  & > div {
    width: 1100px;
    padding-top: 30px;
    margin: 0 auto;

    .info > div:nth-child(2) {
      height: 70px;
      background-color: #d3d3d3;
      width: 1px;
      margin-top: 40px;
    }

    .info > div:nth-child(3) {
      margin: 50px 0 0 74px;
      // padding-left: 74px;
    }

    .info dl{
      width: 434px;

      & dt {
        background: url('../../static/img/footer/logo.svg') no-repeat;
        background-size: 60px 28px;
        height: 50px;
      }

      & dd {
        float: left;
        width: 120px;
        height: 30px;
        font-size: 14px;

        & a {
          color: #9F9F9F;

          &:hover {
            color: #60ADE8;
          }
        }
      }
    }
  }
}
</style>
