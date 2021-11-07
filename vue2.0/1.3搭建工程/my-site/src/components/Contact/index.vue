<template>
  <div class="contact-container">
    <ul>
      <li>
        <a href="">
          <div class="icon">
            <Icon type="home" />
          </div>
          1323
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
            <Icon type="home" />
          </div>
          1323
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
@import "~@/style/color.less";
.contact-container {
  width: 100%;
  height: 100%;
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