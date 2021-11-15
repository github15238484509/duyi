<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="getList" @clickHandle="clickHandle" />
  </div>
</template>

<script>
import fetchData from "@/mixin/fetchData";
import RightList from "./RightList.vue";

import { getBlogtype } from "@/api";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  methods: {
    async getData() {
      return await getBlogtype();
    },
    clickHandle(item) {
      if(this.$route.params.categoryId ==item.id){
        return
      }
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query: {
            page: 1,
            limit: this.$route.query.limit || 10,
          },
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          params: {
            categoryId: item.id,
          },
          query: {
            page: 1,
            limit: this.$route.query.limit || 10,
          },
        });
      }
    },
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    getList() {
      const allArticleCount = this.lists.reduce((a, b) => {
        return a + b.articleCount;
      }, 0);
      const result = [
        { name: "全部", id: -1, articleCount: allArticleCount },
        ...this.lists,
      ];
      return result.map((it) => {
        return {
          ...it,
          isSelect: it.id === this.categoryId,
          aside: `${it.articleCount}篇`,
        };
      });
    },
  },
};
</script>

<style scoped lang="less">
.blog-category-container {
  width: 250px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>