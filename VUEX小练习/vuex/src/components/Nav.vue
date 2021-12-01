<template>
  <div>
    <span v-if="status === 'loading'"> loading... </span>

    <template v-if="status === 'login'">
      <router-link to="/user"> {{ data }} </router-link>
      <span @click="exitHandle"> 退出 </span>
    </template>
    <router-link v-else to="/login">login</router-link>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters("userInfo", ["status"]),
    ...mapState("userInfo", ["data"]),
  },
  methods: {
    async exitHandle() {
      await this.$store.dispatch("userInfo/logout");
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>