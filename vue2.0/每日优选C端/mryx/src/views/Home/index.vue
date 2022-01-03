<template>
  <div class="Home">
    <LayoutBox></LayoutBox>
  </div>
</template>

<script>
import LayoutBox from "./Layout.vue";

export default {
  name: "Home",
  components: {
    LayoutBox,
  },
};
</script>
<style lang="less" scoped>
.Home {
  width: 100%;
  height: 100%;
}
</style>
