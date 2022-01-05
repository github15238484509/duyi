<template>
  <div class="login-container">
    <a-form-model
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-model-item has-feedback label="Email" prop="email">
        <a-input
          placeholder="请输入邮箱"
          v-model.trim="ruleForm.email"
          type="text"
          autocomplete="off"
        />
      </a-form-model-item>
      <a-form-model-item has-feedback label="Password" prop="password">
        <a-input
          placeholder="请输入密码"
          v-model.trim="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </a-form-model-item>

      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('ruleForm')">
          Submit
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
  data() {
    let emailCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (emailReg.test(value)) {
          callback();
        } else {
          callback(new Error("邮箱格式错误"));
        }
      }
    };
    let passwordCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: "",
        password: "",
      },
      rules: {
        email: [{ validator: emailCheck, trigger: "change" }],
        password: [{ validator: passwordCheck, trigger: "change" }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
     submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          var result = await login(this.ruleForm);
          console.log(result);
          if(result.status==="fail"){
           this.$message.warning(result.msg);
          }else{
            this.$message.success(result.msg);
             console.log(result.data);
             this.$store.commit("user/changeUser",result.data)
             this.$router.push({
               path:"/home"
             })
          }
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .ant-form {
    width: 500px;
    padding-top: 24px;
    border: 1px solid pink;
  }
}
</style>