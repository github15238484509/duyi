<template>
  <div class="goodlist-container">
    <div class="item" v-for="item in list" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
.goodlist-container{
  height: 100%;
  flex: 1;
  overflow: auto;
  .item{
    width: 100%;
  }
}
</style>