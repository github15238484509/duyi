<template>
  <div
    class="lineBox"
    ref="lineBox"
    :style="{
      background: backColor,
      borderRadius: backHeight + 'px',
      height: backHeight + 'px',
    }"
  >
    <div
      class="line"
      ref="line"
      :style="{
        width: lineWidht,
        transform: lineTrans,
        background: lineColor,
        marginLeft: lineLeft,
      }"
    ></div>

    <div
      @mousedown="domDown('one', $event)"
      class="one"
      ref="one"
      :data-title="oneTitle"
      :style="{
        transform: `translateX(${oneTranslate}px)`,
        background: globlueColor,
        width: globalSize + 'px',
        height: globalSize + 'px',
        marginTop: globlueTop,
      }"
    ></div>
    <div
      @mousedown="domDown('tow', $event)"
      class="tow"
      ref="tow"
      :data-title="towTitle"
      :style="{
        transform: `translateX(${towTranslate}px)`,
        background: globlueColor,
        width: globalSize + 'px',
        height: globalSize + 'px',
        marginTop: globlueTop,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      //最大值 小球显示的最大值
      type: Number,
      default: 100,
    },
    leftDot: {
      // 小球初始化显示的位置
      type: Number,
      default: 0,
    },
    rightDot: {
      // 小球初始化显示的位置
      type: Number,
      default: 60,
    },
    lineColor: {
      type: String,
      default: "pink",
    },
    backColor: {
      type: String,
      default: "red",
    },
    globlueColor: {
      type: String,
      default: "rebeccapurple",
    },
    backHeight: {
      type: Number,
      default: 10,
    },
    globalSize: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      line: null, //dom
      one: null, //dom
      tow: null, //dom
      globuleMax: null, //line的最大长度
      currentDon: null, //点击当前是谁
      start: 0, //鼠标点击的当前位置
      onecurrent: 0, //one当前抬起时候的坐标
      towcurrent: 0, //tow当前抬起时候的坐标
      oneTranslate: 0, //one平移的距离
      towTranslate: 0, //tow平移的距离
    };
  },
  computed: {
    dom() {
      return this[this.currentDon];
    },
    oneTitle() {
      return Math.floor((this.oneTranslate / this.globuleMax) * this.max);
    },
    towTitle() {
      return Math.floor((this.towTranslate / this.globuleMax) * this.max);
    },
    lineWidht() {
      return Math.abs(this.oneTranslate - this.towTranslate) + "px";
    },
    lineTrans() {
      var linepostion = Math.min(this.oneTranslate, this.towTranslate);
      return `translateX(${linepostion}px)`;
    },
    globlueTop() {
      return -(this.globalSize - this.backHeight) / 2 + "px";
    },
    lineLeft() {
      return this.globalSize / 2 + "px";
    },
  },
  watch: {
    leftDot() {
      this.globuleInit(); // 初始化 小球的位置
    },
    rightDot() {
      this.globuleInit(); // 初始化 小球的位置
    },
  },
  methods: {
    globuleInit() {
      this.onecurrent = this.oneTranslate =
        (this.leftDot / this.max) * this.globuleMax; //元素当前平移的位置
      this.towcurrent = this.towTranslate =
        (this.rightDot / this.max) * this.globuleMax; //元素当前平移的位置
    },
    domDown(info, e) {
      this.currentDon = info;
      this.start = e.clientX;
      document.addEventListener("mousemove", this.docMove);
      document.addEventListener("mouseup", this.docUp);
    },
    docUp() {
      this[this.currentDon + "current"] = this[this.currentDon + "Translate"];
      document.removeEventListener("mousemove", this.docMove);
      document.removeEventListener("mouseup", this.docUp);

      this.$emit("change", [
        Math.min(this.oneTitle, this.towTitle),
        Math.max(this.oneTitle, this.towTitle),
      ]);
    },
    docMove(e) {
      var end = e.clientX;
      var current = end - this.start + this[this.currentDon + "current"];
      if (current <= 0) {
        current = 0;
      } else if (current >= this.globuleMax) {
        current = this.globuleMax;
      }
      this[this.currentDon + "Translate"] = current;
    },
  },
  mounted() {
    this.line = this.$refs.line;
    this.one = this.$refs.one;
    this.tow = this.$refs.tow;
    this.lineBox = this.$refs.lineBox;
    this.globuleMax = this.lineBox.offsetWidth - this.one.offsetWidth; //小球移动的最大距离
    this.globuleInit(); // 初始化 小球的位置
  },
};
</script>

<style scoped>
.lineBox {
  width: 100%;
  position: relative;
  user-select: none;
}

.one,
.tow {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  cursor: pointer;
}

.line {
  position: absolute;
  height: 100%;
  border-radius: 5px;
  left: 0;
  top: 0;
  width: 0%;
}

.one:active::after,
.tow:active::after {
  display: block;
}

.one:active::before,
.tow:active::before {
  display: block;
}

.tow::before,
.one::before {
  /* 他们是三角形 */
  content: "";
  display: none;
  width: 0;
  height: 0;
  top: 0;
  left: 50%;
  position: absolute;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid transparent;
  border-right: 5px solid rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  transform: translateX(-50%) rotate(-90deg);
  transform-origin: center;
  margin-top: -10px;
  /*  居中 离小球 -10px */
}

.tow::after,
.one::after {
  content: attr(data-title);
  position: absolute;
  left: 50%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  display: none;
  transition: all 0.3s;
  border-radius: 3px;
  transform-origin: center;
  width: 25px;
  height: 25px;
  transform: translateX(-50%);

  line-height: 25px;
  margin-top: -35px;
  /* -35px 自己的高度，加小三角形的离小球的距离 */
}
</style>