<template>
  <div id="app">
    <div class="app-container">
      <Layout>
        <!-- <template #left>
          <div class="left">
            <SiteSidebar />
          </div>
        </template> -->
        <template #default>
          <router-view></router-view>
        </template>
      </Layout>
    </div>
    <ToTop />
  </div>
</template>
<script>
import ToTop from "@/components/ToTop";
import Layout from "@/components/Layout";
import SiteSidebar from "@/components/SiteSidebar";
import Events from "@/Event";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Layout,
    SiteSidebar,
    ToTop,
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  // background: pink;
  .left {
    width: 250px;
    height: 100%;
    background: black;
  }
}
</style>