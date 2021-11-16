<template>
  <div class="coment-info-container">
    <CommentForm v-on="$listeners" />
    <CommentContent :list="list" :aside="aside" :loading="loading" />
  </div>
</template>

<script>
import CommentContent from "@/components/CommentContent";
import CommentForm from "@/components/CommentForm";

export default {
  props: ["list", "aside",'loading'],
  data() {
    return {};
  },
  components: {
    CommentContent,
    CommentForm,
  },
  methods: {},
  computed: {},
};
</script>

<style lang="less" scoped>
.coment-info-container {
  width: 100%;
  position: relative;
}
.comment-content-container{
  margin-top: 20px;
}
</style>