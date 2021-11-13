<template>
  <div
    class="carousel-item-container"
    ref="carouselBox"
    @mousemove="handerMousemove"
    @mouseleave="handelMouseleave"
  >
    <div class="carousel-img" ref="ImageLoaderBox" :style="imagePosition">
      <ImageLoader
        :placeholder="info.midImg"
        @load="showText()"
        :src="info.bigImg"
      >
      </ImageLoader>
    </div>
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
      titleWidth: 0, //文字过渡
      desWidth: 0, //文字过渡
      carouselBox: null,
      ImageLoaderBox: null,
      mouseX: null, //鼠标当前位置
      mouseY: null, //鼠标当前位置
      leaveTime: 0,//鼠标离开屏幕过渡的时间
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

    handerMousemove(e) {
      this.leaveTime = 0;
      this.mouseX =
        e.clientX - this.$refs.carouselBox.getBoundingClientRect().left;
      this.mouseY =
        e.clientY - this.$refs.carouselBox.getBoundingClientRect().top;
    },
    handelMouseleave() {
      this.mouseX = this.carouselBox.width / 2;
      this.mouseY = this.carouselBox.height / 2;
      this.leaveTime = 0.5;
    },
    setSize() {
      // 获取图片和盒子的宽度
      this.carouselBox = {
        width: this.$refs.carouselBox.offsetWidth,
        height: this.$refs.carouselBox.offsetHeight,
      };
      this.ImageLoaderBox = {
        width: this.$refs.ImageLoaderBox.offsetWidth,
        height: this.$refs.ImageLoaderBox.offsetHeight,
      };
    },
  },
  computed: {
    imagePosition() {
      if (!this.ImageLoaderBox || !this.ImageLoaderBox) {
        return;
      }
      var x =
        (this.mouseX / this.carouselBox.width) *
        (this.ImageLoaderBox.width - this.carouselBox.width);
      var y =
        (this.mouseY / this.carouselBox.height) *
        (this.ImageLoaderBox.height - this.carouselBox.height);
      return {
        transform: `translate(${-x}px, ${-y}px) `,
        transition: `all ${this.leaveTime}s`,
      };
    },
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
    this.setSize();
    this.mouseX = this.carouselBox.width / 2;
    this.mouseY = this.carouselBox.height / 2;
    window.addEventListener("resize", this.setSize);
  },
  deactivated() {
    window.removeEventListener("resize", this.resize);
  },
};
</script>

<style lang="less" scoped>
.carousel-item-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.carousel-img {
  width: 110%;
  height: 110%;
  // transition: 0.1s;
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