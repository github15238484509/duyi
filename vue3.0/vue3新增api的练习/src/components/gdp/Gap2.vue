<template>
  <div class="gap-container">
    <div class="item" v-for="item in result" :key="item.country">
      <div
        :data-title="item.country"
        :data-num="item.value"
        class="progress"
        :style="{ background: item.color, width: item.size + 'px' }"
      ></div>
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
  align-items: center;
  padding-left: 10px;
  width: 100%;
}
.progress {
  height: 30px;
  margin: 10px auto;
  text-align: center;
  line-height: 30px;
  color: white;
  overflow: hidden;
  text-shadow: 1px 0 rgba(0, 0, 0, 0.3), -1px 0 rgba(0, 0, 0, 0.3),
    0 1px rgba(0, 0, 0, 0.3), 0 -1px rgba(0, 0, 0, 0.3);
}
.progress::before {
  content: attr(data-title);
  margin-right: 10px;
}
.progress::after {
  content: attr(data-num);
}
</style>