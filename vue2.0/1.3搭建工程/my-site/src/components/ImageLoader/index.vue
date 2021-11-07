<template>
  <div class="image-loader-container">
    <img v-if="!allload" :src="placeholder" alt="" />
    <img
      :style="{ opacity: opacity, transition: `all ${duration}ms` }"
      @load="handerLoad"
      :src="src"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originload: false, //原图是否加载完成了
      allload: false, //所有的状态都完成了
    };
  },
  methods: {
    handerLoad() {
      this.originload = true;
      setTimeout(() => {
        this.allload = true;
        this.$emit("load");
      }, this.duration);
    },
  },
  computed: {
    opacity() {
      return this.originload ? 1 : 0;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(3vw);
  }
}
</style>