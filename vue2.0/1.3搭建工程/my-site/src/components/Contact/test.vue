<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
.test-container {
  .test();
  background: #000;
  margin-top: 500px;
  width: 200px;
}
</style>