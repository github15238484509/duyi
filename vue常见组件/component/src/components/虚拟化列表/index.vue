<template>
  <div class="virtual-container" ref="conrHeight" @scroll="scroll">
    <div
      class="virtualBox"
      :style="{
        height: totalHeight + 'px',
      }"
      ref="virtualBox"
    >
      <slot :data="returnList"></slot>
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
      scrollTop1: 0,
      totalHeight: 0,
      returnList: [],
    };
  },
  methods: {
    scroll() {
      console.log(this.scrollTop1,this.$refs.conrHeight.scrollTop);
      this.scrollTop1 = this.$refs.conrHeight.scrollTop;
      this.init()
    },
    init() {
      this.returnList = this.list.slice(
        this.start,
        this.end
      ).map((item,i)=>{
        return {
          item,
          Y: this.scrollTop1 
        }
      })
    },
  },
  mounted() {
    this.totalHeight = this.list.length * this.itemHeihgt;
    this.init();
  },
  computed: {
    start() {
      return Math.floor(this.scrollTop1 / this.itemHeihgt);
    },
    end() {
      return Math.ceil(
        (this.scrollTop1 + this.$refs.conrHeight.offsetHeight) / this.itemHeihgt
      );
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


3/2
1/2

2
2/3