<template>
  <div class="empty-container">
    <img :src="url" :alt="text">
    <p class="inof_P">{{text}}</p>
  </div>
</template>

<script>
export default {
  props:{
    text:{
      type:String,
      default:'暂无数据'
    },
    url:{
      type:String,
      default:'https://img0.baidu.com/it/u=1874637298,22059970&fm=26&fmt=auto'
    },

  }
};
</script>

<style lang="less" scope>
@import '~@/style/color.less';
.empty-container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img{
    max-width: 500px;
    max-height: 500px;
  }
  .inof_P{
    color:@lightWords;
  }
}
</style>