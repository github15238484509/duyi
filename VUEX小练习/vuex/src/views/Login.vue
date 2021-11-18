<template>
  <div @submit.prevent="sumbitHandle" class="login-container">
    <div v-show="loading">登陆中...</div>
    <form>
      <label>
        用户名:
        <input type="text" v-model="userInfo.name" placeholder="请输入用户名" />
        <i class="error">{{ userInfoError.name }}</i>
      </label>
      <label>
        密码:
        <input type="password" v-model="userInfo.password" placeholder="密码" />
        <i class="error">{{ userInfoError.password }}</i>
      </label>
      <button>登录</button>
    </form>
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
  data() {
    return {
      userInfo: {
        name: "",
        password: "",
      },
      userInfoError: {
        name: "",
        password: "",
      },
      loading: false,
    };
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    sumbitHandle() {
      let nameError = this.userInfo.name ? "" : "请填写用户名";
      this.userInfoError.name = nameError;
      let passwordError = this.userInfo.password ? "" : "请填写用户密码";
      this.userInfoError.password = passwordError;

      if (nameError || passwordError) {
        console.log("就让你提交");
        return;
      }
      this.loading = true;
      login(this.userInfo).then((data) => {
        this.loading = false;
        console.log(data);
        if (data.code === -1) {
          this.userInfo.name = "";
          this.userInfo.password = "";
          alert(data.message);
          return;
        }
        this.$store.commit("userInfo/changeName", data.data.name);
        this.$router.push({
          path: this.$route.query.path || "/",
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
form {
  width: 400px;
  margin: 0 auto;
}
label {
  display: block;
  height: 50px;
  i {
    display: block;
  }
}
</style>