<template>
  <div class="container">
    <HuaKuai @change="change" :leftDot="num" ></HuaKuai>
    <button @click="num = 20">safasf</button>
  </div>
</template>

<script>
import HuaKuai from "./index.vue";
export default {
  components: {
    HuaKuai,
  },
  data() {
    return {
      num: 10,
    };
  },
  methods: {
    change(e) {
      console.log(e);
    },
  },
};
</script>

<style>
.container {
  width: 500px;
  height: 500px;
  box-sizing: border-box;
  border: 1px solid pink;
  margin: 50px auto;
  display: flex;
  align-items: center;
  padding: 20px;
}
</style>