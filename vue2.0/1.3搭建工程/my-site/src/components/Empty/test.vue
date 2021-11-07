<template>
 <div class="info">
    <Empty text="我是帅哥"  />
    <Empty1/>
 </div>
</template>

<script>
import Empty from "./"
import Empty1 from "./index2.vue"
export default {
  components:{
    Empty,
    Empty1
  }
}
</script>

<style scoped>
.info{
  width: 800px;
  height: 800px;
  border: 1px solid red;
  position: relative;
  
}

</style>