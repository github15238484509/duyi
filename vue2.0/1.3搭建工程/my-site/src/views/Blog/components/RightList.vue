<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelect }" @click="clickInfo(item)">{{
        item.name
      }}</span>
      <span
        class="aside"
        :class="{ active: item.isSelect }"
        @click="clickInfo(item)"
        >{{ item.aside }}</span
      >
      <RightList @clickHandle="clickInfo" :list="item.children" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    clickInfo(info) {
      this.$emit("clickHandle", info);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/color.less";
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.right-list-container {
  .right-list-container {
    margin-left: 10px;
  }
  li {
    cursor: pointer;
    margin: 10px 0px;
    span {
      &:hover {
        color: @warn;
      }
      &.active {
        color: @danger;
        font-weight: 600;
      }
    }
    .aside {
      margin-left: 10px;
    }
  }
}
</style>