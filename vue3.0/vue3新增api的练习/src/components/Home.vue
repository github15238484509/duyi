<template>
  <div class="flex">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div><HomeAsync></HomeAsync></div>
  </div>
</template>
<script>
// import HomeAsync from "./HomeAsync.vue";
import { asyncComponent } from "../utils";
const HomeAsync = asyncComponent("../components/HomeAsync.vue");
export default {
  components: {
    HomeAsync,
  },
};
</script>

<style scoped>
.flex {
  margin: 50px auto;
  width: 400px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
.flex div {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-content: center;
  border: 1px solid;
  box-sizing: border-box;
}
</style>