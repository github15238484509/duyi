<template>
  <div id="app">
    <div class="app-container">
      <Layout>
        <template #left>
          <div class="left">
            <SiteSidebar />
          </div>
        </template>
        <template #default>
          221
        </template>
      </Layout>
    </div>
  </div>
</template>
<script>
import Layout from "@/components/Layout";
import SiteSidebar from "@/components/SiteSidebar";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Layout,
    SiteSidebar,
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: pink;
  .left {
    width: 250px;
    height: 100%;
    background: black;
  }
}
</style>