<template>
<div class="text-container">
 <ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
  :duration="5000"
  @load="handerLoad"
/>
</div>
</template>

<script>
import ImageLoader from "./"
export default {
  methods:{
    handerLoad(){
      console.log('原图显现出来了1313');
    }
  },
  components:{
    ImageLoader
  }
}
</script>

<style scoped>
.text-container{
  width: 500px;
  height: 400px;
  margin: 50px auto;
  border: 1px solid pink;
}

</style>