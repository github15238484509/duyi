<template>
  <div class="home-container">
    <!-- 轮播图的盒子 -->
    <ul
      class="carousel-container"
      ref="carouselContainer"
      :style="{ marginTop: currentTop }"
    >
      <li v-for="item in banners" :key="item.id">
        <CarouselItem />
      </li>
    </ul>
    <!-- 上下按钮 -->
    <div @click="changeIndexLoop(-1)" class="icon btn-up">
      <Icon type="arrowUp" />
    </div>
    <div @click="changeIndexLoop(1)" class="icon btn-down">
      <Icon type="arrowDown" />
    </div>
    <!-- 指示器  indicator-->
    <ul class="indicator">
      <li
        :class="{ active: index == i }"
        v-for="(item, i) in banners"
        :key="item.id"
        @click="changeIndex(i)"
      ></li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
@import "~@/style/mixin.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: all 0.3s;

  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  .self-center();
  font-size: 35px;
  cursor: pointer;
  // color: white;
  &.btn-up {
    top: 20px;
    transform: translateX(-50%);
    animation: up 3s infinite;
  }
  &.btn-down {
    top: auto;
    bottom: 20px;
    transform: translateX(-50%);
    animation: down 3s infinite;
  }
  @keyframes up {
    0% {
      transform: translateX(-50%) translateY(-10px);
    }
    50% {
      transform: translateX(-50%) translateY(0px);
    }
    100% {
      transform: translateX(-50%) translateY(-10px);
    }
  }
  @keyframes down {
    0% {
      transform: translateX(-50%) translateY(-10px);
    }
    50% {
      transform: translateX(-50%) translateY(0px);
    }
    100% {
      transform: translateX(-50%) translateY(-10px);
    }
  }
}
.indicator {
  .self-center();
  right: 20px;
  left: auto;
  li {
    cursor: pointer;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid white;
    margin: 10px 0;
    &.active {
      background: white;
    }
  }
}
</style>

<script>
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";
import { getBanner } from "@/api";
export default {
  data() {
    return {
      banners: [],
      index: 0,
      containerHeight: 0,
    };
  },
  components: {
    CarouselItem,
    Icon,
  },
  async created() {
    this.banners = await getBanner();
  },
  computed: {
    currentTop() {
      return -this.containerHeight * this.index + "px";
    },
  },
  methods: {
    changeIndex(i) {
      this.index = i;
    },
    changeIndexLoop(val) {
      this.index =
        (this.index + val + this.banners.length) % this.banners.length;
    },
  },
  mounted() {
    this.containerHeight = this.$refs.carouselContainer.clientHeight;
  },
};
</script>

