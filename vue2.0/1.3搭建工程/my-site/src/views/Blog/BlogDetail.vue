<template>
  <Layout>
    <template #default>
      <Detainfo :data="lists" />
    </template>
    <template #right>
      <div class="otc">
        <DetaOTC :data="lists.toc" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import Detainfo from "./components/Detainfo";
import DetaOTC from "./components/DetaOTC";
import fetchData from "@/mixin/fetchData";
import { getblogDetail } from "@/api";
export default {
  mixins: [fetchData({})],
  created() {},
  components: {
    Layout,
    Detainfo,
    DetaOTC,
  },
  methods: {
    async getData() {
      return await getblogDetail(5);
    },
  },
};
</script>

<style lang="less" scoped>
.otc {
  width: 300px;
}
</style>
