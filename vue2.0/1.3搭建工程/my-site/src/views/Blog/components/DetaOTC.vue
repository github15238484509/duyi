<template>
  <div class="detaotc-container">
    <h2>标题</h2>
    <RightList :list="getdata" @clickHandle="clickHandle" />
  </div>
</template>
<script>
import RightList from "./RightList.vue";
import Events from "@/Event";
import { throttle } from "@/utils";
export default {
  data() {
    return {
      otcdes: 200,
      activeAnchor: "",
      throttle: null,
    };
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    RightList,
  },
  methods: {
    clickHandle(e) {
      location.hash = e.anchor;
    },
    getRightActive() {
      for (const dom of this.getDoms) {
        const top = this.getDomTop(dom);
        if (top > 0 && top <= this.otcdes) {
          this.activeAnchor = dom.id;
          return;
        } else if (top > this.otcdes) {
          return;
        } else {
          // 在规定的范围上方
          this.activeAnchor = dom.id; // 先假设自己是激活的，然后继续看后面
        }
      }
    },
    getDomTop(dom) {
      return dom.getBoundingClientRect().top;
    },
  },
  created() {
    this.throttle = throttle(this.getRightActive, 50);
    Events.$on("commentScroll", this.throttle);
  },
  destroyed() {
    Events.$off("commentScroll", this.throttle);
  },
  computed: {
    getdata() {
      const getOTC = (data = []) => {
        return data.map((it) => {
          return {
            ...it,
            isSelset: it.anchor === this.activeAnchor,
            children: getOTC(it.children),
          };
        });
      };
      return getOTC(this.data);
    },
    getDoms() {
      const doms = [];
      function getDom(arr) {
        for (const i of arr) {
          doms.push(document.querySelector("#" + i.anchor));
          if (i.children) {
            getDom(i.children);
          }
        }
      }
      getDom(this.data);
      return doms;
    },
  },
};
</script>

<style lang="less" scoped>
</style>