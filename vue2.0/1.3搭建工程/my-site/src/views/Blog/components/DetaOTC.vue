<template>
  <div class="detaotc-container">
    <h2>标题</h2>
    <RightList :list="getdata" @clickHandle="clickHandle" />
  </div>
</template>
<script>
import RightList from "./RightList.vue";
export default {
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
  },
  computed: {
    getdata() {
      console.log(this.$route);
      return this.data.map((it) => {
        console.log(it.anchor);
        return {
          ...it,
          isSelset: this.$route.hash==it.anchor,
        };
      });
    },
  },
};
</script>

<style lang="less" scoped>

</style>