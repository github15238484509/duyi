<template>
  <div @submit.prevent="sumbitHandle" class="login-container">
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
    };
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    async sumbitHandle() {
      let nameError = this.userInfo.name ? "" : "请填写用户名";
      this.userInfoError.name = nameError;
      let passwordError = this.userInfo.password ? "" : "请填写用户密码";
      this.userInfoError.password = passwordError;
      if (nameError || passwordError) {
        console.log("就让你提交");
        return;
      }
      const result = await this.$store.dispatch(
        "userInfo/login",
        this.userInfo
      );
      console.log(result);
      if (result) {
        this.$router.push("/")
      }
    },
  },
  computed: {},
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