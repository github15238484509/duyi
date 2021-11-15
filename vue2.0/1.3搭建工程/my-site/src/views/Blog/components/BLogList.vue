<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in getList" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <router-link
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </router-link>
        </div>
        <div class="main">
          <router-link
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <router-link
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
                query: {
                  page: 1,
                  limit: $route.query.limit || 10,
                },
              }"
              class=""
              >{{ item.category.name }}</router-link
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pager
      :current="pager"
      :limit="limit"
      :total="total"
      @ChangePage="ChangePage"
    />
  </div>
</template>

<script>
import formatDate from "@/utils/formatDate";
import fetchData from "@/mixin/fetchData";
import { getblog } from "@/api";
import Pager from "@/components/Pager";
export default {
  mixins: [fetchData([])],
  data() {
    return {};
  },
  methods: {
    async getData() {
      return await getblog(this.pager, this.limit, this.categoryId);
    },
    formatDate,
    ChangePage(e) {
      console.log(this.$route);
      if (this.$route.params.categoryId) {
        this.$router.push({
          name: "CategoryBlog",
          params: {
            categoryId: this.$route.params.categoryId,
          },
          query: {
            page: e,
            limit: this.$route.query.limit || 10,
          },
        });
      } else {
        this.$router.push({
          name: "Blog",
          query: {
            page: e,
            limit: this.limit,
          },
        });
      }
    },
  },
  computed: {
    getList() {
      return this.lists.rows;
    },
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    pager() {
      return +this.$route.query.page || 1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    total() {
      return +this.lists.total;
    },
  },
  components: {
    Pager,
  },
  created() {
    console.log(this.$route);
  },
  watch: {
    $route: async function () {
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.lists = await this.getData();
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/style/color.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>