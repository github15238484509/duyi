<template>
  <div id="app">
    <div class="virtual">
      <VirtualBox :list="list" :showNum="10">
        <template v-slot:default="{ data }">
          <div
            class="item"
            v-for="item in data"
            :key="item.item"
            :style="{
              transform: `translateY(${item.Y}px)`,
            }"
          >
            {{ item.item }}
          </div>
        </template>
      </VirtualBox>
    </div>
    <div class="googs">
      <GoodInfo></GoodInfo>
    </div>

    <TestTest />
    <TestTest2 />
  </div>
</template>

<script>
import TestTest from "@/components/short/test.vue";

import TestTest2 from "@/components/房子长列表/test.vue";

import GoodInfo from "@/components/商品详情";
import VirtualBox from "@/components/虚拟化列表";

export default {
  name: "App",
  data() {
    return {
      list: null,
    };
  },
  created() {
    var arr = [];
    for (let i = 0; i < 1000; i++) {
      arr.push(i);
    }
    this.list = arr;
  },
  components: {
    TestTest,
    TestTest2,
    GoodInfo,
    VirtualBox,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.googs {
  width: 800px;
  background: #1f222e;
  margin: 50px auto;
  padding: 20px;
}
.virtual {
  width: 500px;
  height: 600px;
  margin: 20px auto;
  border: 1px solid red;
  box-sizing: border-box;
}
.item {
  height: 50px;
  text-align: center;
  border: 1px solid red;
  box-sizing: border-box;
}
</style>
