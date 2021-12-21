<template>
  <div>
    <router-view></router-view>
    <!-- <Tabbar></Tabbar> -->
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar.vue";
export default {
  components: {
    Tabbar,
  },
};
</script>

<style>
</style>