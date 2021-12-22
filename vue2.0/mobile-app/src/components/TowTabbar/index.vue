<template>
  <div class="towtabbar-container" ref="parentss">
    <div
      class="item"
      v-for="(item, i) in list"
      :key="item"
      @click="changeCurrent(i, $event, item)"
      :class="{ active: i === current }"
    >
      {{ typeof item === "number" ? "全部" : item }}
    </div>
  </div>
</template>

<script>
import { speed } from "../../utils/tools";
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    changeCurrent(i, e, item) {
      this.current = i;
      var { parentss } = this.$refs;
      var pTop = parentss.offsetTop;
      var pHeight = parentss.offsetHeight;
      var children = e.target;
      var cTop = children.getBoundingClientRect().top;
      var cHeight = children.offsetHeight;
      this.$emit("Towchange", item);
      speed(
        parentss.scrollTop,
        cTop + cHeight / 2 - pTop - pHeight / 2,
        parentss,
        "scrollTop"
      );
    },
  },
};
</script>

<style lang="less" scoped>
.towtabbar-container {
  width: 60px;
  height: 100%;
  overflow: auto;
  flex: none;
  .item {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    box-sizing: border-box;
    border-left: 6px solid transparent;
    transition: all 0.5s;
    &.active {
      border-left: 6px solid pink;
    }
  }
}
</style>