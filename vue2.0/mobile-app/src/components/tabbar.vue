<template>
  <van-tabbar route @change="change" v-model="active">
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/home/calssify" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item to="/home/shop" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item to="/readme" icon="manager-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    change(e) {
      console.log(e);
    },
  },
};
</script>

<style>
</style>