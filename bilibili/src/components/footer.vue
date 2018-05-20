<template lang="html">
  <div class="footer">
    <div class="clear">
      <!--左侧，包含各种合作信息和连接-->
      <div class="info left clear">
        <div class="left">
          <dl class="left-dl">
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
          <dl class="right-dl clear">
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
        <div class="other-info">
          <div>
            <div>
              <div class="partner partner-top"></div>
              <div class="partner partner-under"></div>
            </div>
            <div class="icp">
              <ul>
                <li>广播电视节目制作经营许可证：(沪) 字第 1248 号</li>
                <li>网络文化经营许可证：沪网文 [2013]0480-056 号</li>
                <li>信息网络传播视听节目许可证：0910417</li>
              </ul>
              <ul>
                <li>互联网 ICP 备案：沪 ICP 备 13002172 号 - 3</li>
                <li>沪 ICP 证：沪 B2-20100043</li>
                <li>
                  <a href="http://jb.ccm.gov.cn" target="_blank">12318 全国文化市场举报网站</a>
                </li>
                <li>
                  <a href="http://www.12377.cn/?spm=a2hww.20023042.0.0" target="_blank">上海市互联网违法和不良信息举报中心</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--右侧，二维码部分-->
      <div class="right">
        <div class="footer-right">
          <ul class="footer-right-ul clear">
            <li>
              <a href="//link.bilibili.com/p/eden/download">
                <div class="circle">

                </div>
                <div class="footer-text">bilibili link 下载</div>
              </a>
            </li>
            <li>
              <a href="//link.bilibili.com/p/help/index#/contact">
                <div class="circle">

                </div>
                <div class="footer-text">联系客服</div>
              </a>
            </li>
            <li>
              <a>
                <div class="circle">

                </div>
                <div class="footer-text">官方微信</div>
              </a>
            </li>
            <li>
              <a href="http://weibo.com/u/5245903632">
                <div class="circle">

                </div>
                <div class="footer-text">新浪微博</div>
              </a>
            </li>
          </ul>
        </div>
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
      width: 240px;
    }

    .left-dl {
      width: 434px;
    }

    .right-dl {
      width: 240px;
    }

    .info dl {
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

    .other-info {
      padding-top: 130px;

      & > div {
        display: flex;
      }

      .partner {
        background: url('../../static/img/footer/partner.png') no-repeat;
        width: 100px;
        height: 35px;
      }

      .partner-top {
        background-position: 0 -458px;
      }

      .partner-under {
        margin-top: 7px;
        background-position: 0 -508px;
      }

      .icp {
        width: 566px;
        margin: 6px 0 0 28px;
        font-size: 12px;
        color: #999;
        line-height: 1.5;

        & > ul {
          width: 50%;
          float: left;

          & a {
            color: #999;

            &:hover {
              color: #60ADE8;
            }
          }
        }
      }
    }

    .footer-right {
      width: 220px;

      .footer-right-ul {

        & > li {
          width: 90px;
          height: 121px;
          position: relative;
          margin-right: 10px;
          float: left;

          .circle {
            margin: 0 auto;
            width: 58px;
            height: 58px;
            border-radius: 50%;
            line-height: 58px;
            border: 1px #dedede solid;
            color: #a7abac;
          }

          .footer-text {
            font-size: 12px;
            color: #999;
            margin-top: 10px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
