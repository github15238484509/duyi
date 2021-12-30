<template>
  <div class="virtual-container" ref="conrHeight" @scroll="start">
    <div
      class="virtualBox"
      :style="{
        height: totalHeight,
        transform: transform,
      }"
      ref="virtualBox"
    >
      <slot :data="data"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
    showNum: {
      type: Number,
      default: 10,
    },
    itemHeihgt: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      conrHeight: 0,
      virScrollHeight: 0,
      SSS: 0,
      minShow: 0,
    };
  },
  methods: {
    setHeight() {
      this.conrHeight = this.$refs.conrHeight.offsetHeight;
      this.virScrollHeight = this.$refs.virtualBox.scrollHeight;
      this.minShow = Math.round(this.conrHeight / this.itemHeihgt);
    },
    start() {
      this.SSS = Math.round(this.$refs.conrHeight.scrollTop / this.itemHeihgt);
    },
  },
  mounted() {
    this.setHeight();
  },
  computed: {
    transform() {
      return `translateY(${this.SSS * this.itemHeihgt}px)`;
    },
    totalHeight() {
      return this.list.length * this.itemHeihgt - this.conrHeight + "px";
    },
    end() {
      if (this.minShow > this.showNum) {
        return this.SSS + this.minShow;
      } else {
        return this.SSS + this.showNum;
      }
    },
    data() {
      return this.list.slice(this.SSS, this.end);
    },
  },
};
</script>

<style scoped>
.virtual-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.virtualBox {
  width: 100%;
  height: 100%;
}
</style>