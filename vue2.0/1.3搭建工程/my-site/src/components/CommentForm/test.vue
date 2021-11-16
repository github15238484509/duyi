<template>
  <div>
    <CommentInfo @handleSubmit="handleSubmit" />
  </div>
</template>

<script>
import CommentInfo from "./index.vue";
export default {
  components: {
    CommentInfo,
  },
  methods: {
    handleSubmit(info, callback) {
      console.log(info);
      callback && callback();
    },
  },
};
</script>

<style>
</style>