<template>
  <div class="contact-container">
    <ul>
      <li>
        <a>
          <div class="icon">
            <Icon type="github" />
          </div>
          <span>{{ data.githubName }}</span>
        </a>
      </li>
      <li>
        <a :href="`mailto:${data.mail}`">
          <div class="icon">
            <Icon type="mail" />
          </div>
          <span>{{ data.mail }}</span>
        </a>
      </li>
      <li>
        <a
          :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
        >
          <div class="icon">
            <Icon type="qq" />
          </div>
          <span>{{ data.qq }}</span>
        </a>
        <div class="pop">
          <img :src="data.qq" alt="" />
        </div>
      </li>
      <li>
        <a href="">
          <div class="icon">
            <Icon type="weixin" />
          </div>
          <span>{{ data.weixin }}</span>
        </a>
        <div class="pop">
          <img :src="data.weixinQrCode" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState("setting", ["data"]),
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