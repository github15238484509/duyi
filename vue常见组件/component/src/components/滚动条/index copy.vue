<template>
  <div class="box" ref="box">
    <div
      @mousedown="barScrollDown"
      class="bar-scroll"
      :style="{
        transform: `translateY(${barScrollTop}px)`,
        background: barColor,
      }"
      ref="barScroll"
    ></div>
    <div class="boxCon" ref="boxCon" @scroll="boxConscroll">
      <slot :list="list"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {},
    barColor: {
      type: String,
      default: "olivedrab",
    },
  },
  data() {
    return {
      scrollWidth: 0, //系统滚动条的宽度
      prePositon: 0, //鼠标抬起的时候记录当前位置
      barScroll: null, //barScroll 元素
      boxCon: null, //boxCon 元素
      curDownPostion: 0, //鼠标按下位置
      barScrollTop: 0, //滚动条的当前位置
      scrollMax: 0, //滚动太滚动的最大高度
      isMove: false,
    };
  },
  methods: {
    getScrollWidth() {
      var div = document.createElement("div");
      div.style.width = "100px";
      div.style.height = "100px";
      div.style.overflow = "scroll";
      document.body.appendChild(div);
      this.scrollWidth = div.offsetWidth - div.clientHeight;
      div.remove();
    },
    boxConscroll(e) {
      e.preventDefault();
      this.computBarScrollTop();
    },
    computBarScrollTop() {
      var barScrollTop =
        (this.boxCon.scrollTop /
          (this.boxCon.scrollHeight - this.boxCon.offsetHeight)) *
        this.scrollMax;
      barScrollTop = Math.floor(barScrollTop);
      this.barScrollTop = barScrollTop;
      if (!this.isMove) {
        this.prePositon = this.barScrollTop;
      }
    },
    documentMove(e) {
      this.isMove = true;
      var endPostion = e.clientY;
      var current = endPostion - this.curDownPostion + this.prePositon;
      this.boxCon.scrollTop =
        (current / this.scrollMax) *
        (this.boxCon.scrollHeight - this.boxCon.offsetHeight);
    },
    barScrollDown(e) {
      e.preventDefault();
      this.curDownPostion = e.clientY;
      document.addEventListener("mousemove", this.documentMove);
      document.addEventListener("mouseup", this.documentUp);
    },
    documentUp(e) {
      this.isMove = false;
      e.preventDefault();
      this.prePositon = this.barScrollTop;
      document.removeEventListener("mousemove", this.documentMove);
      document.removeEventListener("mouseup", this.documentUp);
    },
    setScrollWidht() {
      this.computBarScrollTop();
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