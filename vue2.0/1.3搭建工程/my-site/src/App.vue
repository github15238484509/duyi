<template>
  <div id="app">

      <h2>tmd</h2>
     <Avatar :size="200" url="https://img2.baidu.com/it/u=1958206316,940643306&fm=26&fmt=auto"></Avatar>
  </div>
</template>
<script>
import Avatar from '@/components/Avatar' 
export default {
  name:"App",
  components:{
    Avatar
  }
}
</script>