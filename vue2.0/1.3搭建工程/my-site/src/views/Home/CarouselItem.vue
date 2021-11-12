<template>
  <div class="carousel-item-container">
    <ImageLoader
      :placeholder="info.midImg"
      @load="showText()"
      :src="info.bigImg"
    >
    </ImageLoader>
    <div class="title" ref="title">{{ info.title }}</div>
    <div class="des" ref="des">{{ info.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["info", "index", "currentIndex"],
  data() {
    return {
      titleWidth: 0,
      desWidth: 0,
    };
  },
  components: {
    ImageLoader,
  },
  methods: {
    showText() {
      if (!this.show) {
        return;
      }
      this.$refs.title.style.width = 0;
      this.$refs.des.style.width = 0;
      this.$refs.title.style.opacity = 1;
      this.$refs.des.style.opacity = 1;
      
      this.$refs.title.offsetWidth;
      this.$refs.des.offsetWidth;

      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.des.style.width = this.desWidth + "px";
    },
  },
  computed: {
    show() {
      return this.index == this.currentIndex;
    },
  },
  watch: {
    show(n) {
      if (n) {
        this.showText();
      } else {
        this.$refs.title.style = "";
        this.$refs.des.style = "";
      }
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.offsetWidth;
    this.desWidth = this.$refs.des.offsetWidth;
  },
};
</script>

<style lang="less" scoped>
.carousel-item-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.title,
.des {
  position: absolute;
  left: 30px;
  letter-spacing: 2px;
  color: white;
  opacity: 0;
  overflow: hidden;
  white-space: nowrap;
  font-style: italic;
  padding-right: 1rem;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0px 1px 0 rgba(0, 0, 0, 0.5), 0px -1px 0 rgba(0, 0, 0, 0.5);
}
.title {
  top: calc(50% - 30px);
  font-size: 3rem;
  transform: translateY(-50%);
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
.des {
  top: calc(50% + 30px);
  font-size: 1.5rem;
  transform: translateY(-50%);
  transition: all 0.5s 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
</style>