
<template>
  <div>
    <router-link to="/">HOME</router-link>
    <router-link to="/login">LOGIN</router-link>
    <UserInfo></UserInfo>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script >
import UserInfo from "./components/UserInfo.vue";
export default {
  components: {
    UserInfo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
