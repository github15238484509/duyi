<template>
  <div class="test">
    <page-com></page-com>
  </div>
</template>

<script>
import pageCom from "./index.vue"
export default {
  components:{
    pageCom
  }
}
</script>

<style>
.test{
  width: 500px;
  height: 500px;
  margin: 50px auto;
  border: 1px solid;
}
</style>