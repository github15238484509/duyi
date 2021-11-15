<template>
  <Layout>
    <template #default><BLogList /> </template>
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BLogList from "./components/BLogList";
import BlogCategory from "./components/BlogCategory";
export default {
  created() {},
  components: {
    Layout,
    BLogList,
    BlogCategory,
  },
};
</script>

<style lang="less" scoped>
</style>
