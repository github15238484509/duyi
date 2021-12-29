<template>
  <div class="box" ref="box">
    <div
      @mousedown="barScrollDown"
      class="bar-scroll"
      :style="{
        transform: `translateY(${barScrollTop}px)`,
        background: color,
      }"
      ref="barScroll"
    ></div>
    <div
      class="boxCon"
      ref="boxCon"
      :style="{ 'padding-right': showScrollWidth + 'px' }"
      @scroll="boxConscroll"
    >
      <slot :list="list"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: ()=>{
      return []
    },
    color: {
      type: String,
      default: "olivedrab",
    },
  },
  data() {
    return {
      scrollWidth: 0, //系统滚动条的宽度
      prePositon: 0, //鼠标抬起的时候记录当前位置
      isDrag: false, ///判断是否在拖拽滚动条
      barScroll: null, //barScroll 元素
      boxCon: null, //boxCon 元素
      currentPostion: 0, //鼠标按下位置
      barScrollTop: 0, //滚动条的当前位置
      scrollMax: 0, //滚动太滚动的最大高度
    };
  },
  computed: {
    showScrollWidth() {
      return this.isDrag ? this.scrollWidth : 0;
    },
  },
  methods: {
    getScrollWidth() {
      var div = document.createElement("div");
      div.style.width = "100px ";
      div.style.height = "100px ";
      div.style.overflow = "scroll";
      document.body.appendChild(div);
      this.scrollWidth = div.offsetWidth - div.clientHeight;
      div.remove();
    },
    boxConscroll(e) {
      e.preventDefault();
      if (this.isDrag) {
        //防止拖拽的时候只用滑轮滚动
        return;
      }
      this.computBarScrollTop();
    },
    documentMove(e) {
      var endPostion = e.clientY;
      var overPostion = endPostion - this.currentPostion + this.prePositon;
      if (overPostion <= 0) {
        overPostion = 0;
      } else if (overPostion >= this.scrollMax) {
        overPostion = this.scrollMax;
      }
      this.barScrollTop = overPostion;
      this.boxCon.scrollTop =
        (overPostion / this.scrollMax) *
        (this.boxCon.scrollHeight - this.boxCon.offsetHeight);
    },
    computBarScrollTop() {
      var barScrollTop =
        (this.boxCon.scrollTop /
          (this.boxCon.scrollHeight - this.boxCon.offsetHeight)) *
        this.scrollMax;
      barScrollTop = Math.floor(barScrollTop);
      this.barScrollTop = barScrollTop;
      this.prePositon = this.barScrollTop;
    },
    barScrollDown(e) {
      e.preventDefault();
      this.isDrag = true;
      this.boxCon.style.overflow = "hidden";
      this.currentPostion = e.clientY;
      document.addEventListener("mousemove", this.documentMove);
      document.addEventListener("mouseup", this.documentUp);
    },
    documentUp(e) {
      e.preventDefault();
      this.boxCon.style.overflowY = "scroll";
      this.isDrag = false;
      this.prePositon = this.barScrollTop;
      document.removeEventListener("mousemove", this.documentMove);
      document.removeEventListener("mouseup", this.documentUp);
    },
    setScrollWidht() {
      this.computBarScrollTop(); //数据更改的时候会变
      if (this.boxCon.offsetHeight >= this.boxCon.scrollHeight) {
        this.barScroll.style.display = "none";
      } else {
        this.barScroll.style.display = "block";
      }
    },
  },
  watch: {
    list() {
      this.$nextTick(() => {
        this.setScrollWidht();
      });
    },
  },
  mounted() {
    this.getScrollWidth();
    this.barScroll = this.$refs.barScroll;
    this.boxCon = this.$refs.boxCon;
    this.scrollMax = this.boxCon.offsetHeight - this.barScroll.offsetHeight; //和滚动条滚动的最大距离
    this.boxCon.style.width =
      this.$refs.box.offsetWidth + this.scrollWidth + "px"; //设置内容盒子的宽度
    this.setScrollWidht();
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
}

.boxCon {
  overflow-y: scroll;
  height: 100%;
  user-select: none;
  box-sizing: border-box;
}

.bar-scroll {
  width: 4px;
  height: 60px;
  border-radius: 4px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
</style>