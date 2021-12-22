<template>
  <div class="one-tabbar" ref="oneTabbar">
    <div
      class="tabbar-item"
      v-for="(item, i) in list"
      :key="i"
      @click="changeCurrent(i, $event,item)"
    >
      <div class="img" :class="{ active: current === i }">
        <img :src="item.imgURL" alt="" />
      </div>
      <div :class="{ active: current === i }">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { speed } from "../../utils/tools";
export default {
  props: {
    list: Array,
    require: true,
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    changeCurrent(i, e,item) {
      this.$emit("onechange",item.title)
      this.current = i;
      var { oneTabbar } = this.$refs;
      var parentWidth = oneTabbar.offsetWidth;
      var selfWidth = e.target.offsetWidth;
      var selfleft = e.target.getBoundingClientRect().left;

      // 运动函数
      speed(
        oneTabbar.scrollLeft,
        selfleft + selfWidth / 2 - parentWidth / 2,
        oneTabbar,
        "scrollLeft"
      );
    },
  },
};
</script>

<style lang="less" scoped>
.one-tabbar {
  height: 70px;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: auto;
  .tabbar-item {
    flex: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 60px;
    height: 70px;
    box-sizing: border-box;

    .img {
      border: 1px solid transparent;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.active {
        border: 1px solid red;
        color: pink;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: block;
      }
    }
  }
}
</style>