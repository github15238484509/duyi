<template>
  <div class="test-container">
    <SiteSidebar />
  </div>
</template>

<script>
import SiteSidebar from "./";
export default {
  components: {
    SiteSidebar,
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/reset.less";
.test-container {
  width: 300px;
  height: 600px;
  background: black;
}
</style>