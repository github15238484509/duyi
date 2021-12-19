<template>
  <div class="gap-container">
    <div class="item" v-for="item in result" :key="item.country">
      <span>{{ item.country }}</span>
      <div
        class="progress"
        :style="{ background: item.color, width: item.size + 'px' }"
      ></div>
      <span class="nums">{{ item.value }}万</span>
    </div>
  </div>
</template>

<script>
import { getRightLists } from "./gap";
import { toRef } from "vue";
export default {
  props: ["lists"],
  setup(props, cxt) {
    let result = getRightLists(toRef(props, "lists"), 450);
    return {
      result,
    };
  },
};
</script>

<style scoped>
.gap {
  width: 100%;
  height: 100%;
}
.item {
  height: 50px;
  display: flex;
  border-left: 1px solid;
  align-items: center;
  padding-left: 10px;
}
.progress {
  height: 30px;
  margin: 0 10px;
}
</style>