<template>
  <div class="deta-info-container">
    <h1>{{ data.title }}</h1>
    <div class="aside">
      <span>日期: {{ formatDate(data.createDate) }}</span>
      <span>浏览: {{ data.scanNumber }}</span>
      <a href="">评论: {{ data.commentNumber }}</a>
      <a href="">{{ data.category && data.category.name }}</a>
    </div>
    <div v-html="data.htmlContent"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
export default {
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    formatDate,
  },
  created() {
  
  },
  mounted() {

  },
};
</script>

<style lang="less" scoped>
.deta-info-container {
  width: 100%;
}
</style>