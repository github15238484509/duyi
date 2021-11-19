<template>
  <div class="about-container" v-loading="isLoading || loading">
    <iframe
      @load="iframaHandle"
      class="ifrmae"
      :src="lists.url"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import { getAbout } from "@/api";
import fetchData from "@/mixin/fetchData";
export default {
  mixins: [fetchData({})],
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    async getData() {
      return await getAbout();
    },
    iframaHandle() {
      this.loading = false;
    },
  },
};
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  position: relative;
  .ifrmae {
    width: 100%;
    height: 100%;
  }
}
</style>
