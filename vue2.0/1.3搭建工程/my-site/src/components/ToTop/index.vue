<template>
  <div class="go-top-container" v-show="btnShow" @click="clickHandle">></div>
</template>

<script>
import Events from "@/Event";
export default {
  data() {
    return {
      btnShow: false,
    };
  },
  methods: {
    clickHandle() {
      Events.$emit("scrollMainTop");
    },
  },
  created() {},
  mounted() {
    Events.$on("commentScroll", (e) => {
      this.btnShow = e > 800;
    });
  },
};
</script>

<style lang="less" scoped>
.go-top-container {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 40px;
  right: 40px;
  user-select: none;
  transform: rotate(-90deg);
  color: white;
  cursor: pointer;
}
</style>