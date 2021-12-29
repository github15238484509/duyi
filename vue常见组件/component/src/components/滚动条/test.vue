<template>
  <div class="test">
    <ScrollBox :list="num" v-slot="{ list }">
      <div v-for="item in list" :key="item" class="itme">
        {{ item }}
      </div>
    </ScrollBox>
    <button @click="num = 100">222</button>
  </div>
</template>

<script>
import ScrollBox from "./index.vue";
export default {
  data() {
    return {
      num: 20,
    };
  },
  components: {
    ScrollBox,
  },
};
</script>

<style scoped>
.test {
  height: 500px;
  width: 500px;
  border: 1px solid;
  margin: 50px auto;
}
.itme {
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>