<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">left</div>
      </template>
      <template #default>
        <div class="main">mainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmain</div>
      </template>
      <template #right>
        <div class="right">right</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.test-container{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .left{
    width: 200px;
    height: 100%;
    background: red;
  }
  .right{
    width: 200px;
    height: 100%;
    background: red;
  }
}

</style>