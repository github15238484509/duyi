<template>
  <div class="pager-container" v-if="pagernumber >= 1">
    <a href="javascript:" :class="{ disable: current === 1 }"><<</a>

    <a
      href="javascript:"
      :class="{ active: item === current }"
      v-for="item in numpage"
      :key="item"
      >{{ item }}</a
    >
    <a href="javascript:" :class="{ disable: pagernumber === current }">>></a>
  </div>
  <div v-else>没有数据</div>
</template>
<style lang="less" scoped>
@import "~@/style/color.less";
.pager-container {
  margin: 20px auto;
  width: 100%;
  text-align: center;
  a {
    color: @primary;
    padding: 20px 10px;
    &.disable {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @dark;
    }
  }
}
</style>
<script>
export default {
  props: {
    current: {
      type: Number,
      default: 10,
    },
    limit: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 156120,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pagernumber() {
      return Math.ceil(this.total / this.limit);
    },
    minpage() {
      var min = this.current - Math.floor(this.visibleNumber / 2);
      return min <= 0 ? 1 : min;
    },
    maxpage() {
      let max = this.minpage + this.visibleNumber - 1;
      if (max > this.pagernumber) {
        max = this.pagernumber;
      }
      return max;
    },
    numpage() {
      var num = [];
      for (let i = this.minpage; i <= this.maxpage; i++) {
        num.push(i);
      }
      return num;
    },
  },
};
</script>

