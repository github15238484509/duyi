<template>
  <span v-if="loading">login...</span>
  <div v-else-if="user" class="one">{{ user.name }} <a href="">logout</a></div>
  <span v-else>login</span>
</template>

<script>
import { getUser } from "../store/index.js";
export default {
  setup() {
    return {
      ...getUser,
    };
  },
};
</script>

<style scoped>
.one {
  display: inline-block;
}
</style>