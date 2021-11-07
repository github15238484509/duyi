<template>
  <div class="empty-container">
    <Icon type='empty'/>
    <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
  props:{
    text:{
      type:String,
      default:'暂无数据'
    }
  },
  components:{
    Icon
  }
}
</script>

<style lang="less" scoped>
@import  "~@/style/mixin.less";
@import "~@/style/color.less";
.empty-container{
  .self-center();
  text-align: center;
  .icon-container{
    font-size: 70px;
  }
  p{
    color: @gray;
  }
}
</style>