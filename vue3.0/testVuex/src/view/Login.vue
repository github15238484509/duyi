<template>
  <form @submit.prevent="userLogin">
    <input v-model="account" type="text" />
    <input v-model="password" type="text" />
    <button>登录</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { login } from "../store";
export default {
  setup() {
    const account = ref("");
    const password = ref("");
    async function userLogin() {
      let a = await login(account.value, password.value);
      if (a) {
        localStorage.setItem("user", JSON.stringify(a));
      } else {
        alert(a);
      }
    }
    return {
      account,
      password,
      userLogin,
    };
  },
};
</script>

<style>
</style>