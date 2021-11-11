<template>
  <div class="carousel-item-container">
    <ImageLoader :placeholder="info.midImg" :src="info.bigImg"> </ImageLoader>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["info"],
  components: {
    ImageLoader,
  },
};
</script>

<style lang="less" scoped>
.carousel-item-container {
  width: 100%;
  height: 100%;
}
</style>