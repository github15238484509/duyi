<template>
  <Layout>
    <template #default>
      <div class="default" ref="commentBox">
        <Detainfo v-loading="isLoading" :data="lists" />
        <CommentInfo
          v-if="!isLoading"
          @handleSubmit="handleSubmit"
          :list="getConList"
          :aside="getAside"
          :loading="isLoadCom"
        />
      </div>
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
import CommentInfo from "./components/CommentInfo";
import fetchData from "@/mixin/fetchData";
import { throttle } from "@/utils";
import Events from "@/Event";
import { getblogDetail, addComment, getcomment } from "@/api";
import ScrollToTop from "@/mixin/ScrollToTop";
export default {
  mixins: [fetchData({}), ScrollToTop("commentBox")],
  data() {
    return {
      commentList: {},
      disy: 100,
      throttle: null,
      isLoadCom: false,
    };
  },
  components: {
    Layout,
    Detainfo,
    DetaOTC,
    CommentInfo,
  },
  methods: {
    async getData() {
      return await getblogDetail(5);
    },
    async handleSubmit(e, callbak) {
      const info = await addComment(e);
      this.commentList.rows.unshift(info);
      callbak("success");
      this.commentList.total++;
    },
    async getTop() {
      const dom = this.$refs.commentBox;
      const disY = Math.abs(
        dom.scrollTop + dom.clientHeight - dom.scrollHeight
      );
      if (disY < this.disy && !this.isLoadCom) {
        this.isLoadCom = true;
        const result = await getcomment();
        setTimeout(() => {
          this.isLoadCom = false;
          this.commentList.rows = this.commentList.rows.concat(result.rows);
        }, 1000);
      }
    },
  },
  async created() {
    this.commentList = await getcomment();
    this.throttle = throttle(this.getTop, 100);
    Events.$on("commentScroll", this.throttle);
  },

  computed: {
    getAside() {
      return "评论列表 (" + this.commentList.total + "篇)";
    },
    getConList() {
      return this.commentList.rows;
    },
  },
  destroyed() {
    Events.$off("commentScroll", this.throttle);
  },
};
</script>

<style lang="less" scoped>
.default {
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.otc {
  width: 250px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
