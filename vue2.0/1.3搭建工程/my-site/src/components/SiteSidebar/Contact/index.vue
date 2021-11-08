<template>
  <div class="contact-container">
    <ul>
      <li>
        <a>
          <div class="icon">
            <Icon type="github" />
          </div>
          <span>DuYi-Edu</span>
        </a>
      </li>
      <li>
        <a href="mailto:1138075190@qq.com">
          <div class="icon">
            <Icon type="mail" />
          </div>
          <span>1138075190@qq.com</span>
        </a>
      </li>
      <li>
        <a
          href="tencent://message/?Menu=yes&uin=1138075190&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
        >
          <div class="icon">
            <Icon type="qq" />
          </div>
          <span>3263023350</span>
        </a>
        <div class="pop">
          <img
            src="https://img2.baidu.com/it/u=3643648615,1379429149&fm=26&fmt=auto"
            alt=""
          />
        </div>
      </li>
      <li>
        <a href="">
          <div class="icon">
            <Icon type="weixin" />
          </div>
          <span>这是微信</span>
        </a>
        <div class="pop">
          <img
            src="https://img2.baidu.com/it/u=3643648615,1379429149&fm=26&fmt=auto"
            alt=""
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/reset.less";
.contact-container {
  @liheight: 38px;
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
    background: inherit;
  }
  ul {
    padding-left: 10px;
    box-sizing: border-box;
  }
  li {
    height: @liheight;
    line-height: @liheight;
    position: relative;
    color: @gray;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
    a {
      text-decoration: none;
      cursor: pointer;
      display: flex;
      background: inherit;
      .icon {
        margin-right: 5px;
      }
      &:hover {
        color: white;
      }
    }
    .pop {
      background: #fff;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: @liheight + 2px;
      padding: 20px;
      box-sizing: border-box;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: all 0.3s;
      border-radius: 5px;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 8px;
        height: 8px;
        background: inherit;
        bottom: -4px;
      }
      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }
    }
  }
}
</style>