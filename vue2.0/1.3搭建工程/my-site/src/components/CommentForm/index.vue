<template>
  <form @submit.prevent="handleSubmit" class="commmet-from">
    <label class="label">
      <h3>昵称 :</h3>
      <div class="text-content">
        <input v-model.trim="info.nickName" maxlength="10" type="text" />
        <span>{{ getNickNameLenght }}/10</span>
      </div>
      <i>{{ error.nickName }}</i>
    </label>
    <label class="label">
      <h3>内容 :</h3>
      <div class="text-content">
        <textarea v-model.trim="info.nickComment" maxlength="300"></textarea>
        <span>{{ getNickCommentLenght }}/300</span>
      </div>
      <i>{{ error.nickComment }}</i>
    </label>
    <button :disabled="isSumbit">{{ isSumbit ? "提交中..." : "提交" }}</button>
  </form>
</template>

<script>
import showMessage from "@/utils/showMessage.js";
export default {
  data() {
    return {
      info: {
        nickName: "",
        nickComment: "",
      },
      error: {
        nickName: "",
        nickComment: "",
      },
      isSumbit: false,
    };
  },
  computed: {
    getNickNameLenght() {
      return this.info.nickName.length;
    },
    getNickCommentLenght() {
      return this.info.nickComment.length;
    },
  },
  methods: {
    handleSubmit() {
      if (!this.info.nickName) {
        this.error.nickName = "请填写内容";
        return;
      } else {
        this.error.nickName = "";
      }
      if (!this.info.nickComment) {
        this.error.nickComment = "请填写内容";
        return;
      } else {
        this.error.nickComment = "";
      }

      this.isSumbit = true;
      this.$emit("handleSubmit", this.info, (info) => {
        this.info.nickName = "";
        this.info.nickComment = "";
        this.isSumbit = false;
        showMessage({
          duration: 1000,
          content: "添加成功",
          type: info,
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/color.less";
.commmet-from {
  width: 100%;
  h3 {
    margin: 0;
    padding: 0;
    margin: 10px 0;
    color: white;
    text-shadow: 1px 0 0 #4a4a4a, -1px 0 0 #4a4a4a, 0 -1px 0 #4a4a4a,
      0 1px 0 #4a4a4a;
    display: inline-block;
    font-size: 1.1rem;
  }

  input,
  textarea {
    margin: 0;
    padding: 0px;
    outline: none;
    border: 2px dotted rgba(0, 0, 0, 0.5);
    resize: none;
    width: 100%;
    transition: all 0.3s;
    padding-left: 5px;
    box-sizing: border-box;
    border-radius: 5px;
    color: black;
    line-height: 1.5rem;
    text-shadow: 1px 0 0 #ffffff, -1px 0 0 #fff, 0 -1px 0 #fff, 0 1px 0 #fff;
    letter-spacing: 2px;
    font-size: 1.1rem;
    display: block;
    &:focus {
      border: 2px dotted #1381e980;
    }
  }
  textarea {
    height: 6rem;
  }
}
.label {
  display: block;
  .text-content {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 5px 0px;
    span {
      color: rgb(211, 201, 201);
      position: absolute;
      right: 5px;
      bottom: 8px;
      font-size: 0.8rem;
    }
  }
  i {
    display: block;
    line-height: 1.2rem;
    height: 1.2rem;
    color: red;
  }
}
button {
  margin-top: 20px;
  outline: none;
  display: inline-block;
  text-align: center;
  width: 100px;
  height: 2rem;
  line-height: 2rem;
  font-size: 1rem;
  color: #fff;
  background: @primary;
  border: none;
  border-radius: 5px;
  &:disabled {
    background: @danger;
  }
}
</style>